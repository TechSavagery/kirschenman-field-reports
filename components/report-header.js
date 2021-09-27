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
    <div className="max-w-full relative bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <polygon points="50,0 100,0 50,100 0,100" />
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  {label ? label.name : 'N/A'} -{' '}
                  {variety ? variety.name : 'N/A'} - {lot ? lot.name : 'N/A'}
                </span>{' '}
                <span className="block text-indigo-600 xl:inline">
                  {week ? week.toUpperCase().replace('EEK-', '') : 'N/A'} -{' '}
                  {new Date(inspectionDate).getFullYear()}-{' '}
                </span>
                <span className="block xl:inline">
                  {new Date(inspectionDate).toLocaleDateString('fr-CA', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <BlockContent
                  blocks={content}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  className={markdownStyles.markdown}
                />
              </p>
              <div className="hidden md:block md:mb-12">
                <Avatar name={reporter?.name} picture={reporter?.picture} />
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    <DocumentDownloadIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Export
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    <PhoneIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={imageBuilder(mainImage).width(720).height(554).url()}
          alt=""
        />
      </div>
    </div>
  );
}

//
