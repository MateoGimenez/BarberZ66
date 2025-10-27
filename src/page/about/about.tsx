import { useEffect, useRef, useState } from "react";
import "./about.css";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // se desconecta una vez que se activa
        }
      },
      { threshold: 0.2 } // se activa cuando el 20% del elemento es visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="Nosotros"
      ref={sectionRef}
      className={`about-section ${visible ? "visible" : ""}`}
    >
      <h1>Nosotros</h1>
      <div className="contenedor-info">
        <div className="texto">
          <p>
            En <span className="coloreado">BarberZ66</span>, ofrecemos un servicio de barbería con las mejores herramientas 
            y técnicas para que nuestros clientes vivan la mejor{" "}
            <span className="coloreado">experiencia</span>.
          </p>
        </div>
        <div className="imagen">
          <img src="/corte-agustin.jpg" alt="Imagen de la Barbería" />
        </div>
      </div>
    </section>
  );
}
