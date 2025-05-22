import React from 'react';

const FormSummary = ({ formData, onBack }) => {
  if (!formData) {
    return null;
  }

  return (
    <div className="summary-container">
      <h1>Registration Successful!</h1>
      <div className="summary-content">
        <h2>Your Information</h2>
        <div className="summary-item">
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </div>
        <div className="summary-item">
          <strong>Username:</strong> {formData.username}
        </div>
        <div className="summary-item">
          <strong>Email:</strong> {formData.email}
        </div>
        <div className="summary-item">
          <strong>Phone Number:</strong> {formData.countryCode} {formData.phoneNumber}
        </div>
        <div className="summary-item">
          <strong>Location:</strong> {formData.city}, {formData.country}
        </div>
        <div className="summary-item">
          <strong>PAN Number:</strong> {formData.panNumber}
        </div>
        <div className="summary-item">
          <strong>Aadhar Number:</strong> {formData.aadharNumber}
        </div>
      </div>
      <button onClick={onBack} className="back-button">Back to Form</button>
    </div>
  );
};

export default FormSummary;