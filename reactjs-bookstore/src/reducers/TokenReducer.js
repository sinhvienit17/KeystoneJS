const initial = {
    value: "",
    users: [],
    signUp: false,
}

const TokenReducer = (state = initial, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                value: action.token,
                users: action.users
            }
        case "AUTHORIZATION":
            return {
                ...state,
                value: action.token,
                users: action.users
            }
        case "ADD_USER_SUCCESS":
            return {
                ...state, signUp: true
            }
        case "SIGN_OUT":
            return initial;
        default:
            return state;
    }
}

export { TokenReducer };