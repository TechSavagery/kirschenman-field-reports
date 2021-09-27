import { imageBuilder } from '../lib/sanity';
export default function ReportCard({
  week,
  label,
  variety,
  lot,
  inspectionDate,
  mainImage,
  slug,
}) {
  return (
    <a key={mainImage.asset._ref} href={'/reports/' + slug} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={imageBuilder(mainImage).width(280).height(320).url()}
          alt=""
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{lot ? lot.name : 'N/A'}</h3>
      <h3 className="mt-1 text-sm text-gray-700">
        {week ? week.toUpperCase().replace('EEK-', '') : 'N/A'} -{' '}
        {new Date(inspectionDate).getFullYear()} -{' '}
        {new Date(inspectionDate).toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {label ? label.name : 'N/A'} - {variety ? variety.name : 'N/A'}
      </p>
    </a>
  );
}
