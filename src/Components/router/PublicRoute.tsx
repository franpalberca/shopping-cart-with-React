import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../config/context/AuthContext';
import { PRIVATE } from '../../config/routes/paths';


export const PublicRoute = () => {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    )

}