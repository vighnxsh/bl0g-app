import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, authentication = true}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth);

    useEffect(() => {
        //todo 
        
        // if(authStatus == true){
        //   navigate('/')
        // }
        // else if(authStatus == false){
        //   navigate('/login')
        // }

        if (authStatus) {
            setLoading(false);
            if (authentication && !authStatus) {
                navigate("/login");
            } else if (!authentication && authStatus !== authentication) {
                navigate("/");
            }
        }
        setLoading(false);
    }, [authStatus, navigate, authentication])


    return  loading ? <div>Loading...</div> : <>{children}</>;
}