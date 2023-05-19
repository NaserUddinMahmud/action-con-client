import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/ActionCon.png'
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.error(error));
      };

    const listItems = <>
    <li><NavLink to='/' className={({ isActive }) =>
                  isActive ? "bg-red-300  font-semibold" : "font-semibold"
                }>Home</NavLink></li>
    <li><NavLink to='/blogs' className={({ isActive }) =>
                  isActive ? "bg-red-300  font-semibold" : "font-semibold"
                }> All Toys</NavLink></li>
    <li><NavLink to='/blogs' className={({ isActive }) =>
                  isActive ? "bg-red-300  font-semibold" : "font-semibold"
                }>My Toys</NavLink></li>
    <li><NavLink to='/blogs' className={({ isActive }) =>
                  isActive ? "bg-red-300  font-semibold" : "font-semibold"
                }>Add A Toy</NavLink></li>
    <li><NavLink to='/blogs' className={({ isActive }) =>
                  isActive ? "bg-red-300  font-semibold" : "font-semibold"
                }>Blogs</NavLink></li>
            
    </>
    return (
        <div>
            <div className="navbar bg-gray-200">
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
  {user ? (
          <>
            <div className="avatar tooltip tooltip-left"data-tip={user.displayName}>
              <div className="w-12 rounded-full me-4">
              {user.photoURL?
             <><img src={user.photoURL}/></> 
            : <><img src='
            https://i.ibb.co/gt2zhwX/abstract-user-flat-1.png'/></>

            }
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-error btn-sm">
              logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-error btn-sm ">
              
              Login
            </Link>
          </>
        )}
  </div>
</div>
        </div>
    );
};

export default Navbar;