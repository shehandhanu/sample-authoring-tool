import {
    GET_Data_REQUEST,
    GET_Data_SUCCESS,
    GET_Data_FAIL,
    CLEAR_ERRORS,
} from '../constants/sampleConstants';

export const getDataReducer = (state = {}, action) => {

    switch (action.type) {

        case GET_Data_REQUEST:
            return {
                loading: true,
                data: []
            }

        case GET_Data_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }

        case GET_Data_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: return state

    }
}