import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreGrapeReports from '../../components/more-grape-reports'
import Header from '../../components/header'
import GrapeReportHeader from '../../components/grape-report-header'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllGrapeReportsWithSlug, getAllPostsWithSlug, getGrapeReportsAndMoreGrapeReports } from '../../lib/api'
import GrapeReportTitle from '../../components/grape-report-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Form from '../../components/form'

export default function GrapeReport({ grapeReport, moreGrapeReports, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <GrapeReportTitle>Loading…</GrapeReportTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {grapeReport.title} | KEI Field Reports
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <GrapeReportHeader
                title={grapeReport.title}
                coverImage={grapeReport.coverImage}
                date={grapeReport.date}
                reporter={grapeReport.reporter}
              />
              <PostBody content={grapeReport.body} />
            </article>

            <SectionSeparator />
            {moreGrapeReports.length > 0 && <MoreGrapeReports posts={moreGrapeReports} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getGrapeReportsAndMoreGrapeReports(params.slug, preview)
  return {
    props: {
      preview,
      grapeReport: data?.grapeReport || null,
      moreGrapeReports: data?.moreGrapeReports || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allGrapeReports = await getAllPostsWithSlug()
  return {
    paths:
    allGrapeReports?.map((grapeReport) => ({
        params: {
          slug: grapeReport.slug,
        },
      })) || [],
    fallback: true,
  }
}
