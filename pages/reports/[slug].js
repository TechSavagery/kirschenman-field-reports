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
import { Fragment, useState, useRef, useEffect } from 'react';
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from '@headlessui/react';
import {
  MenuIcon,
  DownloadIcon,
  ShieldCheckIcon,
  ClipboardIcon,
  XIcon,
  MailIcon,
} from '@heroicons/react/outline';
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  GlobeIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/solid';
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api';
import BlockContent from '@sanity/block-content-to-react';
import markdownStyles from '../../components/markdown-styles.module.css';
import { imageBuilder } from '../../lib/sanity';
import ReactToPrint from 'react-to-print';
import { useSession } from 'next-auth/client';
import PasswordProtect from '../../components/password-protect';
import track, { useTracking } from 'react-tracking';
import Head from 'next/head';
import * as ga from '../../lib/ga';
import { useRouter } from 'next/router';
import blocksToHtml from '@sanity/block-content-to-html';

const navigation = {
  categories: [
    {
      id: 'reports',
      name: 'Reports',
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
      name: 'Info',
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
  pages: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'FAQ', href: '/faq' },
  ],
};
const product = {
  name: 'Marilyn - Timco - 09/28/2021',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt:
    'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  breadcrumbs: [
    { id: 1, name: 'Reports', href: '/dashboard' },
    { id: 2, name: 'Grapes', href: '/dashboard/grapes' },
  ],
  sizes: [
    { name: 'Lot', description: '' },
    {
      name: 'Inspection Date',
      description: '',
    },
    { name: 'Brix', description: '' },
    {
      name: 'Size',
      description: '',
    },
    { name: 'Type', description: '' },
    {
      name: 'Appearance',
      description: '',
    },
    {
      name: 'Flavor',
      description: '',
    },
    {
      name: 'Firmness',
      description: '',
    },
  ],
};
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

