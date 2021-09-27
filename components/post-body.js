import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { imageBuilder } from '../lib/sanity';

export default function PostBody({
  content,
  brix,
  sizeMin,
  sizeMax,
  flavor,
  firmness,
  appearance,
  label,
  variety,
  lot,
  blockNumber,
  images,
  date,
}) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Report Specifications
          </h2>
          <div className="max-w-2xl mx-auto"></div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key={brix} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Lot</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {lot ? lot.name : 'N/A'}
              </dd>
            </div>
            <div key={brix} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Inpection Date</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {date
                  ? new Date(date).toLocaleDateString('fr-CA', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                    })
                  : 'xxxxxxx'}
              </dd>
            </div>
            <div key={brix} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Brix</dt>
              <dd className="mt-2 text-sm text-gray-500">{brix}</dd>
            </div>
            <div key="size" className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Size</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {sizeMin}mm - {sizeMax}mm
              </dd>
            </div>
            <div
              key={label + variety}
              className="border-t border-gray-200 pt-4"
            >
              <dt className="font-medium text-gray-900">Type</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {label.name} - {variety.name}
              </dd>
            </div>
            <div
              key={appearance.name}
              className="border-t border-gray-200 pt-4"
            >
              <dt className="font-medium text-gray-900">Appearance</dt>
              <dd className="mt-2 text-sm text-gray-500">{appearance.name}</dd>
            </div>
            <div key={flavor.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Flavor</dt>
              <dd className="mt-2 text-sm text-gray-500">{flavor.name}</dd>
            </div>
            <div key={firmness.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Firmness</dt>
              <dd className="mt-2 text-sm text-gray-500">{firmness.name}</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image) => (
            <img
              src={imageBuilder(image).width(640).height(640).url()}
              alt={image.asset._ref}
              className="bg-gray-100 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
