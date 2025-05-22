import React, { useState } from 'react';
import FormInput from './FormInput';
import PasswordInput from './PasswordInput';
import PhoneInput from './PhoneInput';
import CountryCity from './CountryCity';
import { validateForm } from '../utils/Validation';

const Form = ({ onSubmit }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

   
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

   
    const fieldErrors = validateForm(values);
    if (fieldErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
    }
  };

  const handleCountryCityChange = (country, city) => {
    setValues(prev => ({
      ...prev,
      country,
      city
    }));

    
    if (errors.country || errors.city) {
      setErrors(prev => ({
        ...prev,
        country: '',
        city: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm(values);
    setErrors(formErrors);
    
    
    const allTouched = {};
    Object.keys(values).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(values);
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FormInput
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName ? errors.firstName : ''}
            required
            placeholder="Enter your first name"
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName ? errors.lastName : ''}
            required
            placeholder="Enter your last name"
          />
        </div>

        <div className="form-row">
          <FormInput
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username ? errors.username : ''}
            required
            placeholder="Enter username"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : ''}
            required
            placeholder="Enter your email"
          />
        </div>

        <PasswordInput
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password ? errors.password : ''}
        />

        <PhoneInput
          countryCode={values.countryCode}
          phoneNumber={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          countryCodeError={touched.countryCode ? errors.countryCode : ''}
          phoneNumberError={touched.phoneNumber ? errors.phoneNumber : ''}
        />

        <CountryCity
          selectedCountry={values.country}
          selectedCity={values.city}
          onChange={handleCountryCityChange}
          countryError={touched.country ? errors.country : ''}
          cityError={touched.city ? errors.city : ''}
        />

        <div className="form-row">
          <FormInput
            label="PAN Number"
            name="panNumber"
            value={values.panNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.panNumber ? errors.panNumber : ''}
            required
            placeholder="ABCDE1234F"
          />
          <FormInput
            label="Aadhar Number"
            name="aadharNumber"
            value={values.aadharNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.aadharNumber ? errors.aadharNumber : ''}
            required
            placeholder="1234 5678 9012"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;