export default function Example({ post, morePosts, preview }) {
  const reportDownloadRef = useRef();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [session, loading] = useSession();
  const [sesh, setSesh] = useState(session);
  const { Track, trackEvent } = useTracking({ page: `report page example` });
  const [openDesc, setOpenDesc] = useState(false);
  const [openBrixDesc, setOpenBrixDesc] = useState(false);
  const [openTypeDesc, setOpenTypeDesc] = useState(false);
  const [openAppearanceDesc, setOpenAppearanceDesc] = useState(false);
  const [openFlavorDesc, setOpenFlavorDesc] = useState(false);
  const [openFirmnessDesc, setOpenFirmnessDesc] = useState(false);
  const router = useRouter();

  useEffect(() => {}, []);

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href.replace('?#', '');
    el.value = el.value.replace('?preview=true', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log({
      event: `report-copied`,
      client: `${session.user.email}`,
      url: `${window.location.href.replace('#', '')}`,
    });
    if (process.env.NEXT_PUBLIC_HOST === 'production') {
      ga.event({
        action: 'report-copied',
        params: {
          client: `${session.user.email}`,
          url: `${window.location.href.replace('#', '')}`,
        },
      });
    }
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 1500);
  }

  function toPlainText(blocks = []) {
    return (
      blocks
        // loop through each block
        .map((block) => {
          // if it's not a text block with children,
          // return nothing
          if (block._type !== 'block' || !block.children) {
            return '';
          }
          // loop through the children spans, and join the
          // text strings
          return block.children.map((child) => child.text).join('');
        })
        // join the paragraphs leaving split by two linebreaks
        .join('\n\n')
    );
  }

  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session && router.query.preview == null) {
    return <PasswordProtect />;
  }
  return (
    <Track>
      <div className="bg-gray-50">
        <Head>
          <meta name="description" content={toPlainText(post?.body)} />
          <title>
            KEI Reports: {post.lot.name}
            {' - '}
            {post.variety.name}
            {' - '}{' '}
            {post.week ? post.week.toUpperCase().replace('EEK-', '') : 'N/A'}
            {'-'}
            {new Date(post?.date).getFullYear()}
          </title>
          <meta
            property="og:image"
            content={imageBuilder(post.coverImage)
              .quality(75)
              .auto('format')
              .url()}
          />
          <meta
            property="og:title"
            content={
              'KEI Reports: ' +
              post?.lot.name +
              ' - ' +
              post?.variety.name +
              ' - ' +
              post.week.toUpperCase().replace('EEK-', '') +
              '-' +
              new Date(post?.date).getFullYear()
            }
          />
          <meta property="og:desciption" content={toPlainText(post?.body)} />
        </Head>
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
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
                    onClick={() => setOpen(false)}
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
          {post._id.includes('draft') ? (
            <div className="bg-yellow-400">
              <div className="max-w-7xl mx-auto py-3 lg:py-2 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="lg:visible md:visible w-0 flex-1 flex items-center sm:invisible">
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="hidden">
                        We announced a new product!
                      </span>
                      <span className="hidden md:inline">
                        Draft: Pending KEI Approval
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="md:mx-2 order-3 mt-2 lg:mx-2 flex-shrink-0 w-full sm:order-2 sm:mx-0 sm:mt-0 sm:w-auto">
                      <a
                        href=""
                        onClick={() => copy()}
                        className="flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white "
                      >
                        Copy Public Link
                      </a>
                    </div>
                    <div className="md:mx-2 sm:mx-0 order-3 mt-2 lg:mx-2 flex-shrink-0 w-full sm:mx-0 sm:order-2 sm:mt-0 sm:w-auto">
                      <a
                        href={`https://reports.kirschenman.com/studio/desk/post;${post?._id.replace(
                          'drafts.',
                          ''
                        )}`}
                        className="flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white "
                      >
                        Publish Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : router.query.preview && !post._id?.includes('draft') ? (
            <p className="bg-lime h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
              KEI Staff View
            </p>
          ) : (
            <p className="bg-lime h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
              Grape Field Data is now Live!
            </p>
          )}

          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
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

                <div className="ml-auto flex items-center">
                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <button
                      onClick={copy}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      {!copied ? (
                        <ClipboardIcon className="w-6 h-6" aria-hidden="true" />
                      ) : (
                        <CheckIcon
                          className="w-6 h-6 text-lime"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a
                      onClick={() => {
                        console.log({
                          event: `report-emailed`,
                          client: `${session.user.email}`,
                          url: `${window.location.href.replace('#', '')}`,
                        });
                        if (process.env.NEXT_PUBLIC_HOST === 'production') {
                          ga.event({
                            action: 'report-emailed',
                            params: {
                              client: `${session.user.email}`,
                              url: `${window.location.href.replace('#', '')}`,
                            },
                          });
                        }
                      }}
                      href={`mailto:?subject=KEI%20Report%3A%20${encodeURIComponent(
                        post.slug
                      )}&body=Hello%2C%20%0A%0APlease%20review%20the%20following%20report%3A%0A${window.location.href.replace(
                        '?#',
                        ''
                      )}%0A%0A%0AHere%20is%20the%20login%20info%20below%3A%0A%0AUsername%3A%0APassword%3A%20%0A`}
                      className="group -m-2 p-2 flex items-center"
                    >
                      <MailIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main ref={reportDownloadRef}>
          {/* Product */}
          <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Product details */}
              <div className="lg:max-w-lg lg:self-end">
                <nav aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                      <li key={breadcrumb.id}>
                        <div className="flex items-center text-sm">
                          <a
                            href={breadcrumb.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {breadcrumb.name}
                          </a>
                          {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                            <svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              aria-hidden="true"
                              className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                            >
                              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span>
                      {' '}
                      {post?.lot.name}
                      {' - '}
                      {post?.variety.name}
                    </span>
                    <br />
                    <span>
                      {' '}
                      {post?.week
                        ? post?.week.toUpperCase().replace('EEK-', '')
                        : 'N/A'}
                      {'-'}
                      {new Date(post?.date).getFullYear()}
                    </span>
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="pb-10 mt-4 space-y-6">
                    <p className="text-base text-gray-500">
                      <BlockContent
                        blocks={post?.body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        className={markdownStyles.markdown}
                      />{' '}
                    </p>
                  </div>

                  <form>
                    <div className="sm:flex sm:justify-between">
                      {/* Size selector */}
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                      >
                        <RadioGroup.Label className="block text-sm font-medium text-gray-700"></RadioGroup.Label>
                        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <RadioGroup.Option
                            as="div"
                            key={post?.label?.name}
                            value={post?.label?.name}
                            style={{ paddingRight: '80px' }}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Lot
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() => setOpenDesc(true)}
                                    />
                                    <Transition.Root
                                      show={openDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenDesc}
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
                                            <div className="inline-block align-top bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-sm sm:w-full sm:p-6">
                                              <div>
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    {post.lot.name}
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      {post.lot.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.lot?.name}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.date}
                            value={post?.date}
                            style={{ paddingRight: '80px' }}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] min-w-full cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Inspection Date
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.date
                                    ? new Date(post?.date).toLocaleDateString(
                                        'en-US',
                                        {
                                          month: '2-digit',
                                          day: '2-digit',
                                          year: 'numeric',
                                        }
                                      )
                                    : 'xxxxxxx'}
                                  <span></span>
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.brix}
                            value={post?.brix}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Brix
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() => setOpenBrixDesc(true)}
                                    />
                                    <Transition.Root
                                      show={openBrixDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenBrixDesc}
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
                                            className="hidden sm:inline-block sm:align-top sm:h-screen"
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
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    Brix
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      The term Brix (also called
                                                      Balling) is the name of
                                                      the system for measuring
                                                      sugar content in grapes,
                                                      fermenting grape juices
                                                      (musts) or finished wines
                                                      developed by Adolph Brix
                                                      in the early 1800s. Brix
                                                      is credited with adding
                                                      precision to the
                                                      measurement of sugar
                                                      content on a density scale
                                                      known as Balling.
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenBrixDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.brix}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.sizeMin}
                            value={post?.sizeMin}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Size
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.sizeMin}
                                  {' mm - '}
                                  {post?.sizeMax}
                                  {' mm'}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.variety.name}
                            value={post?.variety.name}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Type
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() => setOpenTypeDesc(true)}
                                    />
                                    <Transition.Root
                                      show={openTypeDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenTypeDesc}
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
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    {post.variety.name}
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      {post.variety.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenTypeDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.label.name}
                                  {' - '}
                                  {post?.variety.name}
                                  {' - '}
                                  {post?.lot.name}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.appearance.name}
                            value={post?.appearance.name}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Appearance
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() =>
                                        setOpenAppearanceDesc(true)
                                      }
                                    />
                                    <Transition.Root
                                      show={openAppearanceDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenAppearanceDesc}
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
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    Appearance:{' '}
                                                    {post.appearance.name}
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      {
                                                        post.appearance
                                                          .description
                                                      }
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenAppearanceDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.appearance.name}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.flavor.name}
                            value={post?.flavor.name}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Flavor
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() => setOpenFlavorDesc(true)}
                                    />
                                    <Transition.Root
                                      show={openFlavorDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenFlavorDesc}
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
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    Flavor: {post.flavor.name}
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      {post.flavor.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenFlavorDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.flavor.name}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            as="div"
                            key={post?.firmness.name}
                            value={post?.firmness.name}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-lime' : '',
                                'relative block border border-gray-300 rounded-lg p-4 px-[30] cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  Firmness
                                  <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <QuestionMarkCircleIcon
                                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                      onClick={() => setOpenFirmnessDesc(true)}
                                    />
                                    <Transition.Root
                                      show={openFirmnessDesc}
                                      as={Fragment}
                                    >
                                      <Dialog
                                        as="div"
                                        className="fixed z-10 inset-0 overflow-y-auto"
                                        onClose={setOpenFirmnessDesc}
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
                                                <div className="mt-3 text-center sm:mt-5">
                                                  <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                  >
                                                    Firmness:{' '}
                                                    {post.firmness.name}
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                      {
                                                        post.firmness
                                                          .description
                                                      }
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-5 sm:mt-6">
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-lime text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime sm:text-sm"
                                                  onClick={() =>
                                                    setOpenFirmnessDesc(false)
                                                  }
                                                >
                                                  Close
                                                </button>
                                              </div>
                                            </div>
                                          </Transition.Child>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </a>
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {post?.firmness.name}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? 'border-transparent'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="mt-10">
                      <a
                        onClick={() => {
                          if (process.env.NEXT_PUBLIC_HOST === 'production') {
                            ga.event({
                              action: 'report-inbound-info-request',
                              params: {
                                client: `${session.user.email}`,
                                url: `${window.location.href.replace('#', '')}`,
                              },
                            });
                          }
                        }}
                        href={`mailto:info@keiproduce.com?subject=Request%20Info%20for%20${encodeURIComponent(
                          post.slug
                        )}&body=Hello%20KEI%20Staff%2C%20%0A%0AI%20would%20like%20more%20info%20for%20the%20following%20report%3A%0A${window.location.href.replace(
                          '?#',
                          ''
                        )}%0A%0A%0AHere%20is%20my%20info%20below%3A%0A%0AName%3A%0AEmail%3A%20%0ACompany%3A%20%0APhone%20Number%3A`}
                        className="w-full bg-lime border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-lime"
                      >
                        Contact Team
                      </a>
                    </div>
                  </form>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={imageBuilder(post?.variety?.image)
                      .width(592)
                      .height(592)
                      .url()}
                    alt={post?.variety?.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            <section aria-labelledby="details-heading">
              <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <div key={`${post.slug}-cover-image`}>
                  <div className="w-full aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                    <img
                      src={imageBuilder(post.coverImage).url()}
                      alt="image.asset._ref"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                {post?.images.map((image) => (
                  <div key={image.asset._ref}>
                    <div className="w-full aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                      <img
                        src={imageBuilder(image).url()}
                        alt="image.asset._ref"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Policies section */}
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
    </Track>
  );
}

export async function getStaticProps({ params, preview = true }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post?.slug,
        },
      })) || [],
    fallback: true,
  };
}
