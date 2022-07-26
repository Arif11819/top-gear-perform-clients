import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Header/Navbar';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ParticleBackground from './ParticleSetup/ParticleBackground';

AOS.init();

function App() {
  return (

    <>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />

      </Routes>

    </>

  );
}

export default App;
