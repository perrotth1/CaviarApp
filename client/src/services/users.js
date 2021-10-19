
const userList = [
    {
        firstName: 'Uruhara',
        lastName: 'Kisuke',
        userHandle: '@uruhara_kisuke',
        password: 'spondoulli',
        profilePic: '../assets/placeholders/user1avatar.png',
        isAdmin: true,
        email: 'perrotth1@newpaltz.edu',
        following: [ { handle: '@tony_titanium', isApproved: true} ]
    },
    {
        firstName: 'Tony',
        lastName: 'Titatium',
        userHandle: '@tony_titanium',
        password: 'metal',
        profilePic: '../assets/placeholders/user2avatar.jpg',
        isAdmin: false,
        email: 'titaniut1@newpaltz.edu',
        following: [ { handle: '@uruhara_kisuke', isApproved: true} ]
    }

]

//Searches userList by applying the provided test function to each object in the list
export function getByHandle(aHandle) {
    return ({ ...userList.find( i => i.userHandle == aHandle) });
}

export function getByEmail(aEmail) {
    return ({ ...userList.find( i => i.email == aEmail) });
}

//Get all users
export function getAll() {
    return userList;
}

export function Login(aEmail, aPassword) {
    //Check if user exists
    const user = getByEmail(aEmail);

    if( user.email != undefined ) {
        //Check password
        if( user.password == aPassword ){
            console.log("Login Successful!");

            const data = { ...user, password: undefined };
            return { user: data };
        }
        else
        {
            console.log("Incorrect Password")
            throw("error incorrect pass");
        }
    }
    else {
        console.log("No user was found for the given email!")
        throw("error user not found");
    }
}

export function deleteUser(aEmail) {
    if(userList.includes(aEmail)) {
        const user = getByEmail(aEmail);
        userList.splice( userList.getIndexOf(aEmail), 1);
        return user;
    }
    else {
        console.log("User Not Found");
    }
}

export function updateUser(aEmail, newUserObj) {
    const oldUserObj = getByEmail(aEmail);

    if(oldUserObj != undefined) {
        if(newUserObj.firstName) {
            oldUserObj.firstName = newUserObj.firstName;
        }
        if(newUserObj.lastName) {
            oldUserObj.lastName = newUserObj.lastName;
        }
        if(newUserObj.hanle) {
            oldUserObj.handle = newUserObj.handle;
        }
        if(newUserObj.password) {
            oldUserObj.password = newUserObj.password;
        }
        if(newUserObj.profilePic) {
            oldUserObj.profilePic = newUserObj.profilePic;
        }

        return { ...oldUserObj, password: undefined };
    }
    else {
        console.log("User Not Found");
    }
}

export function addUser(aUser) {
    userList.push(aUser);
    console.log("Added user to userList");
}