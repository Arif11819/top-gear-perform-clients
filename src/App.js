import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Header/Navbar';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ParticleBackground from './ParticleSetup/ParticleBackground';

import Register from './components/pages/Register/Register';
import ActiveProjectDetails from './components/ActiveProjects/ActiveProjectDetails';


AOS.init();

AOS.init();
function App() {
  const TWENTY_DAYS_IN_MS = 190 * 9 * 17 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTwentyDays = NOW_IN_MS + TWENTY_DAYS_IN_MS;
  return (

    <>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ActiveProjectDetails />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>

  );
}

export default App;
