import axios from 'axios'
import { CHAT_DATA_FAILED, CHAT_DATA_REQUEST, CHAT_DATA_SUCCESS } from '../constants/chatRequestConst';


export const getChatRequest = () => async (dispatch) => {
    dispatch({ type: CHAT_DATA_REQUEST })
    try {
        const res = await axios.get("https://top-gear-perform-server.up.railway.app/chatuser");
        dispatch({ type: CHAT_DATA_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: CHAT_DATA_FAILED, payload: error.message })
    }
}