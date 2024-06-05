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

function App() {
  const [showAdminBoard, setshowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
    console.log('11');
  }, []);

  const handleSettingCurrentUser = (any) => {
    setCurrentUser(any)
  }

  useEffect(() => {

    setshowAdminBoard(currentUser && currentUser[0]?.role === 'Admin');
    console.log(currentUser + 'admin:' + showAdminBoard );
    console.log('33');

  }, [currentUser, showAdminBoard]);

  return (
    <>
      <Router>
        <Container><AppHeader showAdminBoard={showAdminBoard} currentUser={currentUser} handleSettingCurrentUser={handleSettingCurrentUser}></AppHeader></Container>
        <NavigationBar></NavigationBar>
        <Container>
          <SearchBar></SearchBar>
          <AppBreadcrumb></AppBreadcrumb>
          <div id='main' style={{minHeight: '600px', backgroundColor: 'rgb(247 247 247)', border: '1px solid #dedede', borderBottom: 'none'}}>
            <Routes> 
              <Route path = "/" Component={HomePage}/>
              <Route path = "/sign-in" element={<LoginPage handleSettingCurrentUser={handleSettingCurrentUser} />} />
              <Route path = "/sign-up" Component={SignUpPage}/>
              <Route path = "/new-post" Component={AddPost}/>
              <Route path = "/rooms" Component={RoomList}/>
              <Route path = "/apartments" Component={Apartment}/>
              <Route path = "/houses" Component={House}/>
              <Route path = "/lands" Component={Land}/>
              <Route path = "/roomates" Component={Roommate}/>
              <Route path = "/posts" Component={Posts}/>
              <Route path = "/accounts" Component={Accounts}/>
             </Routes>
          </div>
        </Container>
        <AppFooter></AppFooter>
      </Router>
    </>
  );
}

export default App;
