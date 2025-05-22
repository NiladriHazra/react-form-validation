import React, { useState } from 'react';

const Password = ({ 
  value, 
  onChange, 
  onBlur, 
  error, 
  label = "Password",
  name = "password",
  required = true,
  placeholder = "Enter your password"
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showStrengthIndicator, setShowStrengthIndicator] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: '', color: '' };
    
    let score = 0;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      special: /[@$!%*?&]/.test(password)
    };
    
    score = Object.values(checks).filter(Boolean).length;
    
    if (score <= 2) {
      return { strength: score, text: 'Weak', color: '#e74c3c' };
    } else if (score <= 3) {
      return { strength: score, text: 'Fair', color: '#f39c12' };
    } else if (score <= 4) {
      return { strength: score, text: 'Good', color: '#f1c40f' };
    } else {
      return { strength: score, text: 'Strong', color: '#27ae60' };
    }
  };

  const passwordStrength = getPasswordStrength(value);

  const handleFocus = () => {
    setShowStrengthIndicator(true);
  };

  const handleBlur = (e) => {
    setShowStrengthIndicator(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}{required && <span className="required">*</span>}
      </label>
      <div className="password-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
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
      
     
      {showStrengthIndicator && value && (
        <div className="password-strength">
          <div className="strength-bar">
            <div 
              className="strength-fill" 
              style={{ 
                width: `${(passwordStrength.strength / 5) * 100}%`,
                backgroundColor: passwordStrength.color
              }}
            />
          </div>
          <span 
            className="strength-text"
            style={{ color: passwordStrength.color }}
          >
            {passwordStrength.text}
          </span>
        </div>
      )}
      
     
      {showStrengthIndicator && (
        <div className="password-requirements">
          <div className="requirement-text">Password must contain:</div>
          <ul className="requirements-list">
            <li className={value && value.length >= 8 ? 'met' : ''}>
              At least 8 characters
            </li>
            <li className={value && /[a-z]/.test(value) ? 'met' : ''}>
              One lowercase letter
            </li>
            <li className={value && /[A-Z]/.test(value) ? 'met' : ''}>
              One uppercase letter
            </li>
            <li className={value && /\d/.test(value) ? 'met' : ''}>
              One number
            </li>
            <li className={value && /[@$!%*?&]/.test(value) ? 'met' : ''}>
              One special character (@$!%*?&)
            </li>
          </ul>
        </div>
      )}
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Password;