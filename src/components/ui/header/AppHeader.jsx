import React from 'react';
import thueTroSieuToc from '../../../assets//images/thuetrosieutoc.png';
import iconLogin from '../../../assets//images/icon-login.png';
import '../../../assets/css/Header.css'
import { Button, Col, Row } from 'react-bootstrap';

function AppHeader() {
  return (
    <header className='app-header'>
       <Row>
        <Col xs={6}><img src={thueTroSieuToc} alt='thuetrosieutoc' height={50} width={100}></img></Col>
        <Col xs={4} className="user-area">
          <Button>Đăng tin miễn phí</Button>
        </Col>
        <Col xs={2} className="user-area">
          <img className='user-img' src={iconLogin} alt='user login' height={30} width={30}>
          </img><p className='user-name'>Nguyễn Hữu Tuấn</p>
        </Col>
       </Row>
    </header>
  );
}

export default AppHeader;