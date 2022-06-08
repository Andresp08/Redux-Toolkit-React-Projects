
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Action de redux
import { crearNuevoProductoAction } from '../actions/productoActions.js'
import Spinner from './Spinner.jsx';

import { mostrarAlerta,ocultarAlertaAction } from '../actions/alertaActions.js';

const NuevoProducto = () => {

    let navigate = useNavigate();

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)


    //useDispatch crea una función
    const dispatch = useDispatch();

    //Acceder al state del store
    const cargando = useSelector((state) => state.productos.loading);
    // const error = useSelector(state => state.productos.error)
    const alerta = useSelector(state => state.alerta.alerta);

    //llamar el action de productoAction.js
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );

    const submitNuevoProducto = (e) => {
        e.preventDefault();

        //validar form
        if(nombre.trim() === '' || precio <= 0){

            const alerta = {
                msg: 'Todos los campos son obligatorios',
                clases: 'alert alert-danger text-center text-uppercase p-2'
            }
            dispatch(mostrarAlerta(alerta));
            return;
        }

        //revisar errores
        dispatch(ocultarAlertaAction())
        
        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        //redireccionar
        navigate('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 fw-bold">Agregar Nuevo Producto</h2>

                        {/* { error ? <p className='alert alert-danger text-center text-uppercase p-2 font-weight-bold'>Hubo un error</p> : null } */}

                        {alerta ? <p className={alerta.clases}>{alerta.msg}</p> : null }

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="nombre">Producto</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio Producto</label>
                                <input
                                    type="number"
                                    name='precio'
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary fw-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        { cargando ? <Spinner /> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto