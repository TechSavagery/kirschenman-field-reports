import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import GrapeReportTitle from './grape-report-title'
import {imageBuilder} from '../lib/sanity'
export default function GrapeReportHeader({ title, coverImage, date, reporter }) {
  return (
    <>
      <GrapeReportTitle>{title}</GrapeReportTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={reporter?.name} picture={reporter?.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={reporter?.name} picture={reporter?.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
