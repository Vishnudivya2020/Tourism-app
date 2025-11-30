import React from "react";
import styles from "./Packages.module.css";
import Navbar from "../HomePage/Navbar/nav";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    packageType: "Basic",
    cities: ["Chennai", "Goa", "Jaipur"],
    price: "₹12,999",
    description: "A budget-friendly package covering popular destinations with essential facilities like travel and stay."
  },
  {
    packageType: "Standard",
    cities: ["Delhi", "Kerala", "Kashmir"],
    price: "₹24,999",
    description: "A standard package offering comfortable hotels, guided tours, and meals for a hassle-free trip."
  },
  {
    packageType: "Premium",
    cities: ["Paris", "Dubai", "Maldives"],
    price: "₹49,999",
    description: "A luxury package with premium resorts, exclusive sightseeing, flight tickets, and 24/7 assistance."
  }
];

const Packages = () => {

  const navigate = useNavigate();

  const goToBooking = (pkg) => {
   navigate(`/booking?packageType=${pkg.packageType}&price=${pkg.price}&cities=${pkg.cities.join(",")}`);


  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.packageContainer}>
        <h1 className={styles.heading}>Travel Packages</h1>
        <div className={styles.packageGrid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.packageCard}>
              <h2 className={styles.packageTitle}>{pkg.packageType} Package</h2>

              <p className={styles.cities}>
                <strong>Cities:</strong> {pkg.cities.join(", ")}
              </p>

              <p className={styles.price}>
                <strong>Price:</strong> {pkg.price}
              </p>

              <p className={styles.description}>{pkg.description}</p>
              <button className={styles.btn} onClick={() => goToBooking(pkg)}>
                Book Now
              </button>


            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Packages;
