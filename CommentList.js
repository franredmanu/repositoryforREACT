import React, {useState } from 'react';

const CommentList = ({comments, postId }) => {
    const [newComment, setNewComment] = useState('');
    const addComment = () => {
        console.log(`Adding comment to post ${postId}: ${newComment}`);
        setNewComment('');
    };
    
    return (
        <>
        <div>
            {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
            ))}
            <div>
                <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                <button onClick={addComment}> Add Comment </button>
            </div>
        </div></>
    );
};

export default CommentList;