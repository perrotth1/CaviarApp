
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');

const { client } = require('./mongo.js');

const collection = client.db(process.env.MONGO_DBNAME).collection('users');
module.exports.collection = collection;

const userList = [
    {
        firstName: 'Uruhara',
        lastName: 'Kisuke',
        userHandle: '@uruhara_kisuke',
        password: 'spondoulli',
        profilePic: 'https://practicaltyping.com/wp-content/uploads/2020/05/urahara.jpg',
        isAdmin: true,
        email: 'perrotth1@newpaltz.edu',
        followers: [ { handle: '@tony_titanium', isApproved: true} ],
        following: [ { handle: '@tony_titanium', isApproved: true} ],
        likedPosts: []
    },
    {
        firstName: 'Tony',
        lastName: 'Titatium',
        userHandle: '@tony_titanium',
        password: 'metal',
        profilePic: 'https://cdn.shopify.com/s/files/1/2354/4133/products/TONY_700x.jpg',
        isAdmin: false,
        email: 'titaniut1@newpaltz.edu',
        followers: [ { handle: '@uruhara_kisuke', isApproved: true} ],
        following: [ { handle: '@uruhara_kisuke', isApproved: true} ],
        likedPosts: []
    }
]

module.exports.GetByHandle = async function(a_handle) { 
    const user = await collection.findOne({ userHandle: a_handle });
    return { ...user, password: undefined }
}

module.exports.GetAll = () => {
    return collection.find().toArray();
}

module.exports.Get = (user_id) => {
    return collection.findOne({ _id: new ObjectId(user_id) });
}

module.exports.Delete = async function Delete(a_user_id) {
    const result = await collection.findOneAndDelete({ _id: new ObjectId(a_user_id)});

    return result.value;
}

module.exports.Search = async function Search(a_term) {
    const results = await collection.find( { userHandle: new RegExp(a_term, "i") } ).toArray();

    return results;
}

module.exports.AddUser = async function AddUser(a_user) {
    if(!a_user.firstName) {
        return Promise.reject({ code: 422, msg: "First Name Required"})
    }

    const hash = await bcrypt.hash(a_user.password, +process.env.SALT_ROUNDS);

    a_user.password = hash;

    const results = await collection.insertOne(a_user);

    a_user.id = results.insertedId;


    return { a_user }

}

module.exports.Update = async function Update(a_user_id, a_user) {
    
    const result = await collection.findOneAndUpdate(
        { _id: new ObjectId(a_user_id) },
        { $set: a_user },
        { returnDocument: 'after' }
    )

    return { ...result.value, password: undefined }
}

module.exports.Login = async function Login(a_handle, a_password) {

    console.log("In users model, Attempting login for user: " + { a_handle, a_password });

    const user = await collection.findOne({ userHandle: a_handle });

    if(!user){
        return Promise.reject({ code: 401, msg: "No user found for that handle: " + a_handle});
    }

    const results = await bcrypt.compare(a_password, user.password);

    if(!results){
        return Promise.reject({ code: 401, msg: "Incorrect password"});
    }

    console.log("Login Successful");

    console.log("Username: " + user.userHandle);

    const userData = { ...user, password: undefined };

    return { user: userData };

}

module.exports.Seed = async function Seed() {
    for(const u of userList){
        await module.exports.AddUser(u);
    }
}



module.exports.Follow = async function Follow (a_user, a_target_user) {

    a_target_user.followers.push({
        handle: a_user.userHandle,
        isApproved: true
    })
    a_user.following.push({
        handle: a_target_user.userHandle,
        isApproved: true
    })
    const result1 = await module.exports.Update(a_target_user, a_target_user._id);
    const result2 = await module.exports.Update(a_user, a_user._id);

    return { result1, result2 };
}

module.exports.Unfollow = async function Unfollow (a_user, a_target_user) {
    const targetIndex = a_target_user.followers.indexOf({ handle: a_user.userHandle, isApproved: true });
    a_target_user.followers.splice(targetIndex, 1);

    const targetIndex2 = a_user.following.indexOf({ handle: a_target_user.userHandle, isApproved: true });
    a_user.following.splice(targetIndex2, 1);

    const result1 = await module.exports.Update(a_target_user, a_target_user._id);
    const result2 = await module.exports.Update(a_user, a_user._id);

    return { result1, result2 };
}

module.exports.Update = async function Update(a_user_new_obj, a_user_id) {


    //remove the _id field from new user object so mongo doesn't get mad about trying to overwrite _id field 
    delete(a_user_new_obj._id);

    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(a_user_id) }, 
        { $set: a_user_new_obj },
        { returnDocument: 'after'}
    );
        
    return { ...results.value, password: undefined };
}