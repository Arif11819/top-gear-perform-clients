
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Home/Footer/Footer';
import Execute from './components/Execute/Execute';
import Navbar from './components/Home/Header/Navbar';
import FullReview from './components/FullReview/FullReview';
import NotFound from './components/NotFound/NotFound';
import ScheduleDemo from './components/Home/ScheduleDemo/ScheduleDemo';
import HelpCenter from './components/HelpCenter/HelpCenter';
import Faq from './components/Faq/Faq';
import Ebooks from './components/Ebooks/Ebooks';
import Register from './components/pages/SignUp/Register';
import Praise from './components/Praise/Praise';
import Dashboard from './components/pages/Dashboard/Dashboard';
import DashHome from './components/pages/Dashboard/DashHome/DashHome';
import Focus from './components/pages/Dashboard/Focus/Focus';
import Task from './components/pages/Dashboard/Task/Task';
import Chat from './components/pages/Dashboard/Chat/Chat';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {
  const { pathname } = useLocation()
  return (

    <>
      <ToastContainer limit={1} />
      {pathname?.includes('/dashboard') ? null : <Navbar></Navbar>}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='home' element={<DashHome />} />
          <Route path='focus' element={<Focus />} />
          <Route path='task' element={<Task />} />
          <Route path='chat' element={<Chat />} />
        </Route>

        <Route path='/signUp' element={<Register />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/praise' element={<Praise />} />
        <Route path='/schedule' element={<ScheduleDemo />} />
        <Route path='/helpCenter' element={<HelpCenter />} />
        <Route path='/ebook' element={<Ebooks />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/reviews/:reviewsId' element={<FullReview />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {pathname?.includes('/dashboard') ? null : <Execute></Execute>}
      {pathname?.includes('/dashboard') ? null : <Footer></Footer>}
    </>
  )



}
export default App;