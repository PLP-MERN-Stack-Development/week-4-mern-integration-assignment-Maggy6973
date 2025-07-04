import React, { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { loading, error, apiCall } = useApi();

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const data = await apiCall(`/posts/${postId}/comments`);
      setComments(data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const comment = await apiCall(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content: newComment, author: 'Anonymous' })
      });
      setComments([...comments, comment]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  return (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows="3"
        />
        <button type="submit" disabled={loading}>Add Comment</button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
            <small>{new Date(comment.createdAt).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;