import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About 
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
        <NavLink to='/Portfolio' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Portfolio
        </NavLink>
        <NavLink to='/Review' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Review
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
