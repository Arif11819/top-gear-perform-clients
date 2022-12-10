import axios from "axios";
import { GET_EMERGENCY_FAILED, GET_EMERGENCY_REQUEST, GET_EMERGENCY_SUCCESS } from "./EmergencyConstant";


export const getAllEmergencies = () => async (dispatch) => {

    dispatch({ type: GET_EMERGENCY_REQUEST });
    try {
        const res = await axios.get("https://top-gear-perform-server.vercel.app/emgcontact");
        dispatch({ type: GET_EMERGENCY_SUCCESS, payload: res.data });

    } catch (error) {
        dispatch({ type: GET_EMERGENCY_FAILED, payload: error.message });
    }
};