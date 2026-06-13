import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Your exact live access key from your Web3Forms dashboard
          access_key: "55e4fc27-3503-4b53-8e22-eaf585a9f06d", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const resData = await response.json();

      if (resData.success) {
        setStatus('Message sent successfully! ✓');
        setFormData({ name: '', email: '', message: '' }); // Reset fields
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to connect to email server.');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white max-w-5xl mx-auto border-t border-gray-100">
      
      {/* Header layout block matching your original structure */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Get In <span className="text-[#800020]">Touch</span>
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Have a question or want to work together? Reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        
        {/* Left column social details block */}
        <div className="md:col-span-2 space-y-6 text-xs text-gray-500">
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-1">Email</h4>
            <a href="mailto:akshayatambe80@gmail.com" className="hover:text-black transition-colors">
              akshayatambe80@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-1">Phone</h4>
            <p className="text-gray-500">+91-8149481610</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-1">LinkedIn</h4>
            <a href="https://linkedin.com/in/akshaya-tambe" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              linkedin.com/in/akshaya-tambe
            </a>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider mb-1">GitHub</h4>
            <a href="https://github.com/akshayatambe" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              github.com/akshayatambe
            </a>
          </div>
        </div>

        {/* Right column core operational interactive submission container */}
        <div className="md:col-span-3 bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full text-xs p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-400 text-gray-800 transition-all"
              />
            </div>

            <div>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full text-xs p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-400 text-gray-800 transition-all"
              />
            </div>

            <div>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                className="w-full text-xs p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-400 text-gray-800 transition-all resize-none"
              />
            </div>

            {/* Notification alert response line updates */}
            {status && (
              <p className={`text-[11px] font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-gray-500'}`}>
                {status}
              </p>
            )}

            <button 
              type="submit"
              className="w-full text-xs bg-[#800020] hover:bg-[#600018] text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 uppercase tracking-wider shadow-sm"
            >
              <svg className="w-3 h-3 transform rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}