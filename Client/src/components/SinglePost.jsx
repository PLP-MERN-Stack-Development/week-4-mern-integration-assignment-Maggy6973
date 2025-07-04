import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { loading, error, getPost, deletePost } = useApi();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        navigate('/');
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="single-post">
      <Link to="/" className="btn btn-secondary">← Back to Posts</Link>
      
      <article>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <p>By {post.author} | {post.category?.name} | {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="post-actions">
          <Link to={`/edit/${post._id}`} className="btn btn-primary">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </article>
    </div>
  );
};

export default SinglePost;