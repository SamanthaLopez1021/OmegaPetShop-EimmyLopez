import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const CrearCuenta = () =>{

  const[usuario, setUsuario] = useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
}); 

const{nombre, email, password, confirmar}= usuario;

const onChange = (e) =>{
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
}

useEffect(()=>{
    document.getElementById("nombre").focus();
},[])

const crearCuenta = async () => {

  if (password !== confirmar){
    const msg = "Las contraseñas son diferentes";
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
  }else if(password.length < 6) {
    const msg = "Las contraseñas deben ser al menos de 6 caracteres";
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
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }
      const  response = await APIInvoke.invokePOST("/usuario", data);
      const  mensaje = response.msg;
  
  
      if(mensaje === 'El usuario ya existe'){
        const msg = "El usuario ya existe";
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

      
    }else{
      const msg = "El usuario fue creado correctamente";
        swal(
          {
            title: 'Informacion',
            text: msg, 
            icon: 'success',
            buttons: {
              confirm:{
                text:'OK',
                value:true,
                visible: true,
                className: 'btn btn-primary',
                closeModal: true
              }
            }
          }
        );
        setUsuario({
          nombre:'',
          email:'',
          password:'',
          confirmar:''
        })
    }
  }

    }



    const onSubmit = (e) =>{
       e.preventDefault();
       crearCuenta();

    }

    return (
        <div style={{backgroundColor:"#D3C1DE"}} className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}><b>Crear</b>Cuenta</Link>
          </div>
         
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Ingrese los datos del usuario</p>
        
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input type="text"
                         className="form-control" 
                         placeholder="Nombre"
                         id="nombre"
                         name="nombre"
                         value={nombre}
                         onChange={onChange}
                         required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>

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

                <div className="input-group mb-3">
                  <input type="password"
                         className="form-control" 
                         placeholder="Confirmar contraseña"
                         id="confirmar"
                         name="confirmar"
                         value={confirmar}
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
                <button type="submit" className="btn btn-block btn-primary"> Crear Cuenta</button>
                <Link to={"/"} type="submit" className="btn btn-block btn-danger">Regresar al login</Link>
              </div>
              </form>
        
            </div>
        
          </div>
        </div>
        </div>
        );
    
}
export default CrearCuenta;

