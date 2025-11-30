
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./signup.module.css"; 

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("SignUp successfully!");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>

        <div className={styles.formData}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className={styles.formData}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className={styles.formData}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={styles.formData}>
          <label>User Type</label>
          <input
            type="text"
            name="type"
            onChange={handleChange}
            placeholder="Enter your type (User/Admin)"
            required
          />
        </div>

        <input type="submit" className={styles.button} value="Sign Up" />
      </form>

      <p className={styles.signupText}>
        Already have account?{" "}
        <Link to="/login" className={styles.signupLink}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
