import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';
import logo from './eqp/plusicon.png'; // Adjust the path to your logo image

const App = () => {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addService = (newService) => {
    if (editingIndex !== null) {
      const updatedServices = services.map((service, index) =>
        index === editingIndex ? newService : service
      );
      setServices(updatedServices);
      setEditingIndex(null);
    } else {
      setServices([...services, newService]);
    }
  };

  const editService = (index) => {
    setEditingIndex(index);
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="app">
      <h1 className="header-title">
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo" />
          Healthcare Service Manager
        </a>
      </h1>
      <div className="container">
        <ServiceForm
          onSubmit={addService}
          existingService={editingIndex !== null ? services[editingIndex] : null}
          resetEditing={() => setEditingIndex(null)}
        />
        <ServiceList
          services={services}
          onEdit={editService}
          onDelete={deleteService}
        />
      </div>
    </div>
  );
};

export default App;
