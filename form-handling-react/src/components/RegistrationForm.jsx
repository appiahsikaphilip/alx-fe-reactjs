// src/components/RegistrationForm.jsx
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ plural 'errors'

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) newErrors.username = "Username is required"; // ✅ individual checks
    if (!email) newErrors.email = "Email is required";          // ✅ individual checks
    if (!password) newErrors.password = "Password is required";// ✅ individual checks

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // ✅ now uses setErrors
      return;
    }

    setErrors({});
    console.log("Submitted data:", { username, email, password });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
