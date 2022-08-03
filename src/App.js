import './App.css';
import Header from './components/Home/Header/Header';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Register from './components/pages/SignUp/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Navbar from './components/Home/Header/Navbar';

AOS.init()


function App() {
  return (

    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Header />} />
    <Route path='/login' element={<Login />} />
   </Routes>
    </>

  );
};

export default App;