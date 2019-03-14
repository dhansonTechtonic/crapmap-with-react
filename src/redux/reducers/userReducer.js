import userActions from '../actions/userActions';

const initUser = {
    // STATE STRUCTURE
    user: {
        // Acc Info
        userID: "ajhsd8fh893h2j9d2",
        username: "testUsername",
        email: "email@gmail.com",
        posts: [],
        searchRadius: 0,

        auth: false,

        //position
        position: {
            lat: 57.5,
            lng: 57.5
        }
    }
};

export default function userReducer(state=initUser, action){
    switch (action.type) {
        case "LOGIN_USER": {
            //do shit
            break;
        }
        case "REGISTER_USER": {
            //do shit
            break;
        }
        case "GET_USER": {
            //do shit
            break;
        }
        case "UPDATE_USER": {
            //do shit
            break;
        }
        case "LOGOUT_USER": {
            //do shit
            break;
        }
        case "DELETE_USER": {
            //do shit
            break;
        }
        default:
            return state;
   }
}
