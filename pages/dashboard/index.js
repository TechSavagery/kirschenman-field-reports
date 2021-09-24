import Container from '../../components/container';
import MoreStories from '../../components/more-stories';
import HeroPost from '../../components/hero-post';
import Layout from '../../components/layout';
import { getAllPostsForHome } from '../../lib/api';
import Head from 'next/head';
import PageHeader from '../../components/page-header';
import GrapeReportsSection from '../../components/grape-reports-section';
import DashboardSectionHeader from '../../components/dashboard-section-header';
import DashboardFooter from '../../components/dashboard-footer';

export default function Index({ allPosts, preview }) {
  const allReports = allPosts.slice(0,12);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>KEI Field Reports | Dashbaord</title>
        </Head>
        <Container>
          <PageHeader />
          <DashboardSectionHeader />
          <GrapeReportsSection reports={allReports} />

          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              reporter={heroPost.reporter}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              week={heroPost.week}
            />
          )}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />} */}
          <DashboardFooter/>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
