import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';

function AppBreadcrumb() {

  const location = useLocation();

  const renderBreadcrumb = () => {
    if(location.pathname === '/') {
      return <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
    } else if (location.pathname.startsWith('/rooms')) {
      return <>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active={false}>Rooms</Breadcrumb.Item>
            </>
    } else {
      return <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
    }
  };
 
  return (
    <Breadcrumb>
      {renderBreadcrumb()}
    </Breadcrumb>
  );
}

export default AppBreadcrumb;