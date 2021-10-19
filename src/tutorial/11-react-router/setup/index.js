import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return <Router>
    <Navbar/>
    {/* Con Switch, solo el primero que cumpla es el que se muestra, para
    evitar traslapos de informacion */}
    <Switch>
      {/* El exact evita que como esta ruta esta contenida en las 
      de abajo, cuando vaya a las demas aparezca tambien la homepage */}
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/people'>
        <People/>
      </Route>
      <Route path='/person/:id' children={<Person/>} /> 
      {/* 'Este siempre lo encontrara, en caso que el usuario
      ingrese cualquier otra ruta' */}
      <Route exact path='*'>
        <Error/>
      </Route>
    </Switch>
  </Router>;
};

export default ReactRouterSetup;
