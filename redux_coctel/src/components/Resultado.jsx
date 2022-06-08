
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const Resultado = () => {

    const resultado = useSelector(state => state.coctels.cocteles);

    return (
        <Col md={6} lg={3} className='mt-4'>
            {resultado.map(coctel => (
                <Card className='mb-4'>
                    <Card.Img
                        variant='top'
                        src={coctel.strDrinkThumb}
                        alt={`Imagen de ${coctel.strDrink}`}
                    />
                    <Card.Body className='text-center fw-bold' >
                        <Card.Title>{coctel.strDrink}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </Col>
    )
}

export default Resultado