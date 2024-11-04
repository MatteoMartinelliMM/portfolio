import logo from '../assets/logo.png'

function Navbar() {
    return <>
        <div className="navbar bg-neutral text-neutral-content w-full fixed top-0 left-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#knowledge">Knowledge</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <img src={logo} className="h-3" alt="home"/>
                </div>
            </div>

            <div className="navbar-end lg:flex hidden  flex-none ">
                <ul className="menu menu-horizontal px-4">
                    <li><a href="#home" className="btn btn-ghost">Home</a></li>
                    <li><a href="#experience" className="btn btn-ghost">Experience</a></li>
                    <li><a href="#knowledge" className="btn btn-ghost">Knowledge</a></li>
                    <li><a href="#contact" className="btn btn-ghost">Contact</a></li>
                </ul>
            </div>
        </div>

    </>

}

export default Navbar