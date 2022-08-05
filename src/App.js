import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Home/Footer/Footer';
import Execute from './components/Execute/Execute';
import Navbar from './components/Home/Header/Navbar';
import FullReview from './components/FullReview/FullReview';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (

    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/reviews/:reviewsId' element={<FullReview />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Execute></Execute>
      <Footer></Footer>
    </>
  )



}
export default App;