import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n2daesa", // Replace with your EmailJS service ID
        "template_iyc389g", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "hamnahamna639@gmail.com", // The recipient email
        },
        "bCsdcjDFLaSlZooet" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          We'd love to hear from you! Reach out to us for any inquiries or to discuss your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Form</h2>
          {status && <p className="text-green-600 mb-4">{status}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Details</h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Address:</strong> Dubai
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">+971 56 655 4049</a>
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Email:</strong> <a href="mailto:info@designservices.com" className="text-blue-500 hover:underline">Fw.technicalservices@gmail.com</a>
            </p>
            <p className="text-lg text-gray-600">
              <strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
            </p>
          </div>

          <div className="mt-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1635376813445!2d144.95373541568124!3d-37.81720974212047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57792b7b487a899!2s123+Design+Avenue%2C+Melbourne+VIC%2C+Australia!5e0!3m2!1sen!2sus!4v1601855569859!5m2!1sen!2sus"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
