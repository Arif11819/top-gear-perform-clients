import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import chatRequestData from './components/context/reducers/chatRequestReducer'

const chatStore = createStore(chatRequestData, applyMiddleware(thunk));
export default chatStore;
