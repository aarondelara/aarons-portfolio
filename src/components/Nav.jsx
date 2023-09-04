import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav >
            <ul className="nav-links">
                <Link to="/about">
                    About Me &nbsp; &nbsp;
                </Link>
                <Link to="/">
                    Resume &nbsp; &nbsp;
                </Link>
                <Link to="/projects">
                    Projects &nbsp; &nbsp;
                </Link>
                <Link to="/contact">
                    Contact &nbsp; &nbsp;
                </Link>
            </ul>
        </nav>
    )

}

export default Nav