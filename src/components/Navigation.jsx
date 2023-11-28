import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/arthurs_library/">Home</Link>
                <Link to="carousel">Carousel</Link>
                <Link to="contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation