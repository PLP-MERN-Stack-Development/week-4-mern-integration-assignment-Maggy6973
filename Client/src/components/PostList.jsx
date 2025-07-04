import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, getPosts } = useApi();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };
    
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      <Link to="/create" className="btn btn-primary">Create New Post</Link>
      
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="posts">
          {posts.map(post => (
            <div key={post._id} className="post-card">
              <h3>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
              </h3>
              <p className="post-meta">
                By {post.author} | {post.category?.name} | {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/edit/${post._id}`} className="btn btn-secondary">Edit</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;