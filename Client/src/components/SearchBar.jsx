import React, { useState } from 'react';

const SearchBar = ({ onSearch, categories, onCategoryFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      <select 
        value={selectedCategory} 
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          onCategoryFilter(e.target.value);
        }}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;