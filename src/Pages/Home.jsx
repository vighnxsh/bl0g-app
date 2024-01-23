import React,{useState,useEffect} from "react";
import {Container,PostCard} from "../components/index";
import appwriteService from "../appwrite/config";


export default function Home(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        });
    },[])

 if(posts.length === 0){
     return(
         <div className="py-8">
             <Container>
                <h1>Login to read Posts</h1>
             </Container>
         </div>
     )
 }
 return(
    <div className="py-8"> 
    <Container>
        <div className="flex flex-wrap">
            {posts.map((post)=>(
                <div key={post.$id} className="w-1/4 p-2">
                    <PostCard{...post}/>
                </div>
            ))}
        </div>
    </Container>
    </div>
    
 )

}