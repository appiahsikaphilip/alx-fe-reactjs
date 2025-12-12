import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';

function App() {
  const [activeForm, setActiveForm] = useState('controlled');

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Form Handling Demo</h1>
        <p>Compare controlled components vs Formik implementation</p>
      </header>

      <div className="form-toggle">
        <button
          className={activeForm === 'controlled' ? 'active' : ''}
          onClick={() => setActiveForm('controlled')}
        >
          Controlled Components
        </button>
        <button
          className={activeForm === 'formik' ? 'active' : ''}
          onClick={() => setActiveForm('formik')}
        >
          Formik
        </button>
      </div>

      <div className="form-container">
        {activeForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
      </div>

      <footer className="app-footer">
        <div className="comparison">
          <h3>Key Differences:</h3>
          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>Controlled Components</h4>
              <ul>
                <li>Manual state management with useState</li>
                <li>Custom validation logic</li>
                <li>More boilerplate code</li>
                <li>Full control over behavior</li>
              </ul>
            </div>
            <div className="comparison-item">
              <h4>Formik</h4>
              <ul>
                <li>Automated state management</li>
                <li>Yup schema validation</li>
                <li>Less boilerplate code</li>
                <li>Built-in utilities</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;