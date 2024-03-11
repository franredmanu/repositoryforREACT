import React, { useState } from 'react';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([]);

    //Add a new post 
    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    //Delete a post 
    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    //Update a post 
    const updatePost = (updatedPost) => {
        setPosts(posts.maps(post => post.id === updatedPost.id ? updatedPost : post));
    };

    //Upvote or downvote a post 
    const votePost = (postId, isUpvote) => {
        setPosts(posts.map(post => {
            if(post.id === postId) {
                return { ...post, votes: isUpvote ? post.votes + 1 :post.votes - 1};
            }
            return post;
        }))
    }
    return (
      <div className="App">
          <PostList post={posts}  addPost={addPost} deletePost={deletePost}
          updatePost={updatePost} votePost={votePost} />
      </div>
      );
};


export default App