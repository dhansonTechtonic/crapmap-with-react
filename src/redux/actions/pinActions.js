// CREATES A NEW PIN
function newPin(userObject) {
    console.log(userObject)
    return {
        type: "NEW_PIN",
        payload: userObject
    }
};

// UPDATES/EDITS PIN
function updatePin(userObject) {
    console.log(userObject)
    return {
        type: "UPDATE_PIN",
        payload: userObject
    }
};

// GET PINS BASED ON USER PREFS - LOCATION VS. RADIUS - CATEGORY
function getPins(userObject) {
    console.log(userObject)
    return {
        type: "GET_PINS",
        payload: userObject
    }
};

// DELETES PIN BY SENDING OBJECT TO ENDPOINT
function deletePin(userObject) {
    console.log(userObject)
    return {
        type: "DELETE_PIN",
        payload: userObject
    }
}
