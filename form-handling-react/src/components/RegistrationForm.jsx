import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.username.trim()) tempErrors.username = "Username is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!formData.password.trim())
      tempErrors.password = "Password is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Controlled Registration Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-2 mb-2"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded mt-2"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
