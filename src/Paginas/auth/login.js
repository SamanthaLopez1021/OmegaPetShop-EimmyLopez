import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const Login = () =>{

  //redireccionar al home
  const navigate = useNavigate();


  //definir el estado inicial de las variables
  const[usuario,setUsuario] = useState({
    email:"",
    password:""
  });

  const{email, password}=usuario;

  const onChange= (e)=>{
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    document.getElementById("email").focus();
},[])


const iniciarSesion = async () => {
  if (password.length < 6){
    const msg = "La contraseña debe ser al menos de 6 caracteres";
    swal(
      {
        title: 'Error',
        text: msg, 
        icon: 'error',
        buttons: {
          confirm:{
            text:'OK',
            value:true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      }
    );


  }else {
    const data = {

      email: usuario.email,
      password: usuario.password
    }
    const  response = await APIInvoke.invokePOST("/usuario", data);
    const  mensaje = response.msg;

    if(mensaje === "El usuario no existe" || mensaje === "Contraseña incorrecta"){
      const msg="No fue posible iniciar la sesion verifique los datos ingresados";
      swal(
        {
          title: 'Error',
          text: msg, 
          icon: 'error',
          buttons: {
            confirm:{
              text:'OK',
              value:true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        }
      );
    } else {
      // obtener el token de acceso
      const jwt =response.token;

      localStorage.setItem('token', jwt);

      //redireccionar al home

      navigate("/home");


    }
  }
}

const onSubmit= (e)=>{
  e.preventDefault();
  iniciarSesion();
 
}

    return (
    <div className="hold-transition login-page">
    <div className="login-box">
      <div className="login-logo">
        <Link to={"#"}><b>Iniciar</b>Sesion</Link>
      </div>
     
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido. ingrese sus credenciales</p>
    
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input type="email"
               className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password"
               className="form-control"
                placeholder="Contraseña"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required

                />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
         
         
    
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <button type="submit" className="btn btn-block btn-primary"> Ingresar </button>
            <Link to={"/crearCuenta"} className="btn btn-block btn-danger">Crear cuenta</Link>
          </div>
          </form>
    
        </div>
    
      </div>
    </div>
    </div>);
}

export default Login;