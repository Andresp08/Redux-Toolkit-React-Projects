
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getCoctels } from '../store/slices/coctel/thunks';
import Resultado from './Resultado';

const Contenido = () => {

    const dispatch = useDispatch();

    const [ categoria, setCategoria ] = useState('');
    const [ alerta, setAlerta ] = useState(null);
    const [ enviado, setEnviado ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        !categoria ? setAlerta('Por favor ingresa una categoría para continuar') :
        dispatch( getCoctels(categoria) ) ? setAlerta('') : ''

        setEnviado(true);
    }

    return (
        <div className='container mt-3'>
            <h5 className='text-center'>Coctel App for practicing React - Redux - Toolkit</h5>

            { alerta && <p className=' mt-4 bg-danger p-3 w-100 text-center fw-bold text-white'>{alerta}</p> }

            <div className="row mt-1 d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="form">
                        <Form>
                            <Form.Group>
                                <Form.Label>Ingresa la categoría</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='categoria'
                                    value={categoria}
                                    onChange= {(e) => setCategoria(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <Button 
                        type="submit"
                        onClick={handleSubmit}
                        className='w-100 mt-4 fw-bold' 
                        variant='primary'>
                    Buscar</Button>
                </div>
            </div>

            <Row>
                <Resultado/>
            </Row>
        </div>
    )
}

export default Contenido