 import {NEW_PIN, UPDATE_PIN, GET_PINS, DELETE_PIN} from "../actions/pinActions";
// import store from "../store";

 const initPin = [];
 
 export default function pinReducer(state=initPin, action){
     let payload = action.payload;
     switch (action.type) {
        case NEW_PIN: {
                let pinState = state;
                fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/new', {
                    method: 'POST',
                    body: payload
                })
                .then(res => {
                    console.log('Success:', res);
                    Object.assign({}, state, {
                        pins: pinState.push(payload)
                    });
                })
                .catch(err => console.error('Error:', err))
                break;
            }
        case UPDATE_PIN: {
                fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/update', {
                    method: 'PUT',
                    body: payload
                })
                .then(res => {
                    console.log("Success:", res);
                    Object.assign({}, state, {
                        // select original and update to payload
                        // original: payload
                    });
                })
                .catch(err => console.error('Error:', err))
                break;
            }
        case GET_PINS: {
                let pinArr = [];
                fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/get', {
                    method: 'GET',
                    body: payload
                })
                .then(res => {
                    pinArr += res.json()
                    Object.assign({}, state, {
                        pinArr
                    });
                })
                .catch(err => console.error("Error", err))
                
                break;
            }
        case DELETE_PIN: {
                fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/delete', {
                    method: 'DELETE',
                    body: payload
                })
                .then(res => {
                    console.log('Success:', res);
                    //Object method to remove 
                })
                .catch(err => console.error('Error:', err))
                break;
             }
        default: return state;
     }
 }