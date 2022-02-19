import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import {useState} from 'react'

export default function FloatingBanner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  return (
    <div>
      {bannerOpen ? (
        <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-40">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-lime shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-white">
                    <SpeakerphoneIcon
                      className="h-6 w-6 text-lime"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      Our season starts early Summer 2022.
                    </span>
                    <span className="hidden md:inline">
                      Stay Connected! Season starts early Summer 2022. Subscribe
                      for more info!
                    </span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <a
                    href="#email"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-lime bg-white hover:bg-indigo-50"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setBannerOpen(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
