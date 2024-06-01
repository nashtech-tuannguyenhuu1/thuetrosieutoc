import {React, useEffect, useState} from 'react';
import {Button, Col, Dropdown, FormControl, InputGroup, Row} from 'react-bootstrap';
import '../../../assets/css/SearchBar.css'
import { useLocation } from 'react-router-dom';

function SearchBar() {

  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(true);

  useEffect(() => {
    if(location.pathname === '/sign-in' || location.pathname === '/sign-up'
     || location.pathname === '/posts' || location.pathname === '/accounts' || location.pathname === '/new-post') {
      setShowSearchBar(false)
    } else {
      setShowSearchBar(true)
    }
  }, [location.pathname]);

  return (
    showSearchBar && (<div style={{marginTop: '15px', border: '1px solid rgb(222, 222, 222)', padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(247 247 247)'}}>
      <Row>
        <Col xs={12} md={8}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rented-room">
              Rooms
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Lands</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Apartments</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Houses</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rented-room">
              Đà Nẵng
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hà Nội</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hồ Chí Minh</Dropdown.Item>
              <Dropdown.Item href="#/action-3">An Giang</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rented-room">
              For Rent
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Buy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rented-room">
              0 - 2 Million
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2 - 4 Million</Dropdown.Item>
              <Dropdown.Item href="#/action-2">4 - 6 Million</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trên 6 Million</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rented-room">
              0 - 20 m2
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">20 - 40 m2</Dropdown.Item>
              <Dropdown.Item href="#/action-2">40 - 60 m2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trên 60 m2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} md={4}>
          <InputGroup>
            <FormControl
              type="text"
            />
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>


    </div>)
  );
}

export default SearchBar;