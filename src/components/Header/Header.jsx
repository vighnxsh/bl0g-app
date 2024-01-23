import { Container, Logo, LogoutBtn } from "../index"
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const authStatus = useSelector(state => state.auth.authStatus);
   
    const navigate = useNavigate();
   
    const navItems = [
        {
            name: " Home", slug: "/",
            active: true
        },
        {
            name: "All Posts", slug: "/AllPosts", active: authStatus
        },
        {
            name: "Add Post", slug: "/AddPost", active: authStatus
        },
        {
            name: "Login", slug: "/Login", active: !authStatus
        },
        {
            name: "Signup", slug: "/SignUp",
            active: !authStatus
        }
    ]

    return (
        <div className="py-3 shadow bg-slate-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4 ">
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        
                        { navItems.map((item) =>
                            item.active ? (
                               
                               <li key={item.name}>
                                   
                                    <button onClick={() => navigate(item.slug)} className="inline-block px-6 py-2 duration-200 hover:text-slate-300 rounded">
                                        {item.name}
                                    </button>
                               
                                </li>
                            ) : null
                        )}
                        {authStatus ? (
                            <li>
                                <LogoutBtn />
                            </li>
                        ) : null}
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Header;