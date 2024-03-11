import React, {useState } from 'react';
import CommentList from './CommentList';


const Post = ({post, deletePost, updatePost, votePost}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(post.content);

    const handleUpdatePost = () => {
        updatePost({ ...post, content: editedContent});
        setIsEditing(false);
    };

    return (
        <>
        <div>
            {isEditing?(
                <div>
                    <textarea value = {editedContent} onChange={(e) => setEditedContent(e.target.value)} />
                    <button onClick={handleUpdatePost}>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ): (
                <div>
                    <p>{post.content}</p>
                    <p>Votes: {post.votes}</p>
                    <button onClick={ () => votePost(post.id, true)}>Upvote</button>
                    <button onClick={ () => votePost(post.id, false)}>Downvote</button>
                    <button onClick={ () => setIsEditing(true)}>Edit</button>
                    <button onClick={ () => deletePost(post.id)}>Delete</button>
                    <CommentList comments={post.comments} postId={post.id}/>
                </div>
            )
        }
        </div></>
    )

}

export default Post;