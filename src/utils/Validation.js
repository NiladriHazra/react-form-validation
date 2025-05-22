export const validateForm = (values) => {
  const errors = {};

  // First Name validation
  if (!values.firstName.trim()) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First Name must be at least 2 characters";
  }

  // Last Name validation
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Last Name must be at least 2 characters";
  }

  // Username validation
  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters";
  } else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
    errors.username = "Username can only contain letters, numbers, and underscores";
  }

  // Email validation
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }

  // Country Code validation
  if (!values.countryCode) {
    errors.countryCode = "Country Code is required";
  } else if (!/^\+[0-9]{1,4}$/.test(values.countryCode)) {
    errors.countryCode = "Invalid country code format (e.g., +91)";
  }

  // Phone Number validation
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  } else if (!/^[0-9]{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be 10 digits";
  }

  // Country validation
  if (!values.country) {
    errors.country = "Country is required";
  }

  // City validation
  if (!values.city && values.country) {
    errors.city = "City is required";
  }

  // PAN Number validation - Format: ABCDE1234F (5 letters followed by 4 numbers and then 1 letter)
  if (!values.panNumber) {
    errors.panNumber = "PAN Number is required";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.panNumber)) {
    errors.panNumber = "Invalid PAN Number format (e.g., ABCDE1234F)";
  }

  // Aadhar Number validation - 12 digits, can be grouped as 1234 5678 9012
  if (!values.aadharNumber) {
    errors.aadharNumber = "Aadhar Number is required";
  } else {
    const aadharWithoutSpaces = values.aadharNumber.replace(/\s/g, '');
    if (!/^[0-9]{12}$/.test(aadharWithoutSpaces)) {
      errors.aadharNumber = "Aadhar Number must be 12 digits";
    }
  }

  return errors;
};