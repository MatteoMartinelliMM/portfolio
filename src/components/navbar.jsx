import logo from '../../public/assets/logo.png'
import HamburgerMenu from "./icons/hamburgerMenu.jsx";

function Navbar() {
    return <>
        <div className="navbar bg-base-100 text-neutral-content w-full fixed top-0 left-0 z-10">
            <div className="navbar-start">

                <div className="flex-1">
                    <img src={logo} className="h-3" alt="home"/>
                </div>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HamburgerMenu></HamburgerMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#knowledge">Knowledge</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-none ">
                    <ul className="menu menu-horizontal px-4">
                        <li><a href="#home" className="btn btn-ghost text-lg">Home</a></li>
                        <li><a href="#experience" className="btn btn-ghost text-lg">Experience</a></li>
                        <li><a href="#knowledge" className="btn btn-ghost text-lg">Knowledge</a></li>
                        <li><a href="#projects" className="btn btn-ghost text-lg">Projects</a> </li>
                        <li><a href="#contact" className="btn btn-ghost text-lg">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </>

}

export default Navbar