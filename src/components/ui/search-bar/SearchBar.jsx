import {React, useEffect, useState} from 'react';
import {Button, Col, Dropdown, FormControl, InputGroup, Row} from 'react-bootstrap';
import '../../../assets/css/SearchBar.css'
import {useLocation, useNavigate} from 'react-router-dom';

function SearchBar(props) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(true);

  const roomTypes = [
    { label: 'Rooms', value: 'rooms' },
    { label: 'Lands', value: 'lands' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'Houses', value: 'houses' },
    { label: 'Find Roommates', value: 'roommates' }
  ];

  const cities = [
    { label: 'Đà Nẵng', value: 'danang' },
    { label: 'Hà Nội', value: 'hanoi' },
    { label: 'Hồ Chí Minh', value: 'hochiminh' },
    { label: 'An Giang', value: 'angiang' }
  ];

  const rentTypes = [
    { label: 'For Rent', value: 'rent' },
    { label: 'Buy', value: 'buy' }
  ];

  const priceRanges = [
    { label: '0 - 2 Million', value: '0-2' },
    { label: '2 - 4 Million', value: '2-4' },
    { label: '4 - 6 Million', value: '4-6' },
    { label: 'Over 6 Million', value: '6+' }
  ];

  const areaRanges = [
    { label: '0 - 20 m2', value: '0-20' },
    { label: '20 - 40 m2', value: '20-40' },
    { label: '40 - 60 m2', value: '40-60' },
    { label: 'Over 60 m2', value: '60+' }
  ];
  
  const [searchValue, setSearchValue] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedRentType, setSelectedRentType] = useState(rentTypes[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [selectedAreaRange, setSelectedAreaRange] = useState(areaRanges[0]);

  useEffect(() => {
    if(location.pathname === '/sign-in' || location.pathname === '/sign-up'
     || location.pathname === '/posts' || location.pathname === '/accounts' || location.pathname === '/new-post') {
      setShowSearchBar(false)
    } else {
      setShowSearchBar(true)
    }
  }, [location.pathname]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.append('value', searchValue);
    params.append('roomType', selectedRoomType.value);
    params.append('city', selectedCity.value);
    params.append('rentType', selectedRentType.value);
    params.append('price', selectedPriceRange.value);
    params.append('area', selectedAreaRange.value);
    const url = `rooms?${params.toString()}`;
    props.onSearch()
    navigate(url)
  };

  const handleRoomTypeSelect = (value) => {
    setSelectedRoomType(value);
  };

    const handleCitySelect = (item) => {
    setSelectedCity(item);
  };

  const handleRentTypeSelect = (item) => {
    setSelectedRentType(item);
  };

  const handlePriceRangeSelect = (item) => {
    setSelectedPriceRange(item);
  };

  const handleAreaRangeSelect = (item) => {
    setSelectedAreaRange(item);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    showSearchBar
     && (<div id='area-search'>
      <Row>
        <Col xs={12} md={8}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-room-type">
              {selectedRoomType.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {roomTypes.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleRoomTypeSelect(item)}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-city">
              {selectedCity.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {cities.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleCitySelect(item)}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-rent-type">
            {selectedRentType.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {rentTypes.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleRentTypeSelect(item)}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-price-range">
              {selectedPriceRange.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
             {priceRanges.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handlePriceRangeSelect(item)}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-area-range">
              {selectedAreaRange.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {priceRanges.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleAreaRangeSelect(item)}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} md={4}>
          <InputGroup>
            <FormControl
              type="text"
              value={searchValue}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="outline-primary" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>


    </div>)
  );
}

export default SearchBar;