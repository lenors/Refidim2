import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from '../Pages/Home'
import Calendario from '../Pages/Calendario'
import Dias from '../Pages/Dias'
import Sobre from '../Pages/Sobre'
import Doe from '../Pages/Doe'


const Rotas = () => {
  return (
   <Router>
    <ul>
        <li>
            <Link to="/">Home
        </Link>
        </li>
        <li>
            <Link to="/calendario">Calendario
        </Link>
        </li>
        <li>
            <Link to="/dias"> Dias 
        </Link>
        </li>
        <li>
            <Link to="/sobre">Sobre
        </Link>
        </li>
        <li>
            <Link to="/doe">Doe
        </Link>
        </li>
    </ul>
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/calendario">
            <Calendario/>
        </Route>
        <Route path="/Dias">
            <Dias/>
        </Route>
        <Route path="/Sobre">
            <Sobre/>
        </Route>
        <Route path="/Doe">
            <Doe/>
        </Route>
    </Switch>
   </Router>
  )
}

export default Rotas