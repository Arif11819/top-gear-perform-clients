import { applyMiddleware, createStore } from "redux";
import emergenciesReducer from "./components/pages/Dashboard/Emergency/ManageEmergency/Manage/Reducer/EmergencyReducer";
import thunk from "redux-thunk"


const stores = createStore(emergenciesReducer, applyMiddleware(thunk));


export default stores;