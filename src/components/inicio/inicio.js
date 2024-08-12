import React from 'react';
import './inicio.css';

const Inicio = () => {
    return (
        <div>
            <div className="seccion1">
                <div className='imagen'>
                    <img src="./img/reparacion.png"></img>
                </div>
                <div className='texto'>
                    <h1>BRINDAMOS SERVICIOS A DOMICILIO EN TODO LIMA</h1>
                    <p>Realizamos servicios de instalaciones, mantenimiento y asesorias</p>
                    <div className="boton-sabermas">
                        <a href='#'>Saber más</a>
                    </div>
                </div>
            </div>
            <div className="seccion2">

            </div>
            <div className="seccion3">
            </div>
        </div>
    );
}

export default Inicio;
