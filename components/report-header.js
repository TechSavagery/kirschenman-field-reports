import { DocumentDownloadIcon, PhoneIcon } from '@heroicons/react/outline';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { imageBuilder } from '../lib/sanity';
import Avatar from './avatar';

export default function ReportHeader({
  week,
  label,
  variety,
  lot,
  inspectionDate,
  mainImage,
  content,
  reporter,
}) {
  return (
    <section className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              {label ? label.name : 'N/A'} - {variety ? variety.name : 'N/A'} -{' '}
              {lot ? lot.name : 'N/A'}
            </span>{' '}
            <span className="block text-lime xl:inline">
            {week ? week.toUpperCase().replace('EEK-', '') : 'N/A'} -{' '}
                  {new Date(inspectionDate).getFullYear()}-{' '}
            </span>
            <span className="block xl:inline">
              {' '}
              {new Date(inspectionDate).toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              })}
            </span>{' '}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            <BlockContent
              blocks={content}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              className={markdownStyles.markdown}
            />
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime hover:bg-lime md:py-4 md:text-lg md:px-10"
              >
                <DocumentDownloadIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Export
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                <PhoneIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={imageBuilder(mainImage).width(720).height(554).url()}
          alt=""
        />
      </div>
    </section>
  );
}

//
