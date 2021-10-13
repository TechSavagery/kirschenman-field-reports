/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Head from 'next/head'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'FAQ', href: '/#faq' },
];
const footerNavigation = {
  reports: [
    { name: 'Grapes', href: '/dashboard/grapes' },
    { name: 'Potato', href: '' },
    { name: 'Watermelon', href: '#' },
    { name: 'Stone Fruits', href: '#' },
  ],
  company: [
    { name: 'About Us', href: 'https://www.kirschenman.com/about' },
    { name: 'Website', href: 'https://www.kirschenman.com/' },
    {
      name: 'Blog',
      href: 'https://www.kirschenman.com/category/current-trends/',
    },
    { name: 'Email: info@keiproduce.com', href: 'mailto:info@keiproduce.com' },
    { name: 'Phone: (661)201-7744', href: 'tel:661-201-7744' },
    { name: 'Locations', href: 'https://www.kirschenman.com/contact/' },
  ],
  produceInfo: [
    {
      name: 'Grapes',
      href: 'https://www.kirschenman.com/products/grapes/',
    },
    {
      name: 'Stone Fruits',
      href: 'https://www.kirschenman.com/products/stone-fruits/',
    },
    {
      name: 'Watermelon',
      href: 'https://www.kirschenman.com/products/watermelons/',
    },
    {
      name: 'Potato',
      href: 'https://www.kirschenman.com/products/potatoes/',
    },
  ],
};

export default function Example() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta
          name="description"
          content={`Field Report Data from Kirschenman Enterprises Inc.`}
        />
        <title>Kirschenman Field Reports - Login Failed</title>
      </Head>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                    className="pt-[10px]"
                    src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                    alt=""
                    style={{ height: '75px', paddingTop: '8px' }}
                  />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime hover:bg-lime"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                <img
                    className="pt-[10px]"
                    src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                    alt=""
                    style={{ height: '75px', paddingTop: '8px' }}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="mailto:info@keiproduce.com?subject=Request%20for%20KEI%20Field%20Report%20Access&body=Hello%20KEI%20Staff%2C%0A%0AI%20would%20like%20access%20to%20the%20KEI%20Field%20Report%20Data.%20Here%20is%20my%20info%20below%3A%0A%0AName%3A%20%0ACompany%3A%0AEmail%3A%0APhone%3A%0A"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium hover:bg-indigo-700"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-lime sm:text-5xl">
                Access Denied
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Incorrect Username/Password
                  </h1>
                  <p className="mt-1 text-base text-gray-500">
                    Please check your credentials and try again.
                  </p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <a
                    href="#"
                    onClick={() => {
                      window.history.back();
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
                  >
                    Back to Login
                  </a>
                  <a
                    href="mailto:info@keiproduce.com?subject=Request%20for%20KEI%20Field%20Report%20Access&body=Hello%20KEI%20Staff%2C%0A%0AI%20would%20like%20access%20to%20the%20KEI%20Field%20Report%20Data.%20Here%20is%20my%20info%20below%3A%0A%0AName%3A%20%0ACompany%3A%0AEmail%3A%0APhone%3A%0A"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-lime bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
        F
      </main>

      <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                <img
                  className="pt-[10px]"
                  src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                  alt=""
                  style={{ height: '65px' }}
                />
              </div>

              {/* Sitemap sections */}
              <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Reports
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.reports.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Produce Info
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.produceInfo.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              {/* <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-6 text-sm text-gray-500">
                  Early access feature invitations sent to your inbox.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-lime border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Kirschenman Enterprises, Inc.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
