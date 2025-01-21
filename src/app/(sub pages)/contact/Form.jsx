"use client";

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const formItemsClassName = "w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg";

export default function Form() {
  const ref = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          limitRate: {
            throttle: 20000
          }
        }
      )
      .then(
        () => {
          toast.success("I have received your message, I'll get back to you soon.", { id: toastId });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("There was an error, please try again lator!", { id: toastId });
        },
      );
  };

  const onSubmit = data => {
    const { name, email, message } = data;
    const templateParams = {
      to_name: "Mohsen Tavakoli",
      from_name: name,
      reply_to: email,
      message: message
    };

    sendEmail(templateParams);
  };

  const renderView = () => {
    return (
      <>
        <Toaster richColors={true} />
        {renderForm()}
      </>
    );
  }

  const renderForm = () => {
    return (
      <form 
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
      >
        <input 
          type="text" 
          autoComplete="off"
          placeholder="Name" 
          {
            ...register("name", { 
              required: `This field is required!`, 
              maxLength: {
                value: 80,
                message: "Name must be less than 10 characters long!"
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long!"
              }
            })
          } 
          className={formItemsClassName}
        />
        {
          errors.name && (
            <span className='inline-block self-start text-accent'>{errors.name.message}</span>
          )
        }
        <input 
          type="email" 
          placeholder="Email" 
          {
            ...register("email", {
              required: `This field is required!`, 
              pattern: /^\S+@\S+$/i
            })
          } 
          className={formItemsClassName}
        />
        {
          errors.email && (
            <span className='inline-block self-start text-accent'>{errors.email.message}</span>
          )
        }
        <textarea 
          placeholder="Message" 
          {
            ...register("message", {
              required: `This field is required!`, 
              maxLength: {
                value: 1000,
                message: "Message must be less than 1000 characters long!"
              }, 
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters long!"
              }
            })
          } 
          className={formItemsClassName}
        />
        {
          errors.message && (
            <span className='inline-block self-start text-accent'>{errors.message.message}</span>
          )
        }
  
        <input 
          value="send your message"
          type="submit" 
          className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid text-foreground
            hover:shadow-glass-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
        />
      </form>
    );
  }
  
  return renderView();
}