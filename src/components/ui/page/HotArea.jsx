import {Card, Col, Row} from 'react-bootstrap';
import HCM from '../../../assets/images/hcm.jpg';
import HN from '../../../assets/images/HN.jpg';
import DN from '../../../assets/images/DN.jpg';

function HotArea() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h4>Hot Areas</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Img src={HN} height={250}/>
              <Card.Title>
                Hà Nội
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Img src={HCM} height={250}/>
              <Card.Title>
                Hồ Chí Minh
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Img src={DN} height={250}/>
              <Card.Title>
                Đà Nẵng
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default HotArea;