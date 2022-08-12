
import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
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
import MyTask from './components/MyTask/MyTask';
import Notifications from './components/pages/Dashboard/Notifications/Notifications';
import Action from './components/pages/Dashboard/Actions/Action';
import ScheduleSubmit from './components/Home/ScheduleDemo/ScheduleSubmit';
import ChatInput from './components/Chat/ChatInput';



function App() {
  const { pathname } = useLocation()
  return (




    <>
      {pathname?.includes('/dashboard') ? null : <Navbar></Navbar>}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='home' element={<DashHome />} />
          <Route path='focus' element={<Focus />} />
          <Route path='task' element={<MyTask />} />
          <Route path='chat' element={<ChatInput />} />
          <Route path='notification' element={<Notifications />} />
          <Route path='action' element={<Action />} />
        </Route>

        <Route path='/signUp' element={<Register />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/praise' element={<Praise />} />
        <Route path='/schedule' element={<ScheduleDemo />} />
        <Route path='/scheduleSubmit' element={<ScheduleSubmit />} />
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