import React from 'react';
import { useLocation } from 'react-router-dom';

const Display = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data to display</div>;
  }

  return (
    <div>
      <h1>Submitted Data</h1>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Description:</strong> {formData.description}</p>
      <p><strong>Price:</strong> {formData.price}</p>
      <p><strong>Quantity:</strong> {formData.quantity}</p>
    </div>
  );
};

export default Display;