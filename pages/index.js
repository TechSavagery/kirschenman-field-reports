/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
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
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { getAllPostsForHome } from '../lib/api';
import { imageBuilder } from '../lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import markdownStyles from '../components/markdown-styles.module.css';
import FAQ from '../components/faq';
import Head from 'next/head';
import NewsletterForm from '../components/newsletter-form';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Reports', href: '/dashboard' },
];
const features = [
  {
    name: 'All Produce. All Locations.',
    description:
      'Get field data for any of our produce at any of our locations in one place instantly as our team submits daily quality reports',
    icon: CloudUploadIcon,
  },
  {
    name: 'Real Time Quality Assesment',
    description:
      'All of our locations are leveraged on a unified data entry system to ensure you receive reports as soon as they are submitted.',
    icon: LockClosedIcon,
  },
  {
    name: 'Daily Reports',
    description:
      'Our reports will bring you specific data for each produce such as size, taste, appearance, as well as supporting images and reporter comments.',
    icon: RefreshIcon,
  },
  {
    name: 'Quick Contact',
    description:
      'Leave messages directly on the report to start a conversation with our sales team. We will reach out and ensure your team has all the info you need.',
    icon: ShieldCheckIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
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

export default function Example({ allPosts, preview }) {
  const posts = allPosts.slice(0, 3);
  return (
    <div className="bg-white">
      <Head>
        <meta
          name="description"
          content={`Field Report Data from Kirschenman Enterprises Inc.`}
        />
        <title>Kirschenman Field Reports</title>
      </Head>

      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
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
                  href="mailto:info@keiproduce.com"
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
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
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a
                      href="/dashboard/grapes"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-lime rounded-full">
                        Live Data!
                      </span>
                      <span className="ml-4 text-sm">
                        Visit our grapes report dashboard!
                      </span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Kirschenman Field Reports</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-lime sm:pb-5">
                        Live Produce Data
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Quality reports that capture the key details of the
                      produce from the team at KEI. Data from field-to-phone to
                      keep you up to date with our current offerings.
                    </p>
                    <div className="mt-10 sm:mt-12">
                     <NewsletterForm/>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                    <a id="desktop-screenshot" href={`/reports/${posts[0].slug}`}>
                      <img
                        className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src="/kei-reports-desktop.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with screenshot */}
          <div className="relative bg-transparent pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-base font-semibold tracking-wider text-lime uppercase">
                  Live Field Data
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  From our Fields to your Hands
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  Access data from any device and stay informed of current
                  trends and availability for our produce. Send reports to
                  colleagues seamlessly and create communications.
                </p>
              </div>
              <div className="justify-items-center mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <img
                  className="rounded-lg"
                  src="https://www.kirschenman.com/wp-content/uploads/2021/10/kei-reports-mobile-detail.png"
                  alt=""
                />
                <img
                  className="rounded-lg"
                  src="https://www.kirschenman.com/wp-content/uploads/2021/10/mobile-report-list.png.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <div
            id="features"
            className="relative bg-white py-16 sm:py-24 lg:py-32"
          >
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-lime rounded-md shadow-lg">
                              <feature.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="pb-16 bg-lime lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://www.kirschenman.com/wp-content/uploads/2017/03/IMG_8033-scaled.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        We want to take you with us directly to the produce!
                        Each report will have plenty of images and key data to
                        easily measure the quality of the batch.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Reporting Staff
                      </p>
                      <p className="text-base font-medium text-cyan-100">
                        Kirschenman Enterprises Inc{' '}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Blog section */}
          <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-lime uppercase">
                  Just In
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Latest Reports
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  We are busy collecting data! Take a look at some of the fruit
                  we are packaging up today. Get in touch with our sales
                  department for more info!
                </p>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                {posts.map((post) => (
                  <div
                    key={post._id}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <a href={`/reports/${post.slug}`}>
                        <img
                          className="h-48 w-full object-cover"
                          src={imageBuilder(post.coverImage)
                            .width(384)
                            .height(192)
                            .url()}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-lime">
                          <a
                            href={`/reports/${post.slug}`}
                            className="hover:underline"
                          >
                            {post.label.name}
                          </a>
                        </p>
                        <a
                          href={`/reports/${post.slug}`}
                          className="block mt-2"
                        >
                          <p className="text-xl font-semibold text-gray-900">
                            {post.lot ? post.lot.name : 'N/A'}
                            {' - '}
                            {post.variety ? post.variety.name : 'N/A'}
                            {' - '}
                            {post.week
                              ? post.week.toUpperCase().replace('EEK-', '')
                              : 'N/A'}
                            {' - '}
                            {new Date(post.date).getFullYear()}
                          </p>
                          <p className="mt-3 text-md text-gray-500 sm:mt-4">
                            <BlockContent
                              href={`/reports/${post.slug}`}
                              blocks={post.body}
                              projectId={
                                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                              }
                              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                              className={markdownStyles.markdown}
                            />{' '}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href={post.reporter.slug}>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={post.reporter.picture}
                              alt={post.reporter.name}
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a
                              href={post.reporter.slug}
                              className="hover:underline"
                            >
                              {post.reporter.name}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <p>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: '2-digit',
                                day: '2-digit',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="pb-5" id="faq">
            <FAQ id="faq" />
          </div>

          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://www.kirschenman.com/wp-content/uploads/2020/07/covid-farmingguidelines.jpg"
                alt=""
              />
              <div aria-hidden="true" className="absolute inset-0" />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We’re here to help
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  Our team is dedicated to providing you with up to date
                  information about our products to make your purchasing
                  decision and process as seamless as possible. If you have any
                  questions fell free to reach out to our team!
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="tel:661-201-7744"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Give Us a Call!
                      <PhoneIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
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

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
