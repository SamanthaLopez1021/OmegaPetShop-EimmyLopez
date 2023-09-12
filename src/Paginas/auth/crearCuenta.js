import React, {useState,useEfect} from 'react';
import {Link} from 'react-router-dom';

const CrearCuenta = () =>{

    const[usuario, setUsuario] =useState({
        nombre:'',
        email:'',
        password:'',
        confirmar: ''
    });
    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.targe.name]: e.target.value
        })
    }
    
}

