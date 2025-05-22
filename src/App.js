import React, { useState } from 'react';
import Form from './components/Form';
import FormSummary from './components/FormSummary';
import './index.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowSummary(true);
  };

  const handleBackToForm = () => {
    setShowSummary(false);
  };

  return (
    <div className="app-container">
      {!showSummary ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <FormSummary formData={formData} onBack={handleBackToForm} />
      )}
    </div>
  );
}

export default App;