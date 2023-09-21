import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login'
import CrearCuenta from './Paginas/auth/crearCuenta'
import Home from './Paginas/Home'
import ClientesAdmin from './Paginas/clientes/clientesAdmin';

function App(){
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/crearCuenta" exact element={<CrearCuenta/>}> </Route>
          <Route path="/home" exact element={<Home/>}> </Route>
          <Route path="/clientes-admin" exact element={<ClientesAdmin/>}> </Route>
          
         
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;