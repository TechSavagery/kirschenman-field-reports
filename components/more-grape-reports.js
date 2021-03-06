import GrapeReportPreview from './grape-report-preview'

export default function MoreGrapeReports({ grapeReports }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Grape Reports
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {grapeReports.map((grapeReport) => (
          <GrapeReportPreview
            key={grapeReport.slug}
            title={grapeReport.title}
            coverImage={grapeReport.coverImage}
            date={grapeReport.date}
            reporter={grapeReport.reporter}
            slug={grapeReport.slug}
            excerpt={grapeReport.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
