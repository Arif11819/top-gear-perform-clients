import { applyMiddleware, createStore } from "redux";
import emergenciesReducer from "./components/pages/Dashboard/Emergency/ManageEmergency/Manage/Reducer/EmergencyReducer";
import thunk from "redux-thunk"


const store = createStore(emergenciesReducer, applyMiddleware(thunk));


export default store;