import './App.css';

import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Navbar from './components/Home/Header/Navbar';
import Register from './components/pages/SignUp/Register'
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/signUp' element = {<Register />} />
      </Routes>
    </>
  )



}
export default App;