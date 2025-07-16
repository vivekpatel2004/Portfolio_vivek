import React, { useState } from 'react'
import axios from 'axios';

const ContactUs = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  // ✅ Use full API URL in production
  const API_BASE = import.meta.env.PROD
    ? 'https://portfolio-sr2z.onrender.com'
    : '/api';

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await axios.post(`${API_BASE}/contact`, formDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus({ success: true, message: "Message sent successfully" });
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error(error.message);
      setStatus({ success: false, message: "Something went wrong, please try again!" });
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section id="contact_us" className="flex flex-col items-center">
      <h1 className="text-5xl mb-5 font-bold font-palanquin">Contact</h1>
      <p className="text-slate-400 mb-5 font-montserrat">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <div data-aos="fade-up" className="flex flex-col w-[700px] max-lg:w-[500px] max-sm:w-[100%] bg-black p-5 rounded-xl">
        <h1 className="text-2xl mb-5 font-bold font-montserrat">Email Me</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input type="email" className="input" placeholder="Email" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)} required />
          <input type="text" className="input" placeholder="Name" value={formDetails.name} onChange={(e) => onFormUpdate("name", e.target.value)} required />
          <input type="text" className="input" placeholder="Subject" value={formDetails.subject} onChange={(e) => onFormUpdate("subject", e.target.value)} />
          <textarea className="input" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)} required />
          <button className="w-full bg-blue-400 py-2 rounded-xl hover:bg-blue-500 transition-colors my-2">
            {buttonText}
          </button>
          {status.message && (
            <div>
              <p className={status.success ? "text-green-500" : "text-red-700"}>{status.message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
