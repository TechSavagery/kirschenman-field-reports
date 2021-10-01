import { imageBuilder } from '../lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import markdownStyles from './markdown-styles.module.css';

export default function ReportCard({
  week,
  label,
  variety,
  lot,
  inspectionDate,
  mainImage,
  slug,
  content,
  reporter,
}) {
  return (
    <div
      key={slug}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={imageBuilder(mainImage).width(384).height(192).url()}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-cyan-600">
            <a href={`/reports/${slug}`} className="hover:underline">
              {label ? label.name : 'N/A'}
            </a>
          </p>
          <a href={`/reports/${slug}`} className="block mt-2">
            <p className="text-md font-semibold text-gray-900">
              {lot ? lot.name : 'N/A'}
              {' - '}
              {variety ? variety.name : 'N/A'}
              {' - '}
              {week ? week.toUpperCase().replace('EEK-', '') : 'N/A'}
              {' - '}
              {new Date(inspectionDate).getFullYear()}
            </p>

            <p className="mt-3 text-md text-gray-500 sm:mt-4">
              <BlockContent
                blocks={content}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                className={markdownStyles.markdown}
              />{' '}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={reporter.name}>
              <img
                className="h-10 w-10 rounded-full"
                src={reporter.picture}
                alt={reporter.name}
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={reporter.name} className="hover:underline">
                {reporter.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <p>
                {new Date(inspectionDate).toLocaleDateString('en-US', {
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
  );
}
