import React from 'react';
import {Col, Dropdown, FormControl, Row} from 'react-bootstrap';
import HN from '../../assets//images/HN.jpg';
import '../../assets/css/RoomList.css'
import PaginationArea from '../../components/ui/page/PaginationArea';

function Accounts() {
  return (
    <div style={{margin: 'auto', padding: '30px 30px 100px'}}>
      <Row>
        <Col xs={12}>
          <h3>Manage Accounts</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              --All--
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormControl
              type="text"
              style={{marginTop: '10px', borderColor: 'gray'}}
          />
        </Col>
      </Row>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Found 1000 Posts</h4>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Nguyễn Hữu Tuấn</h3>
          <p>Số điện thoại: 0986040618</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun pi-sun-inactive"></i> Inactive
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Nguyễn Văn B</h3>
          <p>Số điện thoại: 0986040613</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun"></i> Active
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Lỗ Trí Thâm</h3>
          <p>Số điện thoại: 0986040618</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun"></i> Active
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Nguyễn Hữu Tuấn</h3>
          <p>Số điện thoại: 0986040618</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun"></i> Active
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Nguyễn Hữu Tuấn</h3>
          <p>Số điện thoại: 0986040618</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun"></i> Active
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Nguyễn Hữu Tuấn</h3>
          <p>Số điện thoại: 0986040618</p>
          <p>Email: gamatgiunsan@gmail.com</p>
          <p>Địa chỉ: 17 Nguyễn Công Trứ, Đà Nẵng</p>
          <p>Số bài đăng: 12</p>
          <Row>
            <Col md={12} style={{textAlign: 'right'}}>
              <i class="pi pi-sun"></i> Active
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <PaginationArea></PaginationArea>
        </Col>
      </Row>
    </div>
  );
}

export default Accounts;