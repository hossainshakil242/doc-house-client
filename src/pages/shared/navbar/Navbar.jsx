import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png';

const Navbar = () => {
    const navItems = <>
        <li className="hover:bg-success rounded-sm">
            <Link to='/'>Home</Link>
        </li>
        <li className="hover:bg-success rounded-sm">
            <Link to='/'>About</Link>
        </li>
        <li className="hover:bg-success rounded-sm">
            <Link to='/'>Appointment</Link>
        </li>
        <li className="hover:bg-success rounded-sm">
            <Link to='/login'>Login</Link>
        </li>
    </>
    return (
        <div className="navbar bg-opacity-0 py-0 text-white font-semibold fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} className="w-14 p-2" alt="" />
                    <Link to='/' className="normal-case font-bold text-2xl lg:text-3xl"> <span className="">Doc</span> House</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;