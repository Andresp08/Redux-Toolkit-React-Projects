import Productos from '../components/Productos'

const Home = () => {
  return (
    <div className='contenido'>
        <h2 className='heading'>Welcome to the redux Store</h2>

        <section>
            <h3>Products</h3>
            <Productos/>
        </section>
    </div>
  )
}

export default Home