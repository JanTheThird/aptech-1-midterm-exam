import { Link } from "react-router-dom";

function Navbar () {
    return(
        <nav>
            <Link to = "/Home"> Home </Link>
            <Link to = "/Signup"> Signup </Link>
        </nav>
    )
}

export default Navbar;