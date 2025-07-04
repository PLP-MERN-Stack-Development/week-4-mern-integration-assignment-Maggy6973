import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    author: ''
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const { loading, error, getPost, createPost, updatePost, getCategories, createCategory } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData);
        
        if (isEditing) {
          const postData = await getPost(id);
          setFormData({
            title: postData.title,
            content: postData.content,
            category: postData.category._id,
            author: postData.author
          });
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    
    fetchData();
  }, [id, isEditing]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      if (isEditing) {
        await updatePost(id, formData);
      } else {
        await createPost(formData);
      }
      navigate('/');
    } catch (err) {
      console.error('Error saving post:', err);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      try {
        const category = await createCategory({ name: newCategory });
        setCategories([...categories, category]);
        setFormData({ ...formData, category: category._id });
        setNewCategory('');
      } catch (err) {
        console.error('Error creating category:', err);
      }
    }
  };

  return (
    <div className="post-form">
      <h1>{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Add New Category</label>
          <div className="category-input">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New category name"
            />
            <button type="button" onClick={handleAddCategory}>Add</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows="10"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
          </button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
      
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
};

export default PostForm;