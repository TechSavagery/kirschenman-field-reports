import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Comments from '../../components/comments';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Form from '../../components/form';
import PageHeader from '../../components/page-header';
import ReportHeader from '../../components/report-header';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <PageHeader />
            <article>
              <Head>
                <title>{post.title} | KEI Field Reports</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <ReportHeader
                label={post.label}
                variety={post.variety}
                lot={post.lot}
                inspectionDate={post.date}
                mainImage={post.coverImage}
                content={post.body}
                week={post.week}
                reporter={post.reporter}
              />
              <PostBody
                content={post.body}
                brix={post.brix}
                sizeMax={post.sizeMax}
                sizeMin={post.sizeMin}
                flavor={post.flavor}
                firmness={post.firmness}
                label={post.label}
                appearance={post.appearance}
                variety={post.variety}
                lot={post.lot}
                blockNumber={post.blockNumber}
                images={post.images}
                date={post.date}
              />
            </article>

            <Comments comments={post.comments} />
            <Form _id={post._id} />
            <DashboardFooter/>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
