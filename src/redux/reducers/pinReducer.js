 import {NEW_PIN, UPDATE_PIN, DELETE_PIN, GET_PINS_FULFILLED} from "../actions/pinActions";

 const initPin = [];
 
 export default async function pinReducer(state=initPin, action){
    // console.log(action) 
    let payload = action.payload;
     switch (action.type) {
        case NEW_PIN: {
                // let pinState = state;
                console.log('new pin reducer')
                break;
            }
        case UPDATE_PIN: {
                console.log('update pin reducer ')
                break;
            }
        case GET_PINS_FULFILLED: {
                console.log(payload);
                // this.setState({pins: payload});
                return {
                    pins: payload
                }
            }
        case DELETE_PIN: {
                console.log('inside delete reducer')
                break;
             }
        default: return state;
     }
 }