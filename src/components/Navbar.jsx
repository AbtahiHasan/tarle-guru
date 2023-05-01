import { NavLink } from "react-router-dom";
import logo from "/logo.png"
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between absolute top-2 left-0 right-0 max-w-[1240px] mx-auto">
            {/* logo  */}
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="h-[40px] relative max-w-[370px] w-[50%] flex-grow-0 border-white border rounded">
                <FiSearch className="text-white absolute top-[12px] left-4"/>
                <input type="text" className="outline-none px-10 w-full mx-auto h-full bg-[#ffffff44] border-0 text-white placeholder:text-white" placeholder="Search your Destination..." />
            </div>
            <div  className="flex items-center  gap-[50px]">
                <ul  className="flex items-center gap-[50px] text-white">
                    <li>
                        <NavLink>News</NavLink>
                    </li>
                    <li>
                        <NavLink>Destination</NavLink>
                    </li>
                    <li>
                        <NavLink>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact</NavLink>
                    </li>
                </ul>
                <button className="bg-[#F9A51A] px-5 py-2 rounded">
                    <NavLink to="/login">Login</NavLink>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;