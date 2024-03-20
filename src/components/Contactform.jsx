import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable to track form submission

  const onSubmit = (data, e) => {
    console.log(data);
    // Reset the form fields
    e.target.reset();
    // Set isSubmitted to true to display the success message
    setIsSubmitted(true);
    // Optionally, you can perform additional actions here, such as sending the form data to a server
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      {/* Render the success message */}
      {isSubmitted ? (
        <p className="text-green-500 mb-4">Your message has been sent. Thank you!</p>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input type="text" name="name" id="name" {...register('name', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" autoComplete="name" />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input type="email" name="email" id="email" {...register('email', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" autoComplete="email" />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="question" className="block font-semibold mb-1">Question</label>
          <textarea name="question" id="question" {...register('question')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" autoComplete="off" />
        </div>
        <button type="submit" className="bg-[#fa5e10] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;