import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import thueTroSieuToc from '../../../assets//images/thuetrosieutoc.png';
import iconLogin from '../../../assets//images/icon-login.png';
import '../../../assets/css/Header.css'
import {Button, Col, Row} from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';
import AuthService from "../../../services/auth/auth.service"
import { useNavigate } from 'react-router-dom';

const AppHeader = React.memo(function AppHeader(props) {

  const navigate = useNavigate();
  const location = useLocation();
  const [showHeaderInfo, setshowHeaderInfo] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [currentUserReady, setCurrentUserReady] = useState(false);

  useEffect(() => {

    if (props.currentUserReady) {
      setCurrentUserReady(true)
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [props.currentUserReady]);

  useEffect(() => {
    setshowHeaderInfo(props.currentUser !== null)
  }, [location.pathname, props.currentUser]);

  const handleDropdownToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleLogout = useCallback(() => {
    AuthService.logout()
    props.setCurrentUser(null)
    setShowDropdown(!showDropdown);
    navigate('/sign-in');
  }, [showDropdown, props, navigate]);

  const memoizedAppHeader = useMemo(() => {
    console.log('444')
    if (!currentUserReady) {
      return null;
    }
    console.log('644')
    return (
      <Col xs={8} md={6} className="user-area">
          {!showHeaderInfo 
              && (<><Link to="/sign-in"><Button className='btn btn-info mr-5' ><i className="pi pi-sign-in"></i> Sign-in</Button></Link>
                  <Link to="/sign-up"><Button className='btn btn-info mr-5'><i className="pi pi-user-plus"></i> Sign-up</Button></Link>
                  </>)
          }
          {showHeaderInfo
            && (<><Link to="/new-post"><Button className='btn btn-primary mr-5'><i className="pi pi-pencil"></i> Post</Button></Link>
               <div className='user-name'>
               <div style={{display: 'inline', position:'relative'}} ref={dropdownRef}>
                  <img onClick={handleDropdownToggle}  className='user-img' src={iconLogin} alt='user login' height={30} width={30} style={{cursor: 'pointer'}}></img>
                  {showDropdown && <div className='user-dropdown'>
                    <div>Detail</div>
                    <div onClick={handleLogout}>Logout</div>
                  </div>}
                </div> {props.currentUser && props.currentUser[0]?.name}
               </div></>)
          }
        </Col>
    );
  }, [handleDropdownToggle, handleLogout, showHeaderInfo, props.currentUser, showDropdown, currentUserReady]);

  return (
    <header className='app-header'>
       <Row>
        <Col xs={4} md={6}><img src={thueTroSieuToc} alt='thuetrosieutoc' height={50} width={100} className='img-border-radius-5'></img></Col>
        {memoizedAppHeader}
       </Row>
    </header>
  );
});

export default AppHeader;