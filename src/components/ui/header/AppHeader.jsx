import {React, useEffect, useRef, useState} from 'react';
import thueTroSieuToc from '../../../assets//images/thuetrosieutoc.png';
import iconLogin from '../../../assets//images/icon-login.png';
import '../../../assets/css/Header.css'
import {Button, Col, Row} from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';
import AuthService from "../../../services/auth/auth.service"
import { useNavigate } from 'react-router-dom';

function AppHeader(props) {

  const navigate = useNavigate();
  const location = useLocation();
  const [showLogonIcon, setShowLogonIcon] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log('aa' + props.showAdminBoard)
    if(location.pathname === '/sign-in' || location.pathname === '/sign-up') {
      setShowLogonIcon(false)
    } else {
      setShowLogonIcon(props.showAdminBoard)
    }
  }, [location.pathname, props.showAdminBoard]);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    AuthService.logout()
    props.handleSettingCurrentUser(null)
    setShowDropdown(!showDropdown);
    navigate('/sign-in');
  };

  return (
    <header className='app-header'>
       <Row>
        <Col xs={5} md={6}><img src={thueTroSieuToc} alt='thuetrosieutoc' height={50} width={100} className='img-border-radius-5'></img></Col>
        <Col xs={7} md={6} className="user-area">
          {!showLogonIcon 
              && (<><Link to="/sign-in"><Button className='btn btn-info mr-5' ><i class="pi pi-sign-in"></i> Sign-in</Button></Link>
                  <Link to="/sign-up"><Button className='btn btn-info mr-5'><i class="pi pi-user-plus"></i> Sign-up</Button></Link>
                  </>)
            }
          <Link to="/new-post"><Button className='btn btn-primary mr-5'><i class="pi pi-pencil"></i> Post</Button></Link>
          {showLogonIcon
            && <p className='user-name'>
               <div style={{display: 'inline', position:'relative'}} ref={dropdownRef}>
                  <img onClick={handleDropdownToggle}  lassName='user-img' src={iconLogin} alt='user login' height={30} width={30} style={{cursor: 'pointer'}}></img>
                  {showDropdown && <div className='user-dropdown'>
                    <div>Detail</div>
                    <div onClick={handleLogout}>Logout</div>
                  </div>}
                </div> {props.currentUser && props.currentUser[0]?.name}
               </p>}
        </Col>
       </Row>
    </header>
  );
}

export default AppHeader;