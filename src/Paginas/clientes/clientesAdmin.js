import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";

const ClientesAdmin = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          Titulo={"Listado clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: '10%'}}>Id</th>
                    <th style={{ width: '10%'}}>Nombre Cliente</th>
                    <th style={{ width: '10%'}}>Documento</th>
                    <th style={{ width: '10%'}}>Direccion</th>
                    <th style={{ width: '10%'}}>Telefono</th>
                    <th style={{ width: '50%' }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                 
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ClientesAdmin;
