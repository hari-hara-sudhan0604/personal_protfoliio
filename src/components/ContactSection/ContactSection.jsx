import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function validateForm() {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  } else if (formData.message.trim().length < 10) {
    newErrors.message =
      "Message should contain at least 10 characters.";
  }

  return newErrors;
}

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

function handleSubmit(event) {
  event.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSubmitted(false);
    return;
  }

  setErrors({});

  console.log(formData);

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    message: "",
  });
}

  return (
    <section className="section">
      <div className="container">

        <SectionTitle
          subtitle="Let's Connect"
          title="Contact Me"
        />
        {submitted && (
  <div className="success-message">
    ✅ Your message has been submitted successfully!
  </div>
)}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
                {errors.name && (
        <p className="error-message">
            {errors.name}
        </p>
        )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
  <p className="error-message">
    {errors.email}
  </p>
)}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
  <p className="error-message">
    {errors.message}
  </p>
)}
          <Button type="submit">
            Send Message
          </Button>

        </form>

      </div>
    </section>
  );
}

export default ContactSection;