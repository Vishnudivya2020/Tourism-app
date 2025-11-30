import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./Packages.module.css";

export default function BookingForm() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    packageType: "",
    price: "",
    cities: "",
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    startDate: "",
    endDate: "",
  });
    
  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.fullName.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !formData.startDate ||
    !formData.endDate
  ) {
    alert("⚠️ Please fill all required fields before submitting.");
    return;
  }

  alert("🎉 Booking Confirmed Successfully!");

  // Reset only user-entered fields
  setFormData((prev) => ({
    ...prev,
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    startDate: "",
    endDate: "",
  }));
};


  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      packageType: params.get("packageType") || "",
      price: params.get("price") || "",
      cities: params.get("cities") || "",
    }));
  }, [search]);

 

  return (
    <div className="container mt-5 mb-5">
        <div >
            <i className="bi bi-arrow-left-circle"
            style={{
    fontSize: "28px",
    color: "#0d6efd",
    cursor: "pointer"
  }} onClick={()=>navigate("/Packages")}></i>
        </div>
      <div className="card shadow-lg p-4" style={{ borderRadius: "20px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Travel Booking Form
        </h2>

        {/* PACKAGE INFO */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Package Name</label>
            <input type="text" className="form-control" value={formData.packageType} readOnly />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Price (₹)</label>
            <input type="text" className="form-control" value={formData.price} readOnly />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Cities Included</label>
            <input type="text" className="form-control" value={formData.cities} readOnly />
          </div>
        </div>

        <hr className="my-4" />

        {/* PERSONAL INFO */}
        <h4 className="text-secondary fw-bold mb-3">Personal Information</h4>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@gmail.com"
                required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="9876543210"
                required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">No. of Travelers</label>
            <input
              type="number"
              className="form-control"
              min="1"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
            />
          </div>
        </div>

        {/* TRIP DETAILS */}
        <h4 className="text-secondary fw-bold mt-4 mb-3">Trip Details</h4>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Travel Start Date</label>
            <input
              type="date"
              className="form-control"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Travel End Date</label>
            <input
              type="date"
              className="form-control"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
             required
           />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center mt-4">
          <button className="btn btn-primary px-5 py-2 fw-bold" 
          onClick={handleSubmit}
          style={{ borderRadius: "10px" }}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
