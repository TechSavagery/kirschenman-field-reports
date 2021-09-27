export default function HomeFooter() {
  return (
    <div className="max-w-full bg-gray-50">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-lime">
            Get access now by contacting us today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:info@keisales.com?cc=subject=Subscribe%20To%20KEI%20Field%20Reports&body=I%20would%20like%20access%20to%20KEI%20field%20report%20data%0d%0aName%0d%0aCompany%20Name%0d%0aEmail"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime hover:bg-lime"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lime bg-white hover:bg-indigo-50"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
