import { LOGIN } from "../../config/routes/paths";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../config/context/AuthContext';

export const PrivateRoute = () => {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}