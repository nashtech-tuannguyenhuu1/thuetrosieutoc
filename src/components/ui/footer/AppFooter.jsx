import React from 'react';
import '../../../assets/css/Footer.css'
import {Col, Row} from 'react-bootstrap';
import thietkeimage from '../../../assets//images/thiet-ke-phong-tro-khep-kin-nho.jpg';

function AppFooter() {
  return (
    <footer>
       <Row className='footer'>
        <Col xs={8}>
          <h3 title="About us">About us</h3>
          <p>A website for renting or buying rooms, boarding houses, apartments, and real estate quickly and efficiently.</p>
          <i class="pi pi-phone"> 0986040618</i><br></br>
          <i class="pi pi-map-marker"> 19 Nguyen Cong Trum An Hai Tay, Son Tra, Da Nang</i><br></br>
          <i class="pi pi-envelope"> gamatgiunsan@gmail.com</i>
        </Col>
        <Col xs={4}>
          <img src={thietkeimage} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
       </Row>
       <Row>
        <Col xs={12}>
          <hr></hr>
          <p style={{textAlign: 'center'}}>Copyright@2024 thuetrosieutoc.com</p>
        </Col>
       </Row>
    </footer>
  );
}

export default AppFooter;