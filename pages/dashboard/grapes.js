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
  pages: [
    { name: 'HOME', href: 'https://www.kirschenman.com/' },
    { name: 'PRODUCTS', href: 'https://www.kirschenman.com/products/' },
    { name: 'ABOUT', href: 'https://www.kirschenman.com/about/' },
    { name: 'CONTACTS', href: 'https://www.kirschenman.com/contact/' },
  ],
  categories: [
    {
      id: 'reports',
      name: 'REPORTS',
      sections: [
        {
          id: 'produce',
          name: 'Produce',
          items: [
            { name: 'Grapes', href: '/dashboard/grapes' },
            { name: 'Potato', href: '' },
            { name: 'Watermelon', href: '#' },
            { name: 'Stone Fruits', href: '#' },
          ],
        },
        {
          id: 'lots',
          name: 'Lots (coming soon)',
          items: [
            { name: 'Grape Lots', href: '#' },
            { name: 'Potato Lots', href: '#' },
            { name: 'Watermelon Lots', href: '#' },
            { name: 'Stone Fruite Lots', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands (coming soon)',
          items: [
            { name: 'Grape Brands', href: '#' },
            { name: 'Potato Brands', href: '#' },
            { name: 'Watermelon Brands', href: '#' },
            { name: 'Stone Fruit Brands', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'info',
      name: 'INFO',
      sections: [
        {
          id: 'company',
          name: 'Company',
          items: [
            { name: 'About Us', href: 'https://www.kirschenman.com/about' },
            { name: 'Locations', href: 'https://www.kirschenman.com/contact/' },
            {
              name: 'Blog',
              href: 'https://www.kirschenman.com/category/current-trends/',
            },
          ],
        },
        {
          id: 'contact',
          name: 'Contact',
          items: [
            {
              name: 'Email: info@keiproduce.com',
              href: 'mailto:info@keiproduce.com',
            },
            { name: 'Phone: (661)201-7744', href: 'tel:661-201-7744' },
          ],
        },
        {
          id: 'produce-info',
          name: 'Produce Info',
          items: [
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
        },
      ],
    },
  ],
};
const breadcrumbs = [{ id: 1, name: 'Dashboard', href: '/dashboard' }];
const filters = [
  {
    id: 'label',
    name: 'Label',
    options: [
      { value: 'new-yorker', label: 'New Yorker', checked: false },
      { value: 'mr.-kk', label: 'Mr. KK', checked: false },
      { value: 'grapery', label: 'Grapery', checked: false },
      { value: 'marilyn', label: 'Marilyn', checked: false },
      { value: 'king-top', label: 'King Top', checked: false },
      { value: 'showtime', label: 'Showtime', checked: false },
      { value: 'joseph', label: 'Joseph', checked: false },
      { value: 'candy-store', label: 'Candy Store', checked: false },
      { value: 'shalom', label: 'Shalom', checked: false },
      { value: 'kings-crown', label: 'Kings Crown', checked: false },
      { value: 'dj-forry', label: 'DJ Forry', checked: false },
      { value: 'big-b-#2', label: 'Big B #2', checked: false },
      { value: 'kenny-jr.', label: 'Kenny Jr.', checked: false },
      { value: 'sun-diamonds', label: 'Sun Diamonds', checked: false },
      { value: 'golden-ox', label: 'Golden Ox', checked: false },
      { value: 'top-brass', label: 'Top Brass', checked: false },
      { value: 'illume', label: 'Illume', checked: false },
      { value: 'mc', label: 'MC', checked: false },
      { value: 'pandol', label: 'Pandol', checked: false },
      { value: 'sun-grape', label: 'Sun Grape', checked: false },
      { value: 'sundale', label: 'Sun Dale', checked: false },
      { value: 'columbine', label: 'Columbine', checked: false },
      { value: 'platinum-pack', label: 'Platinum Pack', checked: false },
      { value: 'pristine', label: 'Pristine', checked: false },
      { value: 'big-city', label: 'Big City', checked: false },
      { value: 'air-chief', label: 'Air Chief', checked: false },
      { value: 'big-b', label: 'Big B', checked: false },
      { value: 'patricia', label: 'Patricia', checked: false },
      { value: 'ultimate', label: 'Ultimate', checked: false },
      { value: 'sunpower', label: 'SunPower', checked: true },
      { value: 'supergrape', label: 'Supergrape', checked: false },
      { value: 'marvin-boy', label: 'Marvin Boy', checked: false },
      { value: 'roosters-pride', label: 'Roosters Pride', checked: false },
      { value: 'flying-tiger', label: 'Flying Tiger', checked: false },
    ],
  },
  {
    id: 'variety',
    name: 'Variety',
    options: [
      { value: 'candy-snap', label: 'Candy Snap', checked: false },
      { value: 'timco', label: 'Timco', checked: false },
      { value: 'milano', label: 'Milano', checked: false },
      { value: 'red-globe', label: 'Red Globe', checked: false },
      { value: 'sweet-globe', label: 'Sweet Globe', checked: false },
      { value: 'pristine', label: 'Pristine', checked: false },
      { value: 'sweet-sapphire', label: 'Sweet Sapphire', checked: false },
      { value: 'candy-hearts', label: 'Candy Hearts', checked: false },
      { value: 'autumn-crisp', label: 'Autumn Crisp', checked: false },
      { value: 'sugar-crunch', label: 'Sugar Crunch', checked: false },
      { value: 'flame', label: 'Flame', checked: false },
      { value: 'krissy', label: 'Krissy', checked: false },
      { value: 'allison', label: 'Allison', checked: false },
      { value: 'adora', label: 'Adora', checked: false },
      { value: 'ivory', label: 'Ivory', checked: false },
      { value: 'summer-royal', label: 'Summer Royal', checked: false },
      { value: 'autumn-royal', label: 'Autumn Royal', checked: false },
      { value: 'sugraone', label: 'Sugraone', checked: false },
      { value: 'luisco', label: 'Luisco', checked: false },
      { value: 'candy-drop', label: 'Candy Drop', checked: false },
      { value: 'jack-salute', label: 'Jack Salute', checked: false },
      { value: 'candy-snap', label: 'Candy Snap', checked: false },
      { value: 'scarlet-royal', label: 'Scarlet Royal', checked: false },
      { value: 'autumn-king', label: 'Autumn King', checked: false },
      { value: 'sweet-celebration', label: 'Sweet Celebration', checked: true },
      { value: 'great-green', label: 'Great Green', checked: false },
    ],
  },
  {
    id: 'lot',
    name: 'Lot',
    options: [
      { value: 'murray', label: 'Murray', checked: false },
      { value: 'sp-green', label: 'SP Green', checked: false },
      { value: 'laut', label: 'Laut', checked: false },
      { value: 'bridge', label: 'Bridge', checked: false },
      { value: 'wheatland', label: 'Wheatland', checked: false },
      { value: 'clarkson', label: 'Clarkson', checked: false },
      { value: 'fdr', label: 'FDR', checked: false },
      { value: 'alfonso', label: 'Alfonso', checked: false },
      { value: 'py', label: 'PY', checked: false },
      { value: 'redr', label: 'REDR', checked: false },
      { value: 'ave-64', label: 'Ave 64', checked: false },
      { value: 'blake', label: 'Blake', checked: false },
      { value: 'sp-black', label: 'SP Black', checked: false },
      { value: 'wbr', label: 'WBR', checked: false },
      { value: 'hill', label: 'Hill', checked: false },
      { value: '370', label: '370', checked: false },
      { value: 'valos', label: 'Valos', checked: false },
      { value: 'frontier', label: 'Frontier', checked: false },
      { value: 'sp-gold', label: 'SP Gold', checked: false },
      { value: 'berry', label: 'Berry', checked: false },
      { value: 'blue-liner', label: 'Blue Liner', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'sec11', label: 'SEC11', checked: false },
      { value: 'edison', label: 'Edison', checked: false },
      { value: 'harter', label: 'Harter', checked: false },
      { value: 'kosakeff', label: 'Kosakeff', checked: false },
      { value: 'delis', label: 'Delis', checked: false },
      { value: 'fth', label: 'Peck', checked: false },
      { value: '109828', label: '109828', checked: false },
      { value: 'blanc', label: 'Blanc', checked: false },
      { value: 'dryer', label: 'Dryer', checked: false },
      { value: 'sun-grape', label: 'Sun Grape', checked: false },
    ],
  },
  {
    id: 'week',
    name: 'Week',
    options: [
      { value: 'week-30', label: 'Week 30', checked: false },
      { value: 'week-31', label: 'Week 31', checked: false },
      { value: 'week-32', label: 'Week 32', checked: false },
      { value: 'week-33', label: 'Week 33', checked: false },
      { value: 'week-34', label: 'Week 34', checked: false },
      { value: 'week-35', label: 'Week 35', checked: false },
      { value: 'week-36', label: 'Week 36', checked: false },
      { value: 'week-37', label: 'Week 37', checked: false },
      { value: 'week-38', label: 'Week 38', checked: false },
      { value: 'week-39', label: 'Week 39', checked: false },
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
  const [weekFilter, setWeekFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');
  const [lotFilter, setLotFilter] = useState('');
  const [varietyFilter, setVarietyFilter] = useState('');

  function setFilter(filter) {
    setWeekFilter(filter);
  }

  const allReports = allPosts;

  if (typeof window !== 'undefined' && loading) return null;

  return (
    <div className="bg-white">
      <Head>
        <meta
          name="description"
          content={`Grape Field Report Data from Kirschenman Enterprises Inc.`}
        />
        <title>Kirschenman Field Reports - Grapes</title>
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
          <p className="bg-keilime h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
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
                <div className="z-40 ml-4 flex lg:ml-0">
                  <a href="https://www.kirschenman.com/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="pt-[10px] z-40"
                      src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
                      alt=""
                      style={{ height: '135px', paddingTop: '8px' }}
                    />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
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
                                  <div className="max-w-7xl mx-auto px-8">
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
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
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
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
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (weekFilter) {
                      document.querySelector(
                        'input[name="week[]"]:checked'
                      ).checked = false;
                      setWeekFilter('');
                    }
                    if (lotFilter) {
                      document.querySelector(
                        'input[name="lot[]"]:checked'
                      ).checked = false;
                      setLotFilter('');
                    }
                    if (varietyFilter) {
                      document.querySelector(
                        'input[name="variety[]"]:checked'
                      ).checked = false;
                      setVarietyFilter('');
                    }
                    if (labelFilter) {
                      document.querySelector(
                        'input[name="label[]"]:checked'
                      ).checked = false;
                      setLabelFilter('');
                    }
                  }}
                  type="button"
                  className="inline-flex items-center ml-4 mr-4 pl-1 w-24 py-2 my-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
                >
                  Clear Filters
                </button>

                {/* mobile Filters */}
                <form className="mt-4">
                  {filters
                    .filter((filter) => {
                      return filter.id === 'week';
                    })
                    .sort()
                    .map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="pt-4 pb-2 px-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      onClick={() =>
                                        setWeekFilter(option.value)
                                      }
                                      defaultValue={option.value}
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  {filters
                    .sort()
                    .filter((filter) => {
                      return filter.id === 'variety';
                    })
                    .map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="pt-4 pb-2 px-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      onClick={() =>
                                        setVarietyFilter(option.value)
                                      }
                                      defaultValue={option.value}
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'label';
                    })
                    .sort()
                    .map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="pt-4 pb-2 px-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      onClick={() =>
                                        setLabelFilter(option.value)
                                      }
                                      defaultValue={option.value}
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'lot';
                    })
                    .sort()
                    .map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="pt-4 pb-2 px-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      onClick={() => setLotFilter(option.value)}
                                      defaultValue={option.value}
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <div className="relative bg-lime">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://www.kirschenman.com/wp-content/uploads/2022/06/grapes-phase-4.jpg"
              alt=""
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Grapes
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-indigo-100">
              Checkout out the latest field data of our reward winning grapes!
              We provide you with a variety of metrics to access to qualtiy of
              our products before you make a purchase decision.
            </p>
          </div>
        </div>

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
                  Grapes
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
              {/* Desktop Filters */}
              <div className="hidden lg:block">
                <button
                  onClick={() => {
                    if (weekFilter) {
                      document.querySelector(
                        'input[name="week[]"]:checked'
                      ).checked = false;
                      setWeekFilter('');
                    }
                    if (lotFilter) {
                      document.querySelector(
                        'input[name="lot[]"]:checked'
                      ).checked = false;
                      setLotFilter('');
                    }
                    if (varietyFilter) {
                      document.querySelector(
                        'input[name="variety[]"]:checked'
                      ).checked = false;
                      setVarietyFilter('');
                    }
                    if (labelFilter) {
                      document.querySelector(
                        'input[name="label[]"]:checked'
                      ).checked = false;
                      setLabelFilter('');
                    }
                  }}
                  type="button"
                  className="inline-flex items-center px-6 py-2 my-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
                >
                  Clear Filters
                </button>
                <form className="divide-y divide-gray-200 space-y-10">
                  {/* Week Filters */}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'week';
                    })
                    .map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : 'pt-10'}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-900">
                            {section.name}
                          </legend>
                          <div className="pt-6 space-y-3">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  onClick={() => setWeekFilter(option.value)}
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  cla
                                  className="week-filters h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  {/* Label Filters */}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'label';
                    })
                    .map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : 'pt-10'}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-900">
                            {section.name}
                          </legend>
                          <div className="pt-6 space-y-3">
                            {section.options
                              .sort((a, b) => {
                                return a.value - b.value;
                              })
                              .map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    onClick={() => setLabelFilter(option.value)}
                                    id={`${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    cla
                                    className="week-filters h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  {/* Variety Filters */}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'variety';
                    })
                    .sort()
                    .map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : 'pt-10'}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-900">
                            {section.name}
                          </legend>
                          <div className="pt-6 space-y-3">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  onClick={() => setVarietyFilter(option.value)}
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  cla
                                  className="week-filters h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  {/* Lot Filters */}
                  {filters
                    .filter((filter) => {
                      return filter.id === 'lot';
                    })
                    .map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : 'pt-10'}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-900">
                            {section.name}
                          </legend>
                          <div className="pt-6 space-y-3">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  onClick={() => setLotFilter(option.value)}
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  cla
                                  className="week-filters h-4 w-4 border-gray-300 rounded text-lime focus:ring-lime"
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {allReports
                  .filter((report) =>
                    weekFilter ? report.week === weekFilter : true
                  )
                  .filter((report) =>
                    lotFilter
                      ? report.lot.name.replace(/\s+/g, '-').toLowerCase() ===
                        lotFilter
                      : true
                  )
                  .filter((report) =>
                    varietyFilter
                      ? report.variety.name
                          .replace(/\s+/g, '-')
                          .toLowerCase() === varietyFilter
                      : true
                  )
                  .filter((report) =>
                    labelFilter
                      ? report.label.name.replace(/\s+/g, '-').toLowerCase() ===
                        labelFilter
                      : true
                  )
                  .map((report) => (
                    <ReportCard
                      label={report.label}
                      variety={report.variety}
                      lot={report.lot}
                      week={report.week}
                      inspectionDate={report.date}
                      mainImage={report.coverImage}
                      slug={report.slug}
                      content={report.body}
                      reporter={report.reporter}
                    />
                  ))}
              </div>
            </section>
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
