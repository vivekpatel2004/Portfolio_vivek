import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const CONTACT = {
    email: "vivekpatel9026@gmail.com",
    phone: "+91 9026121033",
    location: "Lucknow, India",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const API_BASE = import.meta.env.PROD
    ? 'https://portfolio-sr2z.onrender.com'
    : '/api';

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const copyToClipboard = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await axios.post(`${API_BASE}/contact`, formDetails, {
        headers: { "Content-Type": "application/json" },
      });

      // Success UI updates
      setStatus({ success: true, message: "Message sent successfully!" });
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      setTimeout(() => setStatus(null), 2000); // Hide message after 2 sec

    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "Something went wrong! Try again." });
      setButtonText("Send");

      setTimeout(() => setStatus(null), 2000);
    }
  };

  return (
    <section id="contact_us" className="flex flex-col items-center">
      <h1 className="text-5xl mb-5 font-bold font-palanquin">Contact</h1>
      <p className="text-slate-400 mb-5 font-montserrat">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className="flex gap-8 w-[900px] max-lg:w-[700px] max-md:w-[100%] max-md:flex-col">

        {/* LEFT BOX */}
        <div className="bg-black p-5 rounded-xl w-[40%] max-md:w-[100%] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white font-montserrat">Contact Info</h2>

          {/* EMAIL */}
          <div className="relative">
            <p
              onClick={() => copyToClipboard(CONTACT.email, "email")}
              className="text-slate-300 font-montserrat hover:text-blue-300 cursor-pointer"
            >
              <span className="text-blue-300 font-bold">Email:</span><br />
              {CONTACT.email}
            </p>
            {copiedField === "email" && (
              <span className="absolute -top-4 left-0 text-xs text-green-400">Copied!</span>
            )}
          </div>

          {/* PHONE */}
          <div className="relative">
            <p
              onClick={() => copyToClipboard(CONTACT.phone, "phone")}
              className="text-slate-300 font-montserrat hover:text-blue-300 cursor-pointer"
            >
              <span className="text-blue-300 font-bold">Phone:</span><br />
              {CONTACT.phone}
            </p>
            {copiedField === "phone" && (
              <span className="absolute -top-4 left-0 text-xs text-green-400">Copied!</span>
            )}
          </div>

          {/* LOCATION */}
          <div className="relative">
            <p
              onClick={() => copyToClipboard(CONTACT.location, "location")}
              className="text-slate-300 font-montserrat hover:text-blue-300 cursor-pointer"
            >
              <span className="text-blue-300 font-bold">Location:</span><br />
              {CONTACT.location}
            </p>
            {copiedField === "location" && (
              <span className="absolute -top-4 left-0 text-xs text-green-400">Copied!</span>
            )}
          </div>
        </div>

        {/* RIGHT BOX (FORM) */}
        <div className="bg-black p-5 rounded-xl w-[60%] max-md:w-[100%] flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white font-montserrat">Send Message</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input className="input" type="email" placeholder="Email" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)} required />
            <input className="input" type="text" placeholder="Name" value={formDetails.name} onChange={(e) => onFormUpdate("name", e.target.value)} required />
            <input className="input" type="text" placeholder="Subject" value={formDetails.subject} onChange={(e) => onFormUpdate("subject", e.target.value)} />
            <textarea className="input" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)} required />

            <button className="w-full bg-blue-400 py-2 rounded-xl hover:bg-blue-500 transition-colors my-2">
              {buttonText}
            </button>

            {status && (
              <p className={`text-center text-sm ${status.success ? "text-green-400" : "text-red-500"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
