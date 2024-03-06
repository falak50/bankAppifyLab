import { Link } from "react-router-dom";
import img from "../assets/appifyLabIMG.jpg"

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={img} className="w-[40px] h-[40px] rounded-lg" />
          <a className="btn btn-ghost text-xl">AppifyLab Bank Ltd</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
         <li > <Link to='/'>Home</Link></li>
         <li > <Link to='/history'>Transection History </Link></li>
         {/* <li > <Link to='/home'>Home</Link></li>
         <li > <Link to='/home'>Home</Link></li> */}
           
          </ul>
        </div>
      </div>
    );
};

export default Navber;