// src/pages/Contact.js
import React from "react";
import axios from "axios";
import "../style/Contact.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = async (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;

    // 1. Save to PostgreSQL using Node.js API
    try {
      await axios.post("http://localhost:5000/api/send-message", {
        name,
        email,
        message,
      });
      alert("✅ Message saved and email window opened!");
    } catch (err) {
      console.error("❌ Error saving to DB:", err);
      alert("❌ Failed to save message.");
    }

    // 2. Open default mail client
    window.location.href =
      "mailto:sivaneshwari29@outlook.com?subject=" +
      encodeURIComponent(name) +
      "&body=" +
      encodeURIComponent(message);
  };

  render() {
    return (
      <section className="contact-section">
        <div className="contact-container">
          {/* Map */}
          <div className="map-box">
            <iframe
              title="Sangavi Location"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info */}
          <h1 className="contact-title">📞 Contact Us</h1>
          <div className="contact-info">
            <p><strong>🏬 Store:</strong> Sangavi – Sarees & Collections</p>
            <p><strong>📍 Address:</strong> No.123, Bazaar Street, Salem-1</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p><strong>📱 WhatsApp:</strong> <a href="https://wa.me/919876543210">Chat on WhatsApp</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:sangavistore@gmail.com">sangavistore@gmail.com</a></p>
            <p><strong>🕒 Working Hours:</strong> Mon–Sun, 9:30 AM – 9:00 PM</p>
          </div>

          {/* Mail Form */}
          <div className="heading">
            <h1>Mail Form</h1>
            <div className="container" id="mailme">
              <div className="row">
                <div className="col-sm-8 offset-md-2">
                  <form onSubmit={this.validateForm}>
                    <div className="form-group form-group-lg">
                      <label htmlFor="name"><strong>Name</strong></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group form-group-lg">
                      <label htmlFor="email"><strong>Email</strong></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group form-group-lg">
                      <label htmlFor="message"><strong>Feedback</strong></label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Share Your Feedback"
                        className="form-control"
                        rows="5"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
