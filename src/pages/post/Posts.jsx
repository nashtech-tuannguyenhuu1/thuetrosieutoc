import React from 'react';
import {Col, Dropdown, FormControl, Row} from 'react-bootstrap';
import HN from '../../assets//images/HN.jpg';
import '../../assets/css/RoomList.css'
import PaginationArea from '../../components/ui/page/PaginationArea';

function Posts() {
  return (
    <div style={{margin: 'auto', padding: '30px 30px 100px'}}>
      <Row>
        <Col xs={12}>
          <h3>Manage Posts</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              --All--
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Processing</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Rejected</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Approved</Dropdown.Item>
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
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-check"></i> Approved
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-times"></i> Rejected
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-spinner"></i> Processings
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-check"></i> Approved
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-check"></i> Approved
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='row-detail'>
        <Col md={3}>
          <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
        </Col>
        <Col md={9}>
          <h3>Cho thuê phòng trọ A, tại đường B, phường An Hải tây...</h3>
          <p>1.2 Triệu/Tháng</p>
          <p>Diện tích: 20 m2</p>
          <p>Hải Châu, Đà Nẵng</p>
          <p>Tiện nghi: truyền hình cáp, wifi, giường, tủ, ti vi, máy nước nóng, máy lạnh, wc trong phòng, thiết bị vệ sinh hoàn chỉnh</p>
          <Row>
            <Col md={6}>
              <i className="pi pi-clock"> 3 giờ trước</i>
            </Col>
            <Col md={6} style={{textAlign: 'right'}}>
              <i className="pi pi-check"></i> Approved
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

export default Posts;