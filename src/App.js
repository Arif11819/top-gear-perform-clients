import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
