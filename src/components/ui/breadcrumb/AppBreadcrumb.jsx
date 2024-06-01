import {React, useEffect, useState } from 'react';
import {Breadcrumb, Col, Row} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';

function AppBreadcrumb() {

  const location = useLocation();
  const [showBreadcumb, setShowBreadcumb] = useState(true);

  useEffect(() => {
    if(location.pathname === '/sign-in' || location.pathname === '/sign-up') {
      setShowBreadcumb(false)
    } else {
      setShowBreadcumb(true)
    }
  }, [location.pathname]);

  const renderBreadcrumb = () => {
    if(location.pathname === '/') {
      return <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
    } else if (location.pathname.startsWith('/rooms')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Rooms</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/apartments')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Apartments</Breadcrumb.Item>
            </>
    }  else if (location.pathname.startsWith('/houses')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Houses</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/lands')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Lands</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/roomates')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Find Roommates</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/posts')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Posts</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/accounts')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Accounts</Breadcrumb.Item>
            </>
    } else if (location.pathname.startsWith('/new-post')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Add Post</Breadcrumb.Item>
            </>
    } else {
      return <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
    }
  };
 
  return (
    showBreadcumb? (
      <Row>
        <Col xs={12}>
          <Breadcrumb style={{marginTop: '10px'}}> {renderBreadcrumb()} </Breadcrumb>
        </Col>
      </Row>) : null
  );
}

export default AppBreadcrumb;