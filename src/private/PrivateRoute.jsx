import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Compunents/Loading';

const PrivateRoute = ({children}) => {
    
    const {user,loading}=use(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loading){
        return <Loading></Loading>;
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;