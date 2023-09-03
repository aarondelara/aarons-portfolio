import { Link } from "react-router-dom"

function Nav() {

    return(
        <nav>
            <Link to="/">
                About
            </Link>
            <Link to="/projects">
                Projects
            </Link>
            <Link to="/contact">
                Contact
            </Link>
        </nav>
    )
}

export default Nav;