import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user}=use(AuthContext);
    const location =useLocation();
    if(!user){
     return    <Navigate to="/sign-in" state={location.pathname}/>
    }
    return children;
};
export default PrivateRoute;