// import userActions from '../actions/userActions';

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
    let payload = action.payload;
    
    switch (action.type) {
        case "LOGIN_USER": {
            // option 1
            // fetch('url.com/userEndpoint', {
            //         method: 'POST',
            //         body: payload
            //     })
            //     .then(res => console.log('Success:', res))
            //     .catch(err => console.error('Error:', err))

            // option 2
            // or just store cached user after firebase login in store for access

            // return localStorage.getItem(user)
            break;
        }
        case "NEW_USER": {
            // same as login until we figure out how login/register is going to work
            // this action could end up being just taking an object from localStorage or cache
            // and putting it into the redux store
            break;
        }
        case "GET_USER": {
            fetch('url.com/user/get', {
                    method: 'GET',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))
            break;
        }
        case "UPDATE_USER": {
            fetch('url.com/user/update', {
                    method: 'UPDATE',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))
            break;
        }
        case "LOGOUT_USER": {
            fetch('url.com/user/logOut', {
                    method: 'GET',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))

            // after fetch handle deleting the user variables and pins from store
            // then return to login screen
            break;
        }
        case "DELETE_USER": {
            fetch('url.com/user/delete', {
                    method: 'DELETE',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))
            break;

            // after fetch handle deleting the user variables and pins from store
            // then return to login screen
        }
        default:
            return state;
   }
}
