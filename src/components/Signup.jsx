import React, { useState } from 'react';
import authService from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from '../components/index';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError(null);
        try {
            const user = await authService.createAccount(data)
            if (user) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <div className="flex items-center justify-center ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-lg p-10 border border-black/60`}>
                <div><Logo /> </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60 ">
                    Already have an acount? <Link to="/login" className="font-medium text-primary transistion-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <div className="text-red-600 text-center mt-8">{error}</div>}

                <form onSubmit={handleSubmit(create)} className="mt-8">
                    <div className="space-y-8">
                        <Input
                            label="Full name"
                            placeholder="Enter your name"
                            {...register("name")}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                            })}
                        />
                         <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="email"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )

}