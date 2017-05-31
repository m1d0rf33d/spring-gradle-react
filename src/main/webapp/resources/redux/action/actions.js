export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const activateUser = (payload) => {
    window.localStorage.setItem('auth', 'true');
    return {
        type: 'ACTIVATE_USER',
        payload: payload
    }
};

