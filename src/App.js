import './App.css';

import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Navbar from './components/Home/Header/Navbar';
import BusinessPlatform from './components/Home/BusinessPlatform.js/BusinessPlatform';




function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
      
    </>
  )



}
export default App;