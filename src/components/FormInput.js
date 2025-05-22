import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required,
  placeholder = ''
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}{required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormInput;