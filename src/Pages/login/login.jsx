import React, { useState } from 'react';
import styles from "./login.module.css";
import { Link,useNavigate } from 'react-router-dom';

function Login(){
  // const [issignup, setissignup] = useState(false);
    const [Input ,setInput] =useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name ,value} =e.target;
        setInput((prev) =>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if(
            savedUser && 
            savedUser.email === Input.email &&
            savedUser.password === Input.password
        ) {
            alert("Login successful!")
            navigate("/");
        }else {
            alert("Invalid email or password!");
        }
    };

    return (
        <>
        <div className={styles.home}>
        
      </div>
      <div className={styles.formContainer}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formBox}>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={Input.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formBox}>
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={Input.password}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" className={styles.button} value="Submit" />
        </form>
         <p className={styles.registerText}>
          Don't have account?{" "}
          <Link to="/signup" className={styles.registerLink}>
            Sign up
          </Link>
        </p> 
      </div>

    </>
    )


}

export default Login;