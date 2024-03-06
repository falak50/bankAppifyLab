import Navber from "../components/Navber";
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div >
            <Navber className="p-3" ></Navber>
             <div className="p-3">
             <Outlet ></Outlet>
             </div>
           
        </div>
    );
};

export default Main;