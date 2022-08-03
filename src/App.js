import './App.css';
import Header from './components/Home/Header/Header';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Register from './components/pages/SignUp/Register';

AOS.init()


function App() {
  return (

    <>
    <Header />
    </>

  );
};

export default App;