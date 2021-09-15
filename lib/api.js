import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const getUniqueGrapeReports = (grapeReports) => {
  const slugs = new Set();
  return grapeReports.filter((grapeReport) => {
    if (slugs.has(grapeReport.slug)) {
      return false;
    } else {
      slugs.add(grapeReport.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  sizeMin,
  sizeMax,
  images,
  label,
  variety,
  brix,
  appearance,
  flavor,
  firmness,
  stems,
  week
  'reporter': reporter->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getPreviewGrapeReportsBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "grapeReport" && slug.current == $slug] | order(inspectionDate desc){
      ${grapeReportFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllGrapeReportsWithSlug() {
  const data = await client.fetch(
    `*[_type == "grapeReport"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllGrapeReportsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "grapeReport"] | order(inspectionDate desc){
      ${grapeReportFields}
    }`);
  return getUniqueGrapeReports(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getGrapeReportsAndMoreGrapeReports(slug, preview) {
  const curClient = getClient(preview);
  const [grapeReport, moreGrapeReports] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "grapeReport" && slug.current == $slug] | order(_updatedAt desc) {
        ${grapeReportFields}
        body
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "grapeReport" && slug.current != $slug] | order(inspectionDate desc, _updatedAt desc){
        ${grapeReportFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return {
    grapeReport,
    moreGrapeReports: getUniqueGrapeReports(moreGrapeReports),
  };
}
