import { useForm } from 'react-hook-form';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';

export default function NewsletterForm() {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [email, setEmail] = useState();
  const [openNewsletterNotification, setOpenNewsletterNotification] =
    useState(false);
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
      if (process.env.NEXT_PUBLIC_HOST === 'production') {
        response = await fetch('/api/admin/audience', {
          method: 'POST',
          body: JSON.stringify(data),
          type: 'application/json',
        });
        console.log(response);
      }
      console.log(`${data.email} subscribed to mailchimp!`)

      setIsSubmitting(false);
      setHasSubmitted(true);
      document.getElementById('newsletterform').reset();
      setEmail(' ');
      setOpenNewsletterNotification(true);
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
      <Transition.Root show={openNewsletterNotification} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpenNewsletterNotification}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Subscribed!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Thank you for signing up for our newsletter! You will be the first in line for news and updates from the KEI Reports team! 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                    onClick={() => setOpenNewsletterNotification(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
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
            className="block w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime focus:ring-offset-gray-900"
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
