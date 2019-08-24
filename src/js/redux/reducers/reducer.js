import * as Actions from "./../actions/actions";

const updateUser = ({ user }, { type, payload }) => {
    switch (type) {
        case Actions.USER_LOGINING:
            return {
                isLoggedIn: true,
                name: payload
            } 
        default:
            return user
    }
};

const reducer = (state, action) => {
    return {
        user: updateUser(state, action)
    };
};

export default reducer;
