import React, { useEffect, useState } from 'react'
import {Col, Row} from 'react-bootstrap'
import HN from '../../assets//images/HN.jpg'
import '../../assets/css/RoomList.css'
import PaginationArea from '../../components/ui/page/PaginationArea'
import PostService from "../../services/post/post.service"
import { useSearchParams } from 'react-router-dom'

function RoomList(props) {

  const [queryParams, setQueryParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(queryParams.page ? parseInt(queryParams.page) : 1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('fetch2 data:');

    const searchParams = {
      "value": queryParams.get('value') ? queryParams.get('value') : "",
      "roomType": queryParams.get('roomType') ? queryParams.get('roomType') : "rooms",
      "city": queryParams.get('city') ? queryParams.get('city') : "",
      "rentType": queryParams.get('rentType') ? queryParams.get('rentType') : "",
      "price": queryParams.get('price') ? queryParams.get('price') : "",
      "area": queryParams.get('area') ? queryParams.get('area') : "",
      "page": queryParams.get('page') ? Number(queryParams.get('page')) : 1
    };    
    getPosts(searchParams)
    setCurrentPage(searchParams.page);

  }, [queryParams, props.trigger]);

  const getPosts = (searchParams) => {

    setLoading(true)
    PostService.getPosts(searchParams).then(response => {
      setItems(response);
    }).catch(error => {
      console.error('Failed to fetch data:', error);
    }).finally(()=> {
      setLoading(false)
    });
  }
  
  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    const newParams = new URLSearchParams(queryParams);
    newParams.set('page', pageNumber);
    setQueryParams(newParams)

  };

  return (
    <div style={{margin: 'auto', padding: '30px 30px 100px'}}>
      <Row>
        <Col xs={12}>
          <h3>RENT CHEAP ROOMS, HOUSES, APARTMENTS, COMMERCIAL SPACES</h3>
          <p>Top Affordable Rentals in Vietnam: Boarding Rooms, Houses, Apartments, and Commercial Spaces - Quickly updated, accurate, and verified rental information.</p>
        </Col>
      </Row>
      <Row className='row-area'>
        <Col xs={12}>
          <h4>Found {items && items.length} Rooms rental lists</h4>
        </Col>
      </Row>
      {loading && <p>Loading...</p>}
      {!loading &&items && items.splice(0, 10).map(item => (
        <Row className='row-detail' key={item.id}>
          <Col md={3}>
            <img src={HN} alt='thuetrosieutoc' height={200} width={200} className='img-border-radius-5'></img>
          </Col>
          <Col md={9}>
            <h3>{item.title}</h3>
            <p>{item.price} M/month</p>
            <p>Area: {item.acreage} m2</p>
            <p>{item.address}</p>
            <p>{item.description}</p>
            <Row>
              <Col md={6}>
                <i className="pi pi-clock"></i> {item.creatAt}
              </Col>
              <Col md={6} style={{textAlign: 'right'}}>
                <i className="pi pi-phone"></i> {item.phone}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
      {!loading && items && items.length === 0 &&
        <Row className='row-detail'>
          <Col md={3}>
            <p>Not found data.</p>
          </Col>
        </Row>
      }
      {items && items.length > 0
        && <Row>
          <Col xs={12}>
          {/* <PaginationArea
            itemsPerPage={itemsPerPage}
            totalItems={items.length}
            currentPage={currentPage}
            paginate={paginate}
          /> */}
          <PaginationArea
            itemsPerPage={itemsPerPage}
            totalItems={61}
            currentPage={currentPage}
            paginate={paginate}
          />
          </Col>
        </Row>
      }
    </div>
  );
}

export default RoomList;