import React from "react";
import {Link} from 'react-router-dom';
const Login = () =>{
    return (
    <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <Link to={"#"}><b>Iniciar</b>Sesion</Link>
      </div>
     
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Bienvenido. ingrese sus credenciales</p>
    
          <form action="../../index3.html" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember"/>
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
            
           
            </div>
         
    
          <div class="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <button type="submit" class="btn btn-block btn-primary"> Ingresar </button>
            <Link to={"CrearCuenta"} type="submit" class="btn btn-block btn-danger">Crear cuenta</Link>
          </div>
          </form>
    
        </div>
    
      </div>
    </div>
    </div>);
}

export default Login;