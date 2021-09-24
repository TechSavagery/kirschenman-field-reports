import { PhoneIcon, EmailIcon } from '@heroicons/react/solid';
export default function DashboardFooter() {
  return (
    <div className="max-w-full bg-gray-50">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Need more info?</span>
          <span className="block text-indigo-600">
            Contact us for the latest sales info and availability.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PhoneIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Call Us
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              <EmailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
