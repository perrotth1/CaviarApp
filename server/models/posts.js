const { ObjectId } = require("bson");

const Users = require("./users"); 
const { client } = require("./mongo.js");

const collection = client.db(process.env.MONGO_DBNAME).collection('posts');
module.exports.collection = collection;

const userPosts = [
    {
        userHandle: "@uruhara_kisuke",
        firstName: "name",
        lastName: "name",
        profilePic: "imageFile",
        
        title: "Straight Edge",

        imgTopSrc: "https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg",
        imgTopText: "Gucci Men's Floral Puma Print T-Shirt",

        imgPantsSrc: "https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg",
        imgPantsText: "Thom Browne Men's Solid Tone Ankle Cut Trousers",

        imgShoesSrc: "https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg",
        imgShoesText: "adidas Y-3 by Yohji Yamamoto Harigane",

        postTime: Date(),

        caption: "Rocking out with my new running shoes by Yoji",

        likes: 21,

        isPublic: true

    },
    {
        userHandle: "@tony_titanium",
        firstName: "name",
        lastName: "name",
        profilePic: "imageFile",

        title: "Gentle Jogger",

        imgTopSrc: "https://images-na.ssl-images-amazon.com/images/I/41zxpmatpIL._AC_UL558_SR429,558_QL65_.jpg",
        imgTopText: "Mens Mare Operato Rigato T-Shirt",

        imgPantsSrc: "https://images-na.ssl-images-amazon.com/images/I/41drgqPSqDL._AC_UL550_SR423,550_QL65_.jpg",
        imgPantsText: "Philipp Plein Mine Men's Contrast Red Stitch Jogging Pants",

        imgShoesSrc: "https://m.media-amazon.com/images/I/817o4JlyxVL._AC_SX255_.jpg",
        imgShoesText: "New Balance Numeric NM255",

        postTime: Date(),

        caption: "This is my skating fit",

        likes: 14,

        isPublic: true
    }
]

//A mongo pipeline is like an array of filters used for narrowing down database entries in searches.
//Each item of the array is a mongo operation that does various filtering, and a collection of data will pass
//through each of these filters one by one to narrow down the data
const addOwnerPipeline = [
    { $lookup: {
        from: "users",
        localField: "user_handle",
        foreignField: "handle",
        as: "user",
    }},
    { $unwind: "$user" },
    { $project: { "owner.password": 0 } }
];

module.exports.Get = function Get( a_post_id ) {
    return collection.findOne({ _id: new ObjectId(a_post_id )});
}

module.exports.GetAll = function GetAll() {
    //return collection.aggregate(addOwnerPipeline).toArray();
    return collection.find().toArray();
}

module.exports.GetWall = function GetWall(a_handle) {
    console.log("In post model: Getting wall for " + a_handle);
    return collection.find({ userHandle: a_handle }).toArray();
}

module.exports.Delete = async function Delete(a_post_id) {
    const result = await collection.findOneAndDelete({ _id: new ObjectId(a_post_id)});

    return result.value;
}

module.exports.GetFeed = async function (a_handle) {
    console.log("In post model: getting feed for " + a_handle);
    
    const user = await Users.GetByHandle(a_handle);

    if(!user){
        console.log("User not found " );
        return Promise.reject({ code: 404, msg: "Posts not found: " + a_handle});
    }
    
    const targets = user.following.filter(x => x.isApproved == true).map(x => x.handle).concat(a_handle);

    const posts = await collection.find({ userHandle: { $in: targets }}).toArray();

    return posts;

}

module.exports.Add = async function Add(a_post){

    const user = await Users.GetByHandle(a_post.userHandle);

    a_post.firstName = user.firstName;
    a_post.lastName = user.lastName;
    a_post.profilePic = user.profilePic;
    
    a_post.postTime = Date();
    
    const result = await collection.insertOne(a_post);

    a_post._id = result.insertedId;
    return { ...a_post };
}

module.exports.Seed = async function Seed(){
    for(const p of userPosts){
        await module.exports.Add(p);
    }
}