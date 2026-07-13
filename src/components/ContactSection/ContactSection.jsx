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

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    alert("Form submitted successfully!");

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
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <Button type="submit">
            Send Message
          </Button>

        </form>

      </div>
    </section>
  );
}

export default ContactSection;