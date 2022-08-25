
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
import MyTask from './components/MyTask/MyTask';
import Notifications from './components/pages/Dashboard/Notifications/Notifications';
import Action from './components/pages/Dashboard/Actions/Action';
import ScheduleSubmit from './components/Home/ScheduleDemo/ScheduleSubmit';
import Charts from './components/Chart/Charts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Pricing from './components/Pricing/Pricing';
import Team from './components/Home/Team/Team';
import Terms from './components/pages/Login/Terms';
import ChatInput from './components/Chat/ChatInput';
import NoteHome from './components/pages/Dashboard/DashHome/Notes/NoteHome';
import NewsFeed from './components/pages/Dashboard/DashHome/NewsFeed/NewsFeed';
import ContactUs from './components/ContactUs/ContactUs';
import AddEmployee from './components/Chart/AddEmployee';
import RequireAuth from './components/pages/Login/RequireAuth';



function App() {
  const { pathname } = useLocation()
  return (




    <>
      <ToastContainer limit={1} />
      {pathname?.includes('/dashboard') ? null : <Navbar></Navbar>}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/addemployee' element={<AddEmployee />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='home' element={<DashHome />} />
          <Route path='focus' element={<Focus />} />
          <Route path='task' element={<MyTask />} />
          <Route path='chat' element={<ChatInput />} />
          <Route path='notification' element={<Notifications />} />
          <Route path='newsfeed' element={<NewsFeed />} />
          <Route path='action' element={<Action />} />
          <Route path='notes' element={<NoteHome />} />
        </Route>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/signUp' element={<Register />} />
        <Route path='/reviews' element={
          <RequireAuth>
            <Reviews></Reviews>
          </RequireAuth>
        } />
        <Route path='/employee' element={<Charts />} />
        <Route path='/employee/:employeeId' element={<Charts />} />
        <Route path='/praise' element={<Praise />} />
        <Route path='/schedule' element={<ScheduleDemo />} />
        <Route path='/scheduleSubmit' element={<ScheduleSubmit />} />
        <Route path='/helpCenter' element={<HelpCenter />} />
        <Route path='/ebook' element={<Ebooks />} />
        <Route path='/team' element={<Team />} />
        <Route path='/terms' element={<Terms />} />
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