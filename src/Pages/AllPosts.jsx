import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components/index';
import appwriteSerivce from '../appwrite/config';
export default function AddPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        appwriteSerivce.getPosts([]).then((res) => {
            if (res) {
                setPosts(res.documents);
            }
        }
        );
    }, [])
    return (
        <div className="py-8">
            <Container>

                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-1/4 p-2'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
