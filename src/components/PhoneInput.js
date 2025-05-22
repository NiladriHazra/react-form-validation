import React from 'react';

const PhoneInput = ({
  countryCode,
  phoneNumber,
  onChange,
  onBlur,
  countryCodeError,
  phoneNumberError
}) => {
  return (
    <div className="form-group">
      <label>
        Phone Number<span className="required">*</span>
      </label>
      <div className="phone-input-container">
        <div className="country-code-container">
          <input
            type="text"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="+91"
            className={countryCodeError ? 'input-error' : ''}
          />
          {countryCodeError && <div className="error-message">{countryCodeError}</div>}
        </div>
        <div className="phone-number-container">
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="9876543210"
            className={phoneNumberError ? 'input-error' : ''}
          />
          {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;