import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login'
import CrearCuenta from './Paginas/auth/crearCuenta'

function App(){
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}>
          <Route path="/crear-cuenta" exact element={<crearCuenta/>}></Route>

          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;