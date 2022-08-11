import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (

    <>
      <Home></Home>
      <NotFound></NotFound>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )



}
export default App;