import React from 'react';
import {Col, Dropdown, FormControl, Row} from 'react-bootstrap';
import '../../assets/css/RoomList.css'
import { Label } from 'reactstrap';

function AddPost() {
  return (
    <div style={{margin: 'auto', padding: '30px 30px 100px'}}>
      <Row>
        <Col xs={12}>
          <h3>New Post</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Label>City:</Label><br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              Đà Nẵng
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hà Nội</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hồ Chí Minh</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Quảng Bình</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={4}>
          <Label>District:</Label><br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              --District--
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hải Châu</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Liên Chiểu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={4}>
          <Label>Commune:</Label><br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              --Commune--
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">An Hải Tây</Dropdown.Item>
              <Dropdown.Item href="#/action-2">An Hải Bắc</Dropdown.Item>
              <Dropdown.Item href="#/action-3">An Hải Đông</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Detail Address:</Label>
          <FormControl type="text" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Business type:</Label><br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-status">
              --Choose Business type--
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Rent room</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Buy Land</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rent land</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Title:</Label>
          <FormControl type="text" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Describing:</Label>
          <FormControl as="textarea" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>FullName:</Label>
          <FormControl as="textarea" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Phone:</Label>
          <FormControl as="textarea" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Price(VND/Month):</Label>
          <FormControl as="textarea" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Area(m2):</Label>
          <FormControl as="textarea" style={{borderColor: 'gray'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Label>Images:</Label>
          <FormControl type="file" size="lg" multiple style={{borderColor: 'gray'}} />
        </Col>
      </Row>
    </div>
  );
}

export default AddPost;