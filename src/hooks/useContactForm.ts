import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { emailjsConfig } from '../data/portfolioData';

export function useContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, e.currentTarget, emailjsConfig.publicKey)
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          toast.success('Message sent successfully!');
          form.current?.reset();
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Email error:', error.text);
          toast.error('Failed to send message. Try again!');
        }
      );
  };

  return { form, formData, handleChange, isFormValid, sendEmail };
}
