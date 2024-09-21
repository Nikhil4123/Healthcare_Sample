import React from 'react';
import '../App.css'; 

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="container">
      

      <div className="list-section">
        <h2 className="list-title">Healthcare Services</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">
                <strong>Price:</strong> ${service.price}
              </p>
              <div className="button-group">
                <button onClick={() => onEdit(index)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => onDelete(index)} className="delete-button">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
