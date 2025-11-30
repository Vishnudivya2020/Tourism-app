import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../HomePage/Navbar/nav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    alert("📩 Message sent! We will contact you soon.");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    
    <div className="container mt-5 mb-5">
        <div>
        <Navbar />
      </div>

      <h1 className="text-center mb-4 fw-bold text-primary">Contact Us</h1>

      <div className="row g-4">
        
        {/* LEFT SIDE CONTACT INFO */}
        <div className="col-md-5">
          <div className="card shadow p-4" style={{ borderRadius: "20px" }}>
            <h4 className="text-secondary fw-bold mb-3">Get in Touch</h4>

            <p className="mb-3">
              <i className="bi bi-geo-alt-fill text-danger"></i> &nbsp;
              <strong>Address:</strong> Chennai, Tamil Nadu, India
            </p>

            <p className="mb-3">
              <i className="bi bi-envelope-fill text-primary"></i> &nbsp;
              <strong>Email:</strong> support@travelworld.com
            </p>

            <p className="mb-3">
              <i className="bi bi-telephone-fill text-success"></i> &nbsp;
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <hr />

            {/* GOOGLE MAP (Optional) */}
            <div className="map-container mt-3">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075830323!2d80.06892547649243!3d13.047487556841379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d25d5a7ca3%3A0xa2dcb9a75c0cb6c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1690200842617!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ borderRadius: "15px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="col-md-7">
          <div className="card shadow p-4" style={{ borderRadius: "20px" }}>
            <h4 className="text-secondary fw-bold mb-3">Send a Message</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary px-2 py-2 fw-bold"
                style={{ borderRadius: "10px" ,width:"330px"}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

