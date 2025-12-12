import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const FormikForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setSubmitSuccess(false);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Formik form submitted:', values);
      setSubmitSuccess(true);
      resetForm();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      setStatus('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Registration (Formik)</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, touched, errors }) => (
          <Form style={styles.form}>
            {/* Username Field */}
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={
                  touched.username && errors.username
                    ? { ...styles.input, ...styles.inputError }
                    : styles.input
                }
                disabled={isSubmitting}
              />
              <ErrorMessage name="username" component="span" style={styles.error} />
            </div>

            {/* Email Field */}
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={
                  touched.email && errors.email
                    ? { ...styles.input, ...styles.inputError }
                    : styles.input
                }
                disabled={isSubmitting}
              />
              <ErrorMessage name="email" component="span" style={styles.error} />
            </div>

            {/* Password Field */}
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={
                  touched.password && errors.password
                    ? { ...styles.input, ...styles.inputError }
                    : styles.input
                }
                disabled={isSubmitting}
              />
              <ErrorMessage name="password" component="span" style={styles.error} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={
                isSubmitting
                  ? { ...styles.button, ...styles.buttonDisabled }
                  : styles.button
              }
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

            {/* Error Status Message */}
            {status && (
              <div style={styles.errorStatus}>{status}</div>
            )}
          </Form>
        )}
      </Formik>
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
    marginTop: '4px',
    display: 'block'
  },
  errorStatus: {
    color: '#e74c3c',
    fontSize: '14px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f8d7da',
    borderRadius: '4px',
    border: '1px solid #f5c6cb'
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
    backgroundColor: '#27ae60',
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

export default FormikForm;