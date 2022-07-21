import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Features from './components/Feature/Features/Features';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Employees from './components/Employees/Employees';
AOS.init();

function App() {
  return (
    <div className='card-container'>
      <Header></Header>
      <Features></Features>
      <Employees />
      <Dashboard></Dashboard>
      <Logo />
      <Footer></Footer>
    </div>
  );
}

export default App;
