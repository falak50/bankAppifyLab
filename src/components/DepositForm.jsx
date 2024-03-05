import { useParams } from "react-router-dom";
import DepoNwithdrawF from "./DepoNwithdrawF";

const DepositForm = () => {
    const { id } = useParams();
    console.log(id);
    const type='deposit'
    return (
        <div>
            <h1>wow this deposite </h1>
            <DepoNwithdrawF id={id} type={type}></DepoNwithdrawF>
        </div>
    );
};

export default DepositForm;