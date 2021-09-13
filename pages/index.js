import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllGrapeReportsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import HeroGrapeReport from '../components/hero-grape-report'
import MoreGrapeReports from '../components/more-grape-reports'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const heroGrapeReport = allGrapeReports[0]
  const moreGrapeReports = allGrapeReports.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>KEI Field Reports</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              reporter={heroPost.reporter}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {heroGrapeReport && (
            <HeroGrapeReport
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              reporter={heroPost.reporter}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {moreGrapeReports.length > 0 && <MoreGrapeReports grape={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allGrapeReports = await getAllGrapeReportsForHome(preview)
  return {
    props: { allPosts, allGrapeReports, preview },
    revalidate: 1
  }
}
