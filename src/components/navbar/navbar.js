import React from "react";

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="navbar">
                    <header class="p-3 mb-3 border-bottom">
                        <div class="container">
                            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                                </a>

                                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
                                    <li><a href="#" class="nav-link px-2 link-body-emphasis">Inventory</a></li>
                                    <li><a href="#" class="nav-link px-2 link-body-emphasis">Customers</a></li>
                                    <li><a href="#" class="nav-link px-2 link-body-emphasis">Products</a></li>
                                </ul>

                                <div class="dropdown text-end">
                                    <ul class="dropdown-menu text-small">
                                        <li><a class="dropdown-item" href="#">New project...</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div>
                        <h1>LatinMarca</h1>
                        <ul>
                            <li>Inicio</li>
                            <li>Servicios</li>
                            <li>Productos</li>
                            <li>Blog</li>
                            <li>Local</li>
                            <li>Contactenos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;