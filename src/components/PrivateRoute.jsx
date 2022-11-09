import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { SpinnerCircular } from 'spinners-react';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();



    if (!user) {
        return (<>
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
            <SpinnerCircular />
        </>)

    }
    return (<>
        children
        <SpinnerCircular enabled={false} />
    </>);
};

export default PrivateRoute; 