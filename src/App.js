import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import AppHeader from './components/ui/header/AppHeader';
import AppFooter from './components/ui/footer/AppFooter';
import AppBreadcrumb from './components/ui/breadcrumb/AppBreadcrumb';
import NavigationBar from './components/ui/nav/NavigationBar';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Apartment from './pages/apartment/Apartment';
import RoomList from './pages/room/RoomList';
import HomePage from './pages/home/HomePage';
import House from './pages/house/House';
import Land from './pages/land/Land';
import Roommate from './pages/roommate/Roommate';
import Posts from './pages/post/Posts';
import Accounts from './pages/account/Accounts';
import AddPost from './pages/post/AddPost';
import LoginPage from './pages/login/LoginPage';
import 'primeicons/primeicons.css';
import './assets/css/Common.css'
import SignUpPage from './pages/sign-up/SignUpPage';
import SearchBar from './components/ui/search-bar/SearchBar';
import AuthService from "./services/auth/auth.service"
import { Toaster } from 'react-hot-toast';

function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserReady, setCurrentUserReady] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log('455')
    const fetchCurrentUser = async () => {
      const user = await AuthService.getCurrentUser();
      setCurrentUser(user);
      setCurrentUserReady(true);
    };

    fetchCurrentUser();
    console.log('555')
  }, []);

  useEffect(() => {

    setShowAdminBoard(currentUser && currentUser[0]?.role === 'Admin');
    console.log(currentUser + 'admin:' + showAdminBoard );
    console.log('33');

  }, [currentUser, showAdminBoard]);

  const handlerSearch = () => {
    setTrigger(!trigger)
  }

  return (
    <>
      <Router>
        <Container><AppHeader showAdminBoard={showAdminBoard}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          currentUserReady={currentUserReady}/>
        </Container>
        <NavigationBar></NavigationBar>
        <Container>
          <SearchBar onSearch={handlerSearch}></SearchBar>
          <AppBreadcrumb></AppBreadcrumb>
          <div id='main'>
            <Routes> 
              <Route path = "/" Component={HomePage}/>
              <Route path = "/sign-in" element={<LoginPage setCurrentUser={setCurrentUser} />} />
              <Route path = "/sign-up" Component={SignUpPage}/>
              <Route path = "/new-post" Component={AddPost}/>
              <Route path = "/rooms" element={<RoomList trigger={trigger} />} />
              <Route path = "/apartments" Component={Apartment}/>
              <Route path = "/houses" Component={House}/>
              <Route path = "/lands" Component={Land}/>
              <Route path = "/roomates" Component={Roommate}/>
              <Route path = "/posts" Component={Posts}/>
              <Route path = "/accounts" Component={Accounts}/>
             </Routes>
             <Toaster />
          </div>
        </Container>
        <AppFooter></AppFooter>
      </Router>
    </>
  );
}

export default App;
