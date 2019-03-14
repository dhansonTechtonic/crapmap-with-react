 import pinActions from "../actions/pinActions";

 const initPin = {
    pin: {
        title: String(),
        category: String(),
        description: String(),
        tags: [],
        image: String(),
        timeStamp: String(),
        status: true,
        userID: String(),
        location: {
            lat: Number(),
            lng: Number(),
            zip: Number()
        },
    }
 }
 
 export default function pinReducer(state=initPin, action){
     switch (action.type) {
        case "NEW_PIN": {
                //do shit
                break;
            }
        case "UPDATE_PIN": {
                //do shit
                break;
            }
        case "GET_PINS": {
                //do shit
                break;
            }
        case "DELETE_PIN": {
                 //do shit
                 break;
             }
        default: return state;
     }
 }