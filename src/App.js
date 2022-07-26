import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/Home/Home';
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
import Pricing from './components/Pricing/Pricing';
import Terms from './components/pages/Login/Terms';
import ChatInput from './components/Chat/ChatInput';
import NoteHome from './components/pages/Dashboard/DashHome/Notes/NoteHome';
import NewsFeed from './components/pages/Dashboard/DashHome/NewsFeed/NewsFeed';
import ContactUs from './components/ContactUs/ContactUs';
import AddEmployee from './components/Chart/AddEmployee';
import RequireAuth from './components/pages/Login/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import PostBlog from './components/Blogs/PostBlog/PostBlog';
import ManageBlogs from './components/Blogs/ManageBlogs/ManageBlogs';
import ManageUsers from './components/ManageUsers/ManageUsers';
import ManageBook from './components/Ebooks/ManageBook/ManageBook';
import AboutUs from './components/pages/AboutUs/AboutUs';
import UploadFile from './components/UploadFile/UploadFile';
import ScheduleDemoDetails from './components/Home/ScheduleDemo/ScheduleDemoDetails/ScheduleDemoDetails';
import Emergency from './components/pages/Dashboard/Emergency/Emergency';
import Course from './components/pages/Dashboard/Course/Course';
import AddCourse from './components/pages/Dashboard/Course/AddCourse';
import DaysOffHome from './components/pages/Dashboard/DayOff/DaysOffHome';
import CreateGoalHome from './components/pages/Dashboard/CreateGoal/CreateGoalHome';

import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Team from './components/Team/Team';
import ManageEmergency from './components/pages/Dashboard/Emergency/ManageEmergency/ManageEmergency';

import ChatRequest from './components/pages/Dashboard/ChatRequest/ChatRequest';
import EmployeesVacation from './components/pages/Dashboard/EmployeesVacation/EmployeesVacation';
import EmployeesGoal from './components/pages/Dashboard/EmployeesGoal/EmployeesGoal';
import ShowReview from './components/Reviews/ShowReview';
import AddReview from './components/Reviews/AddReview';





function App() {
  const { pathname } = useLocation()
  return (




    <div className='App'>
      <ToastContainer limit={1} />
      {pathname?.includes('/dashboard') ? null : <Navbar></Navbar>}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/full-case-study' element={<ShowReview />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /> </RequireAuth>}>
          <Route path='home' element={<DashHome />} />
          <Route path='focus' element={<Focus />} />
          <Route path='task' element={<MyTask />} />
          <Route path='chat' element={<ChatInput />} />
          <Route path='notification' element={<Notifications />} />
          <Route path='news-feed' element={<NewsFeed />} />
          <Route path='employee' element={<Charts />} />
          <Route path='employee/:employeeId' element={<Charts />} />
          <Route path='admin' element={<Action />} />
          <Route path='manager' element={<Action />} />
          <Route path='chatrequest' element={<ChatRequest />} />
          <Route path='employeesvacation' element={<EmployeesVacation />} />
          <Route path='employeesgoal' element={<EmployeesGoal />} />
          <Route path='notes' element={<NoteHome />} />
          <Route path='emergency' element={<Emergency />} />
          <Route path='course' element={<Course />} />
          <Route path='add-employee' element={<AddEmployee />} />
          <Route path='add-goal' element={<CreateGoalHome />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='manage-book' element={<ManageBook />} />
          <Route path='demo-details' element={<ScheduleDemoDetails />} />
          <Route path='upload-file' element={<UploadFile />} />
          <Route path='manage-blogs' element={<ManageBlogs />} />
          <Route path='vacation-select' element={<DaysOffHome/>} />
          
        <Route path='manage-users-emergency-contact' element={<ManageEmergency />} />
          <Route path='/dashboard/add-course' element={<AddCourse />} />
          <Route path='/dashboard/course' element={<Course />} />
          <Route path='/dashboard/reviews' element={<AddReview></AddReview>} />
        </Route>
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/add-blogs' element={<PostBlog />} />
        <Route path='/signUp' element={<Register />} />
        <Route path='/praise' element={<Praise />} />
        <Route path='/schedule' element={<ScheduleDemo />} />
        <Route path='/scheduleSubmit' element={<ScheduleSubmit />} />
        <Route path='/helpCenter' element={<HelpCenter />} />
        <Route path='/ebook' element={<Ebooks />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/team-members' element={<Team />} />
        <Route path='/manage-users-emergency-contact' element={<ManageEmergency />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/course' element={<Course />}  />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/reviews/:reviewsId' element={<FullReview />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </div>

  )



}
export default App;
