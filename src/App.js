

import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';





function App() {
  return (

    <>
      <Home></Home>
      <Routes>
        <Route path='/login' element={<Login />} />

      </Routes>
      
    </>
  )



}
export default App;