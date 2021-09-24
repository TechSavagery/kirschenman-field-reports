import { AnnotationIcon, GlobeIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'All Produce. All Locations.',
    description:
      'Get field data for any of our produce at any of our locations in one place instantly as our team submits daily quality reports',
    icon: GlobeIcon,
  },
  {
    name: 'Real Time Quality Assesment',
    description:
      'All of our locations are leverage on unified data entry system to ensure you recieve reprots as soon as they are submitted. ',
    icon: ScaleIcon,
  },
  {
    name: 'Daily Reports',
    description:
      'Our reports will bring you specific data for each produce such as size, taste, appearance, as weel as suporting images and reporter comments.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Quick Contact',
    description:
      'Leave messages directly on the report to start a conversation with our sales team. We will reach out and ensure your team has all the info you need. ',
    icon: AnnotationIcon,
  },
]

export default function HomeInfo() {
  return (
    <div className="max-w-full py-12 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Reports</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn more about our produce
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are bringing produce data directly from the field into your hands. Explore our field reports to learn more about the quality we strive to create. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}