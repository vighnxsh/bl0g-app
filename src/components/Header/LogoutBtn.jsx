import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import React from 'react';

const LogoutBtn = () => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
            .then(() => { dispatch(logout()) })
    }

    return (
        <div className="flex items-center justify-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={logoutHandler}>
                Logout
            </button>
        </div>
    );                  
}

export default LogoutBtn;