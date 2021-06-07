
import Link from "next/link";
import {useRouter} from 'next/router';

const Navbar = () => {

    const router = useRouter();

    return (
        <nav className="navbar">
            <div className="container">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item" href="../">
                    <h1>Content Manager</h1>
                    </a>
                </Link>
                <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
                </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                <div className=" navbar-item">
                    <div className="control has-icons-left">
                    <input className="input is-rounded" type="email" placeholder="Search" />
                    <span className="icon is-left">
                        <i className="fa fa-search"></i>
                    </span>
                    </div>
                </div>
                <Link href="/">
                    <a  className={`navbar-item is-size-5 has-text-weight-semibold ${router.pathname == "/" ? "is-active" : ""}`}>
                        Home
                    </a>
                </Link>
                <Link href="/resources/new">
                    <a  className={`navbar-item is-size-5 has-text-weight-semibold ${router.pathname == "/resources/new" ? "is-active" : ""}`}>
                        Add
                    </a>
                </Link>
                
                <a className="navbar-item is-size-5 has-text-weight-semibold">
                    Features
                </a>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;