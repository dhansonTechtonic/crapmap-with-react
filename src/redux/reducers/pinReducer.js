 import pinActions from "../actions/pinActions";

 const initPin = [];
 
 export default function pinReducer(state=initPin, action){
     let payload = action.payload;
     switch (action.type) {
        case "NEW_PIN": {
                fetch('url.com/postEndpoint', {
                    method: 'POST',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))
                break;
            }
        case "UPDATE_PIN": {
                fetch('url.com/updateFetch', {
                    method: 'UPDATE',
                    body: payload
                })
                .then(res => console.log('Success:', res))
                .catch(err => console.error('Error:', err))
                break;
            }
        case "GET_PINS": {
                fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/myPins', {
                    method: 'POST'
                })
                .then(res => res.json())
                .catch(err => console.error("Error", err))
                break;
            }
        case "DELETE_PIN": {
                 fetch('url.com/deletemode', {
                     method: 'DELETE',
                     body: payload
                 })
                 .then(res => console.log('Success:', res))
                 .catch(err => console.error('Error:', err))
                 break;
             }
        default: return state;
     }
 }