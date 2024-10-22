"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import contactSvg from '../assets/contactUs/contact.svg';
import Input from './Input';

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    proposal: '',
    companyName: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message.');
        setSuccess('');
        return;
      }

      const newContact = await response.json();
      setSuccess('Message sent successfully!');
      setError('');
      // Optionally reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        proposal: '',
        companyName: '',
      });
    } catch (error) {
      setError('An unexpected error occurred.');
      setSuccess('');
    }
  };

  return (
    <>
      <h2 className='mt-8 text-center font-bold text-4xl'>Contact Us</h2>
      <section className='grid md:grid-cols-2 my-2 md:my-4 py-8 gap-4 relative'>
        <div className="flex justify-center items-center">
          <Image src={contactSvg} alt="Contact Us" width={550} height={500} className='w-3/4 md:w-2/3 '/>
        </div>

        <div className='w-3/4 sm:max-w-md mx-auto'>
  <form className='flex flex-col' onSubmit={handleSubmit}>
    {/* Name Input */}
    <Input
      id="name"
      label="Name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      className="w-full" // Ensure full width on mobile
    />

    {/* Email Input */}
    <Input
      id="email"
      label="Email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full"
    />

    {/* Phone No. Input */}
    <Input
      id="phone"
      label="Phone No."
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      className="w-full"
    />

    {/* Proposal Textarea */}
    <div className="relative mb-2">
      <textarea
        id="proposal"
        value={formData.proposal}
        onChange={handleChange}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-gray-900
          bg-[#F4EFE8]
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          border
          border-[#F4EFE8]
          focus:border-blue-500
          transition-all
          placeholder-transparent
          h-40
        "
        placeholder=" "
      />
      <label
        className="
          absolute
          text-md
          ml-4
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
        htmlFor="proposal"
      >
        Proposal
      </label>
    </div>

    {/* Company Name Input */}
    <Input
      id="companyName"
      label="Company Name"
      type="text"
      value={formData.companyName}
      onChange={handleChange}
      className="w-full"
    />

    {/* Submit Button */}
    <button type="submit" className='bg-[#F69E19] hover:bg-[#f69e19d9] text-white font-medium py-2.5 px-5 rounded-lg w-full'>
      Send Message
    </button>

    {/* Display Success or Error Message */}
    {error && <p className="text-red-500 mt-2">{error}</p>}
    {success && <p className="text-green-500 mt-2">{success}</p>}
  </form>
</div>

      </section>
    </>
  );
};

export default EmailSection;
