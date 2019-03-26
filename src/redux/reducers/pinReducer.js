 import {NEW_PIN, UPDATE_PIN, DELETE_PIN, GET_PINS_FULFILLED, CLEAR_PINS, GET_BY_CATEGORY_FULFILLED} from "../actions/pinActions";

 const initPin = [];
 
 export default async function pinReducer(state=initPin, action){
    // console.log(action) 
    let payload = action.payload;
     switch (action.type) {
        case NEW_PIN: {
                break;
            }
        case UPDATE_PIN: {
                break;
            }
        case GET_BY_CATEGORY_FULFILLED: {
                return {
                    pins: payload
                };
        }
        case GET_PINS_FULFILLED: {
                return {
                    pins: payload
                }
            }
        case DELETE_PIN: {
                break;
             }
        case CLEAR_PINS: {
                return {
                    pins: []
                }
        }
        default: return state;
     }
 }