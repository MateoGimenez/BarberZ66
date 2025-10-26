import "./home.css"

const Home = () => {
  return (
        <section className="hero">
            <img src="corte-agustin.jpg" alt="" />
            <div className="overlay">
            <h1>Bienvenido a Barbería <strong>Z66</strong></h1>
            <p>Tu estilo comienza aquí. Reserva tu turno en segundos.</p>
            <button className="btn-reservar">Reservar ahora</button>
            </div>
        </section>
  )
}

export default Home
