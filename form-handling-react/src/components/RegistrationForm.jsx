import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Registration (Controlled Components)</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Username Field */}
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={errors.username ? {...styles.input, ...styles.inputError} : styles.input}
            disabled={isSubmitting}
          />
          {errors.username && (
            <span style={styles.error}>{errors.username}</span>
          )}
        </div>

        {/* Email Field */}
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={errors.email ? {...styles.input, ...styles.inputError} : styles.input}
            disabled={isSubmitting}
          />
          {errors.email && (
            <span style={styles.error}>{errors.email}</span>
          )}
        </div>

        {/* Password Field */}
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={errors.password ? {...styles.input, ...styles.inputError} : styles.input}
            disabled={isSubmitting}
          />
          {errors.password && (
            <span style={styles.error}>{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          style={isSubmitting ? {...styles.button, ...styles.buttonDisabled} : styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>

        {/* Success Message */}
        {submitSuccess && (
          <div style={styles.success}>
            Registration successful! Welcome aboard.
          </div>
        )}

        {/* General Error Message */}
        {errors.submit && (
          <div style={styles.error}>{errors.submit}</div>
        )}
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontWeight: '600',
    color: '#555',
    fontSize: '14px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    transition: 'border-color 0.3s',
    outline: 'none'
  },
  inputError: {
    borderColor: '#e74c3c'
  },
  error: {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px'
  },
  success: {
    color: '#27ae60',
    fontSize: '14px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#d4edda',
    borderRadius: '4px',
    border: '1px solid #c3e6cb'
  },
  button: {
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px'
  },
  buttonDisabled: {
    backgroundColor: '#95a5a6',
    cursor: 'not-allowed'
  }
};

export default RegistrationForm;