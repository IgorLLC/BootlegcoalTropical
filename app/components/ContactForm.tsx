'use client';

import { useState } from 'react';

type FormMessage = {
  type: 'success';
  content: string;
} | {
  type: 'error';
  content: string;
} | {
  type: 'none';
  content: null;
};

interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  message: FormMessage;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const INITIAL_STATUS: FormStatus = {
  submitted: false,
  submitting: false,
  message: { type: 'none', content: null },
};

const SUCCESS_MESSAGE = 'Message sent successfully!';
const ERROR_MESSAGE = 'An error occurred. Please try again later.';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<FormStatus>(INITIAL_STATUS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({
        submitted: true,
        submitting: false,
        message: { type: 'success', content: SUCCESS_MESSAGE },
      });
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        message: { type: 'error', content: ERROR_MESSAGE },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Your message (optional)
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            status.submitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {status.submitting ? 'Sending...' : 'Submit'}
        </button>
      </div>

      {status.message.type !== 'none' && (
        <div
          className={`mt-4 p-4 rounded-md ${
            status.message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}
        >
          {status.message.content}
        </div>
      )}
    </form>
  );
}
