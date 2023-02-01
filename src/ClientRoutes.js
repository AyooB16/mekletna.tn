import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const useAuth = () => {
    const user = useSelector(state => state.connectedUser);
    return user && user.type=="client";
  };
const ClientRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}

export default ClientRoutes