
import { Navbar, Container } from 'react-bootstrap'

const Navegacion = () => {
    return (
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand href="#home" className='text-white'>Coctel App Redux</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Signed in as: <a href="#login" className='text-white'>Andrés Pardo</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navegacion