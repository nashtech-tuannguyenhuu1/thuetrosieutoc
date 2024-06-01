import {React, useEffect, useState} from 'react';
import thueTroSieuToc from '../../../assets//images/thuetrosieutoc.png';
import iconLogin from '../../../assets//images/icon-login.png';
import '../../../assets/css/Header.css'
import {Button, Col, Row} from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';

function AppHeader() {

  const location = useLocation();
  const [showLogonIcon, setShowLogonIcon] = useState(true);

  useEffect(() => {
    if(location.pathname === '/sign-in' || location.pathname === '/sign-up') {
      setShowLogonIcon(false)
    } else {
      setShowLogonIcon(true)
    }
  }, [location.pathname]);

  return (
    <header className='app-header'>
       <Row>
        <Col xs={12} md={6}><img src={thueTroSieuToc} alt='thuetrosieutoc' height={50} width={100} className='img-border-radius-5'></img></Col>
        <Col xs={12} md={6} className="user-area">
          <Link to="/sign-in"><Button className='btn btn-info mr-5' ><i class="pi pi-sign-in"></i> Sign-in</Button></Link>
          <Link to="/sign-up"><Button className='btn btn-info mr-5'><i class="pi pi-user-plus"></i> Sign-up</Button></Link>
          <Link to="/new-post"><Button className='btn btn-primary mr-5'><i class="pi pi-pencil"></i> Post for free</Button></Link>
          {showLogonIcon
            && <p className='user-name'><img className='user-img' src={iconLogin} alt='user login' height={30} width={30}></img> Nguyễn Hữu Tuấn</p>}
        </Col>
       </Row>
    </header>
  );
}

export default AppHeader;