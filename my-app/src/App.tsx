import React from 'react'

import './App.css'
import { Route as AppRoute } from './model/Route'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { routes } from './config/routes'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const App: React.FC = () => {
  const addRoute = (route: AppRoute) => {
    const RouteComponent = route.element || Home // Home is the default variant
    console.log('Route:', route)
    return (
      <Route key={route.key} path={route.path} element={<RouteComponent />} />
    )
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Routes>{routes.map((route) => addRoute(route))}</Routes>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
