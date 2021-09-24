import {
  BriefcaseIcon,
  CalendarIcon,
  LocationMarkerIcon,
  DuplicateIcon,
  EyeIcon,
} from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardSectionHeader() {
  return (
    <div className="justify-center max-w-lg lg:flex lg:items-center pt-40px">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Grape Reports
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Seasonal
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            10+Lots
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <DuplicateIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            15 Varieties
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Mid January to August
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <EyeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            View All
          </button>
        </span>
      </div>
    </div>
  );
}
