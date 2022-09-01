import axios from "axios";
import { GET_EMERGENCY_FAILED, GET_EMERGENCY_REQUEST, GET_EMERGENCY_SUCCESS } from "./EmergencyConstant";


export const getAllEmergencies = () => async (dispatch) => {

    dispatch({ type: GET_EMERGENCY_REQUEST });
    try {
        const res = await axios.get("https://dry-ravine-83506.herokuapp.com/emgcontact");
        dispatch({ type: GET_EMERGENCY_SUCCESS, payload: res.data });

    } catch (error) {
        dispatch({ type: GET_EMERGENCY_FAILED, payload: error.message });
    }
};