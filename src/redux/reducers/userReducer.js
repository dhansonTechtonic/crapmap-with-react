
import {REGISTER_USER, LOGOUT_USER, LOGIN_USER} from "../actions/userActions"

import {auth} from '../../firebase'

const initUser = {
    userID: '',
    posts: [],
    auth: false,
};

export default function userReducer(state = initUser, action) {
    let payload = action.payload;

    switch (action.type) {
        case LOGIN_USER: {
            return {
                userID: payload.userID,
                auth: payload.auth
            }
             
        }

        case REGISTER_USER: {

            console.log(payload);
            return {
                userID: payload.userID,
                auth: payload.auth
            }
        }
        case LOGOUT_USER: {
            localStorage.removeItem('userID');

            auth.signOut()
                return {
                    ...initUser
                }
                
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