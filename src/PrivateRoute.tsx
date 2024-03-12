
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }:any) => {
    const auth :any = JSON.parse(localStorage.getItem("customer_login_auth"))

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/index" />;
};

export default PrivateRoute;