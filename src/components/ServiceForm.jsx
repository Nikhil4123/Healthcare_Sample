import React, { useState, useEffect } from 'react';
import '../App.css';

const ServiceForm = ({ onSubmit, existingService, resetEditing }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (existingService) {
      setName(existingService.name);
      setDescription(existingService.description);
      setPrice(existingService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [existingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      onSubmit({ name, description, price });
      resetEditing();
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill all the fields.');
    }
  };

  return (
    <div className="service-form">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServiceForm;
