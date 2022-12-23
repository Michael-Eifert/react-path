import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Navbar.Brand className='navbar-brand'>
        <Link to="/">My App</Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Button className='navbar-button'>
          <Link to="/expenses" className='custom-link'>Expenses</Link>
        </Button>
        <Button className='navbar-button'>
          <Link to="/group" className='custom-link'>Group</Link>
        </Button>
        <Button className='navbar-button'>
          <Link to="/about" className='custom-link'>About</Link>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
