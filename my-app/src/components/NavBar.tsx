import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar } from 'react-bootstrap'
import { routes } from '../config/routes'
import '../styles/NavBar.css'
import { Route } from '../model/Route'

const NavBar: React.FC = () => {
  const showNavButton = (route: Route) => route.isEnabled && !route.subPage

  const renderNavButton = (route: Route) => {
    return (
      <Button key={route.key} className="navbar-button">
        <Link key={`${route.key}-link`} to={route.path} className="custom-link">
          {route.title}
        </Link>
      </Button>
    )
  }

  return (
    <Navbar data-testid="navbar" bg="light" expand="lg" className="navbar">
      <Navbar.Brand className="navbar-brand">
        <Link to="/">My App</Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        {routes.map((route) =>
          showNavButton(route) ? renderNavButton(route) : null,
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
