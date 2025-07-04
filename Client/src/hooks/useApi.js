import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCall = async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getPosts = () => apiCall('/posts');
  const getPost = (id) => apiCall(`/posts/${id}`);
  const createPost = (post) => apiCall('/posts', { method: 'POST', body: JSON.stringify(post) });
  const updatePost = (id, post) => apiCall(`/posts/${id}`, { method: 'PUT', body: JSON.stringify(post) });
  const deletePost = (id) => apiCall(`/posts/${id}`, { method: 'DELETE' });
  const getCategories = () => apiCall('/categories');
  const createCategory = (category) => apiCall('/categories', { method: 'POST', body: JSON.stringify(category) });

  return { loading, error, getPosts, getPost, createPost, updatePost, deletePost, getCategories, createCategory };
};