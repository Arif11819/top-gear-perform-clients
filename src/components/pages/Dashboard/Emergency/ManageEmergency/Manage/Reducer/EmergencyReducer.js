import { GET_EMERGENCY_FAILED, GET_EMERGENCY_REQUEST, GET_EMERGENCY_SUCCESS } from "../Constant/EmergencyConstant";


const initialEmergencyState = {
    emergencies: [],
    isLoading: false,
    error: null,
};
const emergenciesReducer = (state = initialEmergencyState, action) => {
    switch (action.type) {
        case GET_EMERGENCY_REQUEST:

            return {
                ...state,
                isLoading: true
            };
        case GET_EMERGENCY_SUCCESS:

            return {

                isLoading: false,
                emergencies: action.payload,
                error: null,
            };
        case GET_EMERGENCY_FAILED:

            return {

                isLoading: false,
                emergencies: [],
                error: action.payload,

            };


        default:
            return state;
    };
};

export default emergenciesReducer;