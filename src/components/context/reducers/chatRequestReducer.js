import { CHAT_DATA_FAILED, CHAT_DATA_REQUEST, CHAT_DATA_SUCCESS } from "../constants/chatRequestConst";

const initialState = {
    isLoading: false,
    chatRequest: [],
    error: null
}
const chatRequestData = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_DATA_REQUEST:

            return {
                ...state,
                isLoading: true
            }
        case CHAT_DATA_SUCCESS:

            return {
                isLoading: false,
                chatRequest: action.payload,
                error: null
            }
        case CHAT_DATA_FAILED:

            return {
                isLoading: false,
                chatRequest: [],
                error: action.payload
            }

        default:
            return state;
    }
}
export default chatRequestData;