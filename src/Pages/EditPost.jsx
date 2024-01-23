import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import appwriteSerivce from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

export default function AddPost() {
   const [posts, setPosts] = useState([]);
   const {slug} = useParams();
   const navigate = useNavigate();
    
   useEffect(() => {
    if (slug) {
        appwriteSerivce.getPost(slug).then((res) => {
            if (res) {
                setPosts(res);
            }
        });
    }   
    else {
        navigate('/');
    }
    
   
   }, [slug,navigate]);

   return  posts? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
   ) : null

}