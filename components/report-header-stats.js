import BlockContent from '@sanity/block-content-to-react';
import markdownStyles from './markdown-styles.module.css';
/* This example requires Tailwind CSS v2.0+ */
export default function ReportHeaderStats({
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
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {variety ? variety.name : 'N/A'} -{' '}
            {new Date(inspectionDate).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            })}
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            <BlockContent
              blocks={content}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              className={markdownStyles.markdown}
            />{' '}
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Lot
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-lime">
                    {lot ? lot.name : 'N/A'}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Label
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-lime">
                    {label ? label.name : 'N/A'}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Week
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-lime">
                    {' '}
                    {week
                      ? week.toUpperCase().replace('EEK-', '')
                      : 'N/A'} - {new Date(inspectionDate).getFullYear()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
