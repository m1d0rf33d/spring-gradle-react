export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const updateLoginState = (payload) => {

    window.localStorage.setItem('auth', payload);


    return {
        type: 'UPDATE_LOGIN_STATE',
        payload: payload
    }
};


