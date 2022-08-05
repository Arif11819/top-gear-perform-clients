import './App.css';

import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/Home/Home';
import ScheduleDemo from './components/Home/ScheduleDemo/ScheduleDemo';




function App() {
  return (

    <>
      {/* <Home></Home> */}
      <ScheduleDemo />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )



}
export default App;