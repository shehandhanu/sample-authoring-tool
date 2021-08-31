import {
    GET_Data_REQUEST,
    GET_Data_SUCCESS,
    GET_Data_FAIL,
    CLEAR_ERRORS,
} from '../constants/sampleConstants';

export const getData = () => async (dispatch) => {
    try {

        dispatch({
            type: GET_Data_REQUEST,
            payload: []
        })
        //Get Today Date
        const date = Date(Date.now());
        const today = date.toString()

        const data = {
            Date: today,
        }
        //Return that date
        dispatch({
            type: GET_Data_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: GET_Data_FAIL,
            payload: "error"
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}