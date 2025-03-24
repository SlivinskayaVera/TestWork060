'use client';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container className='col-lg-7 mx-auto'>
          <Navbar.Brand href='/'>Weather Forecast</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/favorites'>Favorites</Nav.Link>
            <Nav.Link href='/about'>About App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
