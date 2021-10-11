/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, PlusSmIcon } from '@heroicons/react/solid';
import ReportCard from '../../components/report-card';
import { getAllPostsForHome } from '../../lib/api';
import { useSession } from 'next-auth/client';
import PasswordProtect from '../../components/password-protect';
import Head from 'next/head';
const navigation = {
  categories: [
    {
      id: 'data',
      name: 'Data',
      featured: [
        {
          name: '',
          href: '#',
          imageSrc:
            'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: '',
          href: '#',
          imageSrc:
            'https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'reports',
          name: 'Reports',
          items: [
            { name: 'Grape', href: '#' },
            { name: 'Potato', href: '#' },
            { name: 'Watermelon', href: '#' },
            { name: 'Stone Fruit', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'FAQ', href: '/faq' },
  ],
};
const breadcrumbs = [{ id: 1, name: 'Dashboard', href: '#' }];
const filters = [
  {
    id: 'label',
    name: 'Label',
    options: [
      { value: 'new-yorker', label: 'New Yorker', checked: false },
      { value: 'ultimate', label: 'Ultimate', checked: false },
      { value: 'sun-power', label: 'SunPower', checked: true },
      { value: 'marvin-boy', label: 'Marvin Boy', checked: false },
      { value: 'roosters-pride', label: 'Roosters Pride', checked: false },
      { value: 'flying-tiger', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'variety',
    name: 'Variety',
    options: [
      { value: 'candy-sanp', label: 'Candy Snap', checked: false },
      { value: 'autumn-king', label: 'Autumn King', checked: false },
      { value: 'sweet-celebration', label: 'Sweet Celebration', checked: true },
      { value: 'milano', label: 'Milano', checked: false },
      { value: 'great-green', label: 'Great Green', checked: false },
    ],
  },
  {
    id: 'lot',
    name: 'Lot',
    options: [
      { value: '2l', label: 'Delis', checked: false },
      { value: '6l', label: 'Edison', checked: false },
      { value: '12l', label: 'Kosakeff', checked: false },
      { value: '18l', label: 'REDR', checked: false },
      { value: '20l', label: 'Peck', checked: false },
      { value: '40l', label: 'SEC11', checked: true },
    ],
  },
  {
    id: 'week',
    name: 'Week',
    options: [
      { value: 'week-38', label: 'Week 38', checked: false },
      { value: 'week-39', label: 'Week 39', checked: false },
      { value: 'week-40', label: 'Week 40', checked: false },
      { value: 'week-41', label: 'Week 41', checked: false },
      { value: 'week-42', label: 'Week 42', checked: false },
      { value: 'week-43', label: 'Week 43', checked: false },
    ],
  },
];
const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ allPosts, preview }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [session, loading] = useSession();
  const allReports = allPosts.slice(0, 12);

  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <PasswordProtect />;
  }
  return (
    <div className="bg-white">
      <Head>
        <meta
          name="description"
          content={`Field Report Data from Kirschenman Enterprises Inc.`}
        />
        <title>Kirschenman Field Reports - Dashboard</title>
      </Head>
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-lime border-lime'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="pt-10 pb-8 px-4 space-y-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute z-10 inset-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 p-2 block text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <p className="bg-lime h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            KEI Field Reports Now Available!
          </p>

          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="/dashboard">
                    <span className="sr-only">Workflow</span>
                    <img
                      className=""
                      src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                      alt=""
                      style={{ height: '75px' }}
                    />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-lime text-lime'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute z-10 top-full inset-x-0 text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-center object-cover"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-6 block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute z-10 inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <a
                                                    href={item.href}
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        <div className="border-b border-gray-200">
          <nav
            aria-label="Breadcrumb"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <ol role="list" className="flex items-center space-x-4 py-4">
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-4 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      viewBox="0 0 6 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-auto text-gray-300"
                    >
                      <path
                        d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Home
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div className="py-[20px] border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Grape Reports
            </h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <a href="/dashboard/grapes">
                <button
                  href="/dashboard/grapes"
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
                >
                  View All
                </button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {allReports.map((report) => (
              <ReportCard
                label={report.label}
                variety={report.variety}
                lot={report.lot}
                week={report.week}
                inspectionDate={report.date}
                mainImage={report.coverImage}
                slug={report.slug}
                reporter={report.reporter}
                content={report.body}
                reporter={report.reporter}
              />
            ))}
          </div>
          <div className="py-[20px] border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Potato Reports
            </h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
              >
                View All
              </button>
            </div>
          </div>
          <div className="py-[20px] border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Stone Fruit Reports
            </h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
              >
                View All
              </button>
            </div>
          </div>
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
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
