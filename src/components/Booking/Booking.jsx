import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const vehicleTypeFromCar = location.state?.vehicleType || "";
  const carTypeFromCar = location.state?.carType || "";
  const previousForm = location.state?.formData || {};

  const [formData, setFormData] = useState({
    name: previousForm.name || "",
    phoneNumber: previousForm.phoneNumber || "",
    pickupLocation: previousForm.pickupLocation || "",
    dropLocation: previousForm.dropLocation || "",
    vehicleType: vehicleTypeFromCar ? `${vehicleTypeFromCar} (${carTypeFromCar})` : previousForm.vehicleType || "",
    pickupDateTime: previousForm.pickupDateTime || "",
    notes: previousForm.notes || "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCarSelected, setIsCarSelected] = useState(!!(vehicleTypeFromCar || previousForm.vehicleType));

  useEffect(() => {
    if (vehicleTypeFromCar) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: `${vehicleTypeFromCar} (${carTypeFromCar})`,
      }));
      setIsCarSelected(true);
    }
  }, [vehicleTypeFromCar, carTypeFromCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phoneNumber, pickupLocation, dropLocation, pickupDateTime, vehicleType } = formData;
    if (!name || !phoneNumber || !pickupLocation || !dropLocation || !pickupDateTime || !vehicleType) {
      return "Please fill in all required fields.";
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return "Enter a valid 10-digit Indian phone number.";
    }
    return "";
  };

  const buildWhatsAppMessage = () => `\n🚕 *New Booking Request* 🚕\nName: ${formData.name}\nPhone: ${formData.phoneNumber}\nPickup: ${formData.pickupLocation}\nDrop: ${formData.dropLocation}\nVehicle: ${formData.vehicleType}\nPickup Date & Time: ${formData.pickupDateTime}\nNotes: ${formData.notes || "None"}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage("❌ " + validationError);
      return;
    }

    const driverMessageParams = {
      ...formData,
      to_email: "gohelvivek0000@gmail.com",
    };

    const userReplyParams = {
      name: formData.name,
      user_email: formData.phoneNumber,
      title: "Your Booking Confirmation",
    };

    emailjs.send("service_x81hdl5", "template_l3y1iac", driverMessageParams, "1EUYac5PvrZJTLjGS")
      .then(() => console.log("Driver email sent!"))
      .catch((error) => console.error("Error sending to driver:", error));

    emailjs.send("service_x81hdl5", "template_ds9zdxl", userReplyParams, "1EUYac5PvrZJTLjGS")
      .then(() => {
        setSuccessMessage("✅ Booking sent to driver and confirmation sent to your email!");
        openWhatsAppLink(buildWhatsAppMessage());
      })
      .catch((error) => setErrorMessage("❌ Auto-reply failed: " + error.text));
  };

  const openWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919054891423?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const handleSelectVehicle = () => navigate("/vehicles", { state: { fromBooking: true, formData } });
  const handleChangeVehicle = () => {
    setIsCarSelected(false);
    setFormData((prev) => ({ ...prev, vehicleType: "" }));
  };

  return (
    <>
      <Helmet>
        <title>Book Your Ride | ChamundaCab</title>
        <meta name="description" content="Book a taxi easily with ChamundaCab's user-friendly form." />
      </Helmet>

      <div className="booking-form-section">
        <h2 className="booking-title">Book Your Ride</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          {isCarSelected ? (
            <>
              <input type="text" name="vehicleType" value={formData.vehicleType} readOnly required />
              <button type="button" onClick={handleChangeVehicle}>Change Car</button>
            </>
          ) : (
            <button type="button" onClick={handleSelectVehicle}>Select Vehicle</button>
          )}

          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
          <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pickup Location" required />
          <input type="text" name="dropLocation" value={formData.dropLocation} onChange={handleChange} placeholder="Drop Location" required />
          <input type="datetime-local" name="pickupDateTime" value={formData.pickupDateTime} onChange={handleChange} required />
          <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes (optional)" />
          <button type="submit">Send via WhatsApp and Email</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Booking;