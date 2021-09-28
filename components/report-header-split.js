/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/outline';
import { DocumentDownloadIcon, PhoneIcon } from '@heroicons/react/outline';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { imageBuilder } from '../lib/sanity';

export default function ReportHeaderSplit({
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
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={imageBuilder(mainImage).width(640).height(508).url()}
          alt="Grape Report Main Image "
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {variety ? variety.name : 'N/A'} -{' '}
            {new Date(inspectionDate).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            })}
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            <BlockContent
              blocks={content}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              className={markdownStyles.markdown}
            />
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Lot
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-lime sm:text-3xl">
                  {lot ? lot.name : 'N/A'}
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Label
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-lime sm:text-3xl">
                  {label ? label.name : 'N/A'}
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Week
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-lime sm:text-3xl">
                  {' '}
                  {week ? week.toUpperCase().replace('EEK-', '') : 'N/A'} -{' '}
                  {new Date(inspectionDate).getFullYear()}
                </dd>
              </div>
            </dl>
          </div>
          <div className="py-20px flex items-center">
            <img
              src={reporter.picture}
              className="w-12 h-12 rounded-full mr-4"
              alt={reporter.name}
            />
            <div className="text-xl font-bold">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
