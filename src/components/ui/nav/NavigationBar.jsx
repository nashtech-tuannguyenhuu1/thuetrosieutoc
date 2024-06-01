import {React, useEffect, useState} from 'react';
import {Container, Nav} from 'react-bootstrap';
import '../../../assets/css/NavigationBar.css'
import {Link, useLocation} from 'react-router-dom';

function NavigationBar() {

  const [page, setPage] = useState("/");
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      setPage("home")
    } else if (location.pathname.startsWith('/rooms')) {
      setPage("rooms")
    } else if (location.pathname.startsWith('/apartments')) {
      setPage("apartments")
    } else if (location.pathname.startsWith('/houses')) {
      setPage("houses")
    } else if (location.pathname.startsWith('/lands')) {
      setPage("lands")
    } else if (location.pathname.startsWith('/roomates')) {
      setPage("roomates")
    } else if (location.pathname.startsWith('/posts')) {
      setPage("posts")
    } else if (location.pathname.startsWith('/accounts')) {
      setPage("accounts")
    } else {
      setPage("")
    }
  }, [page, location.pathname]);

  return (
    <div className='nav-area'>
      <Container>
          <Nav
            variant="pills"
            activeKey={page}
            onSelect={(selectedKey) => setPage(selectedKey)}
          >
              <Nav.Item>
                <Nav.Link eventKey="home" as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="rooms" as={Link} to="/rooms">Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="apartments" as={Link} to="/apartments">Apartments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="houses" as={Link} to="/houses">Houses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="lands" as={Link} to="/lands">Lands</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="roomates" as={Link} to="/roomates">Find Roommates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="posts" as={Link} to="/posts">Posts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accounts" as={Link} to="/accounts">Accounts</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item> */}
          </Nav>
      </Container>
    </div>
  );
}

export default NavigationBar;