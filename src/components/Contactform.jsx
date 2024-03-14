import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" {...register('name', { required: true })} autoComplete="name" />
          {errors.name && <span className="error-message">This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register('email', { required: true })} autoComplete="email" />
          {errors.email && <span className="error-message">This field is required</span>}
        </div>
        <div>
          <label htmlFor="question">Question</label>
          <textarea name="question" id="question" {...register('question')} autoComplete="off" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

