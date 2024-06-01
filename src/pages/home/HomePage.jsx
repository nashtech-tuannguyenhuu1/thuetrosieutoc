import React from 'react';
import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import HN from '../../assets/images/HN.jpg';
import '../../assets/css/HomePage.css'
import HotArea from '../../components/ui/page/HotArea';

function HomePage() {
  return (
    <div style={{margin: 'auto', padding: '30px 30px 100px'}}>
      <Row>
        <Col xs={12}>
          <h3>RENT CHEAP ROOMS, HOUSES, APARTMENTS, COMMERCIAL SPACES</h3>
          <p>Top Affordable Rentals in Vietnam: Boarding Rooms, Houses, Apartments, and Commercial Spaces - Quickly updated, accurate, and verified rental information.</p>
        </Col>
      </Row>
      <HotArea></HotArea>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Rooms for rent</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      </Row>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Apartments for rent</h4>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      </Row>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Houses for rent</h4>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      </Row>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Lands for rent</h4>
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Body>
                <Card.Img src={HN} height={200}/>
                <Card.Title>
                  Cho thue phòng trọ A, tại đường B, phường ...
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>1.2 Triệu/Tháng</ListGroup.Item>
                <ListGroup.Item>20m2</ListGroup.Item>
                <ListGroup.Item>Hải Châu, Đà Nẵng</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      </Row>
    </div>
  );
}

export default HomePage;