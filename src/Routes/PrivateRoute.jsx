import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from "sweetalert2";

const PrivateRoute = ({children}) => {
    const{user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <>
    
    <Navigate state={{from: location}} to='/login' replace>
        { Swal.fire({
                icon: "warning",
                title: "You Have To Log In To Visit This Page!",
                
              })}
    </Navigate>
    </>
};

export default PrivateRoute;