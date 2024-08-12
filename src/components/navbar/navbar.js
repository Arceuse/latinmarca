import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div>
                <header className="p-3 mb-3 border-bottom navbar-diseño">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div className="px-3">
                                <h1 className="marca">LatinMarca</h1>
                            </div>
                            <div className="opciones-navbar">
                                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <li><a href="#" className="nav-link px-2 opcion">Inicio</a></li>
                                    <li><a href="#" className="nav-link px-2 opcion">Servicios</a></li>
                                    <li><a href="#" className="nav-link px-2 opcion">Productos</a></li>
                                    <li><a href="#" className="nav-link px-2 opcion">Blog</a></li>
                                    <li><a href="#" className="nav-link px-2 opcion">Local</a></li>
                                    <li><a href="#" className="nav-link px-2 opcion">Contactenos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default Navbar;