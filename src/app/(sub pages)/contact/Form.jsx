"use client";

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const formItemsClassName = "w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg";

export default function Form() {
  const ref = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <form 
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input 
        type="text" 
        placeholder="Name" 
        {...register("name", {required: true, maxLength: 80})} 
        className={formItemsClassName}
      />
      <input 
        type="email" 
        placeholder="Email" 
        {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
        className={formItemsClassName}
      />
      <textarea 
        placeholder="Message" 
        {...register("message", {required: true, max: 1000, min: 20})} 
        className={formItemsClassName}
      />

      <input 
        value="send your message"
        type="submit" 
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid text-foreground
          hover:shadow-glass-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
      />
    </form>
  );
}