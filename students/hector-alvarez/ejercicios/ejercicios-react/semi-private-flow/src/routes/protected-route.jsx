import { Navigate } from "react-router-dom"



function ProtectedRoute ({children}) {


  const edad=localStorage.getItem('edad')

    if(edad <18){

        return <Navigate to='/userinfo'></Navigate>
    }
    return children;

}

export default ProtectedRoute