export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';



function loginUser(userObject) {
    console.log(userObject)
    return {
        type: "LOGIN_USER",
        payload: userObject
    }

};

export const registerUser= (userObject) => ({
    type: "REGISTER_USER",
    payload: userObject
});

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

export const logOutUser = () => ({
    type: LOGOUT_USER,
    payload: {
        type: "LOGOUT_USER",
    }
});

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