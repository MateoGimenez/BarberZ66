import { useState } from "react"
import "./navbar.css"

export default function NavBar() {
    const [open , setOpen] = useState(false)
  return (
    <header>
        <div className="logo">
            <img src="./logoZ66.jpg" alt="" />
            <h1>Z66</h1>
        </div>

        {/*Menu Hamburguesa solo para movil */}
        <div className={`menu-icon ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <img src="icons8-menú.svg"  alt="" />
        </div>

        <nav className={`navegacion ${open ? "open" : ""}`}>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Nosotros">Nosotros</a></li>
                <li className="menu-turno"><a href="">Turno</a></li>
            </ul>           
        </nav>

        <div className="turno">
            <a href="">Turno</a>
        </div>
    </header>
  )
}
