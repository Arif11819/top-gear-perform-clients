import './App.css';
import Header from './components/Header/Header';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
