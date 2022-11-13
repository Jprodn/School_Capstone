import * as ActionTypes from './actionTypes';

export const Token = (state = {
        token: undefined
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TOKEN:
            return {token: action.payload }

        default:
            return state;
    }
}