import React from "react";

const Button = ({ children, onClick, className = '', textColor = 'text-white', bgColor = 'bg-blue-600', type = 'button', ...props }) => {
    
    return (
        <button className={`px-7 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >
            {children}
        </button>
    )
}

export default Button;