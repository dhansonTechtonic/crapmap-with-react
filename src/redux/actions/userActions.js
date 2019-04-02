export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const RESET_USER_PASSWORD = 'RESET_USER_PASSWORD';


export const loginUser = (userObject) => ({
    type: LOGIN_USER,
    payload: userObject
});

export const registerUser = (userObject) => ({
    type: REGISTER_USER,
    payload: userObject
});

export const resetUserPassword = (userObject) => ({
    type: RESET_USER_PASSWORD,
    payload: userObject
});

export const logOutUser = (userObject) => ({
    type: LOGOUT_USER,
    payload: userObject
});

function getUser(userObject) {
    console.log(userObject)
    return {
        type: "GET_USER",
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
    resetUserPassword,
    logOutUser,
    deleteUser
}