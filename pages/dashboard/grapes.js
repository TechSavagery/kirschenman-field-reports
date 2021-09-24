import Container from '../../components/container';
import Layout from '../../components/layout';
import { getAllPostsForHome } from '../../lib/api';
import Head from 'next/head';
import PageHeader from '../../components/page-header';
import DashboardFooter from '../../components/dashboard-footer';
import ReportFilters from '../../components/report-filters';

export default function Index({ allPosts, preview }) {
  const allReports = allPosts;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>KEI Field Reports - Grapes | Dashbaord</title>
        </Head>
        <Container>
          <PageHeader />
          <ReportFilters reports={allReports} />
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
