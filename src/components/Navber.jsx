import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Bank</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
         <li > <Link to='/'>Home</Link></li>
         <li > <Link to='/history'>Transection History </Link></li>
         <li > <Link to='/home'>Home</Link></li>
         <li > <Link to='/home'>Home</Link></li>
           
          </ul>
        </div>
      </div>
    );
};

export default Navber;