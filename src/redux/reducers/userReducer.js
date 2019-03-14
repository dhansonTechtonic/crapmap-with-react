// import userActions from '../actions / userActions ';

const initUser = {
    // STATE STRUCTURE
    user: {
        // Acc Info
        userID: '',
        username: '',
        email: '',
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

export default function userReducer(state = initUser, action) {
    let payload = action.payload;

    switch (action.type) {
        case "LOGIN_USER":
            {
                fetch('url.com/user/login', {
                        method: 'POST',
                        body: payload
                })
                .then(res => {
                    console.log(res);
                    Object.assign({}, state, {
                        user: payload
                    })
                })
                .catch(err => console.error('Error:', err))
                break;
            }
        case "NEW_USER":
            {
                fetch('url.com/user/new', {
                    method: 'POST',
                    body: payload
                })
                .then(res => {
                    console.log(res)
                    Object.assign({}, state, {
                        user: payload
                    })
                })
                .catch(err => console.error('You done goofed', err))
                break;
            }
        case "GET_USER":
            {
                fetch('url.com/user/get', {
                    method: 'GET',
                    body: payload
                })
                .then(res => {
                    console.log('Success:', res);
                    Object.assign({}, state, {
                        user: payload
                    })
                 })
                .catch(err => console.error('Error:', err))
                break;
            }
        case "UPDATE_USER":
            {
                fetch('url.com/user/update', {
                    method: 'PUT',
                    body: payload
                })
                .then(res => {
                    console.log('Success:', res);
                    Object.assign({}, state, {
                        user: payload
                    })
                })
                .catch(err => console.error('Error:', err))
                break;
            }
        case "LOGOUT_USER":
            {
                fetch('url.com/user/logOut', {
                    method: 'GET',
                    body: payload
                })
                .then(res => {
                    console.log('Success:', res);
                    Object.assign({}, state, {
                        ...initUser
                    })
                })
                .catch(err => console.error('Error:', err))

                // after fetch handle deleting the user variables and pins from store
                // then return to login screen
                break;
            }
        case "DELETE_USER":
            {
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