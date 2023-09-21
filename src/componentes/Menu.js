import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return ( 
       
     <div>
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

      <li className="nav-item">
        <Link to={"/home"} className="nav-link">
          <i className="nav-icon fas fa-th" />
          <p>
            Inicio
           
          </p>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to={"/clientes-admin"} className="nav-link">
          <i className="nav-icon fas fa-solid fa-user" />
          <p>
            Clientes
           
          </p>
        </Link>
      </li>
           
          
        </ul>
    
  </nav>
  </div>
  );


}
 
export default Menu;