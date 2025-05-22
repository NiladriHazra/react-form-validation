import React, { useState } from 'react';

const PasswordInput = ({ value, onChange, onBlur, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <label htmlFor="password">
        Password<span className="required">*</span>
      </label>
      <div className="password-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? 'input-error' : ''}
        />
        <button 
          type="button" 
          className="password-toggle"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default PasswordInput;