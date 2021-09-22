import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import HeroHeader from '../components/hero-header';
import { CMS_NAME } from '../lib/constants';
import PageHeader from '../components/page-header';
import DashboardSectionHeader from '../components/dashboard-section-header';

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>KEI Field Reports | Dashbaord</title>
        </Head>
        <Container>
          <PageHeader />
          <DashboardSectionHeader title="Grapes" link="/reports/grapes" />
          <DashboardSectionHeader
            title="Stone Fruits"
            link="/reports/stone-fruits"
          />
          <DashboardSectionHeader
            title="Watermelon"
            link="/reports/watermerlon"
          />
          <DashboardSectionHeader title="Potato" link="/reports/potato" />

          {/* <Intro /> */}

          {heroPost && (
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
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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