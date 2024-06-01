import React from 'react';
import {Container} from 'react-bootstrap';
import AppHeader from './components/ui/header/AppHeader';
import AppFooter from './components/ui/footer/AppFooter';
import AppBreadcrumb from './components/ui/breadcrumb/AppBreadcrumb';
import NavigationBar from './components/ui/nav/NavigationBar';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Apartment from './pages/apartment/Apartment';
import RoomList from './pages/room/RoomList';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
      <Router>
        <Container><AppHeader></AppHeader></Container>
        <NavigationBar></NavigationBar>
        <Container>
          <AppBreadcrumb></AppBreadcrumb>
          <Routes> 
            <Route path = "/" Component={HomePage}/>
            <Route path = "/rooms" Component={RoomList}/>
            <Route path = "/apartments" Component={Apartment}/>
          </Routes>
        </Container>
        <AppFooter></AppFooter>
      </Router>
    </>
  );
}

export default App;
