function loginUser(userObject) {
    console.log(userObject)
    return {
        type: "LOGIN_USER",
        payload: userObject
    }

};

function registerUser(userObject) {
    console.log(userObject)
    return {
        type: "REGISTER_USER",
        payload: userObject
    }
};

function getUser(userObject) {
    console.log(userObject)
    return {
        type: "GET_USER",
        payload: userObject
    }
};

function updateUser(userObject) {
    console.log(userObject)
    return {
        type: "UPDATE_USER",
        payload: userObject
    }
};

function logOutUser(userObject) {
    console.log(userObject)
    return {
        type: "LOGOUT_USER",
        payload: userObject
    }
};

function deleteUser(userObject) {
    console.log(userObject)
    return {
        type: "DELETE_USER",
        payload: userObject
    }
};

export default {
    loginUser,
    registerUser,
    getUser,
    updateUser,
    logOutUser,
    deleteUser
}