
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions";

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const navigate = useNavigate(); //habilitar navigate

    //confirmar eliminacion
    const confirmarEliminarProducto = (id) => {
        //preguntar al usuario
        Swal.fire({
            title: 'Estas seguro?',
            text: "no podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                //pasarlo al action
                dispatch(borrarProductoAction(id))
            }
        })
    }

    //función que redirige de forma programada
    const redireccionarDireccion = (producto) => {
        dispatch( obtenerProductoEditar(producto) )
        navigate(`/productos/editar/${producto.id}`)
    }

    return (
        <tr className="text-center">
            <td>{nombre}</td>
            <td> <span className="font-weight-bold"> $ {precio} </span> </td>
            <td className="acciones">
                <button 
                    type="button" 
                    onClick={() => redireccionarDireccion(producto)}
                    className='btn btn-primary mr-2'>Editar 
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto