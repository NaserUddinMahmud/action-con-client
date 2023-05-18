import { Link } from "react-router-dom";
import logo from '../../../../public/ActionCon.png'


const Navbar = () => {
    const listItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'> All Toys</Link></li>
    <li><Link to='/blog'>My Toys</Link></li>
    <li><Link to='/blog'>Add A Toy</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
            
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  className="menu menu-compact dropdown-content mt-3 p-2 shadow g-base-1b00 rounded-box w-52">
        {listItems}
      </ul>
    </div>
    <Link to="/"><div>
        <img className="w-52" src={logo} alt="" />
    </div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      {listItems}
       
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn btn-error btn-xs ">
    Login
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;