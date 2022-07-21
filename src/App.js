import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Features from './components/Feature/Features/Features';
import Footer from './components/Footer/Footer';
AOS.init();

function App() {
  return (
    <div >
      <Header></Header>
      <Dashboard></Dashboard>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default App;
