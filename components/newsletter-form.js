import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewsletterForm() {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch('/api/admin/audience', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      });
      console.log(response);
      setIsSubmitting(false);
      setHasSubmitted(true);
      document.getElementById('newsletterform').reset();
      setEmail(' ');
    } catch (err) {
      setFormData(err);
    }
  };

  function handleChange(e) {
    setEmail(e.target.value);
  }

  if (isSubmitting) {
    //Return loader possibly
  }
  if (hasSubmitted) {
    //return success modal
  }

  return (
    <form
      id="newsletterform"
      className="sm:max-w-xl sm:mx-auto lg:mx-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:flex">
        <div className="min-w-0 flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            {...register('email', { required: true })}
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="block w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          >
            Join Mailing List
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
        Stay up to date with our latest reporting news and gain access to early
        access features. By providing your email, you agree to our{' '}
        <a href="#" className="font-medium text-white">
          terms or service
        </a>
        .
      </p>
    </form>
  );
}
