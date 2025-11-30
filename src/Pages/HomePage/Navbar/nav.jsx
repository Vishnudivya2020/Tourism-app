import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import earth from "../../../assets/earth.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      
     
      

      {/* Hamburger button */}
      <button 
        className={styles.hamburger} 
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Navigation links */}
      <nav className={`${styles.navbar} ${open ? styles.show : ""}`}>
        <Link className={styles.navItem} to="/">Home</Link>
        <Link className={styles.navItem} to="/Packages">Packages</Link>
        <Link className={styles.navItem} to="/Book">Booking</Link>
        <Link className={styles.navItem} to="/Gallery">Gallery</Link>
        <Link className={styles.navItem} to="/Review">Review</Link>
        <Link className={styles.navItem} to="/Contact">Contact</Link>
        <Link className={styles.navItem} to="/login">Login</Link>
      </nav>

    </header>
  );
};

export default Navbar;
