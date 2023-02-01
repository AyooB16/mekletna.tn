import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const useAuth = () => {
    const user = useSelector(state => state.connectedUser);
    return user=="" || user==undefined
  };
const GuestRoutes = () => {
 
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;

}

export default GuestRoutes