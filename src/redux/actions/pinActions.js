import store from '../store'

export const NEW_PIN = 'NEW_PIN';
export const UPDATE_PIN = 'UPDATE_PIN';
export const GET_PINS = 'GET_PINS';
export const DELETE_PIN = 'DELETE_PIN';
export const GET_PINS_FULFILLED = 'GET_PINS_FULFILLED';


//userObject needs to contain userID and authentication

// CREATES A NEW PIN
export function newPin(userObject) {
    console.log(userObject)
    return {
        type: NEW_PIN,
        payload: userObject
    }
};

// UPDATES/EDITS PIN
export function updatePin(userObject) {
    console.log(userObject)
    return {
        type: UPDATE_PIN,
        payload: userObject
    }
};

// GET PINS BASED ON USER PREFS - LOCATION VS. RADIUS - CATEGORY
// export function getPins(userObject) {
//     // console.log(userObject)
//     return {
//         type: GET_PINS,
//         payload: userObject
//     }
// };


// DELETES PIN BY SENDING OBJECT TO ENDPOINT
export function deletePin(userObject) {

    console.log(userObject)
    return {
        type: DELETE_PIN,
        payload: userObject
    }
}

export const getPins = () => ({
    type: GET_PINS,
    async payload () {
        const data = await fetchPins();

        return data;
    }
})


function fetchPins(input){
    return fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/get', {
            method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.error("Error", err))
}

