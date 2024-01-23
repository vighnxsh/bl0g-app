import React,{useId} from "react";


const Input = React.forwardRef(
 
    function Input({label,text='text',classname='',type,placeholder,...props},ref) {
    return(
        <div className="w-full">
            {
                label && <label className="block text-sm text-gray-600" htmlFor={id}>{label}</label>
            }
            <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`} ref={ref} {...props} id={id}> </input>
        </div>
    )
})

export default Input;