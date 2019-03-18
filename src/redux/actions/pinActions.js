export const NEW_PIN = 'NEW_PIN';
export const UPDATE_PIN = 'UPDATE_PIN';
export const GET_PINS = 'GET_PINS';
export const DELETE_PIN = 'DELETE_PIN';
export const GET_PINS_FULFILLED = 'GET_PINS_FULFILLED';


//userObject needs to contain userID and authentication

// UPDATES/EDITS PIN
export function updatePin(userObject) {
    console.log(userObject)
    return {
        type: UPDATE_PIN,
        payload: userObject
    }
};

// DELETES PIN BY SENDING OBJECT TO ENDPOINT

export function deletePin(userObject) {

    console.log(userObject)
    return {
        type: DELETE_PIN,
        payload: userObject
    }
}

// GET PINS - (NEEDS USER OBJECT SEARCH QUERY)

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
            // console.log(data);
            return data;
        })
        .catch(err => console.error("Error", err))
}

// CREATES NEW PIN

export const newPin = (input) => ({
    type: NEW_PIN,
    async payload() {
        await postPin(input);
    }
})

export async function postPin(input) {

    // console.log(input);

    fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/new', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.error("Error", err))
}

