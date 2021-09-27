import {useState} from 'react'
import { useForm } from 'react-hook-form'

export default function Form ({_id}) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = async data => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
    <>
      <h3>Thanks for your comment!</h3>
      <ul>
        <li>
          Name: {formData.name} <br />
          Email: {formData.email} <br />
          Comment: {formData.comment}
        </li>
      </ul>
    </>)
  }

  return (
    // <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disabled>
    //   <input {...register("_id")} type="hidden" name="_id" value={_id} />
    //   <label className="block mb-5">
    //     <span className="text-gray-700">Name</span>
    //     <input name="name" {...register("name", {required: true})} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full" placeholder="John Appleseed"/>
    //   </label>
    //   <label className="block mb-5">
    //     <span className="text-gray-700">Email</span>
    //     <input name="email" type="email" {...register("email", {required: true})} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full" placeholder="your@email.com"/>
    //   </label>
    //   <label className="block mb-5">
    //     <span className="text-gray-700">Comment</span>
    //     <textarea {...register("comment", {required: true})} name="comment" className="shadow border rounded py-2 px-3  form-textarea mt-1 block w-full" rows="8" placeholder="Enter some long form content."></textarea>
    //   </label>
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}
    //   <input type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
    // </form>
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div className="relative max-w-xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Questions</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Want more info? Please fill out the form below and our team will reach out to you directly!
        </p>
      </div>
      <div className="mt-12">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-lime focus:border-lime border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-lime focus:border-lime border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="py-3 px-4 block w-full shadow-sm focus:ring-lime focus:border-lime border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-lime focus:border-lime border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-lime focus:border-lime rounded-md"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="py-3 px-4 block w-full pl-20 focus:ring-lime focus:border-lime border-gray-300 rounded-md"
                placeholder="+1 (555) 987-6543"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-lime focus:border-lime border border-gray-300 rounded-md"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}
