/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is the best time for selecting stone fruits?",
    answer:
      "Our fruits are some of the first peaches and nectarines available in the state of California.  We generally have peaches and nectarines available from late April through May.  Please see our full varietal line up with white and yellow peaches and nectarines as well as harvest estimates.  ",
  },
  {
    question: "Where can I buy your produce?",
    answer:
      "Our products are available at your local Costco.  Please reach out to our team to point out where product is available in your location. ",
  },
  {
    question: "How can I access the reports?",
    answer:
      "The reports are readily available by simply requesting a login to create a user name and password.",
  },
  {
    question: "Do you have videos of the crops as well?",
    answer:
      "Yes, our harvest team is equipped to provide short video clips upon request.  You can reach out for tailored reports of exactly what your customers are looking for.",
  },
  {
    question: "When will watermelon field reports be available?",
    answer:
      "We are coordinating with our watermelon staff now to discuss plans for the 2022 season.",
  },

  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
