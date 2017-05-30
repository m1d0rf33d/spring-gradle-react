export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const activateUser = (payload) => {
    return {
        type: 'ACTIVATE_USER',
        payload: payload
    }
};

