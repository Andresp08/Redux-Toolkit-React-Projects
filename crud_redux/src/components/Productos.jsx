
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'

import { useEffect } from 'react';

import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //consultar la api
        const cargarProductos = () => dispatch( obtenerProductosAction());
        cargarProductos();
    },[]);

    //obtener el state
    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { error ? <p className='font-weight-bold alert alert-danger text-center text-uppercase mt-4'>Hubo un errror al obtener los productos</p> : null}

            { cargando ? <p className='text-center font-weight-bold'>Cargando Productos...</p> : null }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr className="text-center">
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? 
                        'No hay Productos'
                        : (
                        productos.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Productos