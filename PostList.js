import React, {useState } from 'react';
import Post from './Post';

const PostList = ({ post, addPost, deletePost, updatePost, votePost }) => 
{
    const [newPostContent, setNewPostContent] = useState([]);

    const handleAddPost = () => {
        const newPost = {
            id: Math.random(),
            content: newPostContent,
            votes: 0,
            comments: []
        };
        addPost(newPost);
        setNewPostContent('');
    }
    return (
        <>
        <div>
            <div>
                <textare value = {newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
                <button> onClick={handleAddPost}Add Post</button>
            </div>
            <Post key={post.id} post={post} deletePost={deletePost} updatePost={updatePost} votePost={votePost} />
        </div>
        </>
    );    
};


export default PostList;


