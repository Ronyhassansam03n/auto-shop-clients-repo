import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Spinner/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';




const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {

        return children;

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;