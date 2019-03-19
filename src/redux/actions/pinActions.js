export const NEW_PIN = 'NEW_PIN';
export const UPDATE_PIN = 'UPDATE_PIN';
export const GET_PINS = 'GET_PINS';
export const DELETE_PIN = 'DELETE_PIN';
export const GET_PINS_FULFILLED = 'GET_PINS_FULFILLED';


// GET PINS - (NEEDS USER OBJECT SEARCH QUERY)

export const getPins = () => ({
    type: GET_PINS,
    async payload () {
        const data = await getPinsFetch();

        return data;
    }
})

function getPinsFetch(input){
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
        await newPinFetch(input);
    }
})

export async function newPinFetch(input) {

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


// DELETE PIN - NEEDS TESTING


export const deletePin = (input) => ({
    type: DELETE_PIN,
    async payload() {
        await deletePinFetch(input);
    }
})

function deletePinFetch(input) {
    console.log('deletePinFetchj BB+OBOBOOBOBOBOOOBB!!!!!!!!!')
    return fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/delete/' + input, {
                method: 'DELETE'
        })
            .then(res => console.log(res))
            .catch(err => console.error("Error", err))
        }


// UPDATE/EDITS PIN - NEEDS TESTING


export const updatePin = (input) => ({
    type: UPDATE_PIN,
    async payload() {
        await updatePinFetch(input);
    }
})

function updatePinFetch(input){
    fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/update', {
        method: 'UPDATE',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json'
        }
        .then(res => console.log(res))
        .catch(err => console.error(err))
    })
}