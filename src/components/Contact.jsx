import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is just a placeholder)");
    console.log(formData);

    // Reset form (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">CONTACT</h1>

      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-teal-700 text-white font-semibold py-2 px-6 rounded hover:bg-teal-800"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
