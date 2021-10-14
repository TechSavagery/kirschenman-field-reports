import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import { signIn } from 'next-auth/client';
import * as ga from '../lib/ga';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#' },
  { name: 'Reports', href: '/dashboard' },
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
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function PasswordProtect({ allPosts, preview }) {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6 pb-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className=""
                      src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                      alt=""
                      style={{ height: '100px' }}
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  Contact Us
                </a>
                <a
                  href="/dashboard"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Dashboard
                </a>
              </div>
            </nav>
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
              className="z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className=""
                      src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                      alt=""
                      style={{ height: '100px' }}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime">
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
                      href="/dashboard"
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-lime text-white font-medium"
                    >
                      Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="relative py-16 bg-white">
            <div
              className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
              aria-hidden="true"
            />
            <div className="max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                  <div
                    className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                    aria-hidden="true"
                  />
                  <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img
                        className="object-cover object-center rounded-3xl shadow-2xl"
                        src="https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="relative bg-gray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                  <div
                    className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-900"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                    <svg
                      className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-900"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                  </div>
                  <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                    <h2
                      className="text-3xl font-extrabold text-white"
                      id="join-heading"
                    >
                      Explore our Field Data
                    </h2>
                    <p className="text-lg text-white">
                      If you have been granted access, please click the "Login"
                      button to enter your info. If you would like to be granted
                      access to our report data, please click the "Join" button
                      below!
                    </p>
                    <div class="flex space-x-4">
                      {' '}
                      <a
                        id="login-button"
                        href="#"
                        className="block w-full py-3 lg:px-20 sm:px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          signIn();
                        }}
                      >
                        Login
                      </a>
                      <a
                        onClick={() => {
                          if (process.env.NEXT_PUBLIC_HOST === 'production') {
                            ga.event({
                              action: 'join-request',
                              params: {},
                            });
                          }
                        }}
                        className="block w-full py-3 lg:px-20 sm:px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                        href="mailto:info@keiproduce.com?subject=Request%20for%20KEI%20Field%20Report%20Access&body=Hello%20KEI%20Staff%2C%0A%0AI%20would%20like%20access%20to%20the%20KEI%20Field%20Report%20Data.%20Here%20is%20my%20info%20below%3A%0A%0AName%3A%20%0ACompany%3A%0AEmail%3A%0APhone%3A%0A"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img
                  className=""
                  src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                  alt=""
                  style={{ height: '75px' }}
                />
                <p className="text-gray-500 text-base">
                  Leverage our daily produce data to empower your business
                  decision.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Reports
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.reports.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Company
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Produce Info
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.produceInfo.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; {new Date().getFullYear()} Kirschenman Enterprises, Inc.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
