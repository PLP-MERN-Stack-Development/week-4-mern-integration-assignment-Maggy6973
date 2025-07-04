import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload, currentImage }) => {
  const [preview, setPreview] = useState(currentImage);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      setPreview(data.url);
      onImageUpload(data.url);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-upload">
      <label htmlFor="image">Featured Image</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" />
        </div>
      )}
      
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default ImageUpload;