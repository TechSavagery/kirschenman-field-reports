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

const postFields = `
  _id,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'reporter': reporter->{name, 'picture': image.asset->url},
  'label': label->{name, url, 'logo': logoImage.asset->url},
  'variety': variety->{name, description, 'image': image.asset->url},
  'stems': stems->{name},
  'firmness': firmness->{name, description},
  'lot': lot->{name, description},
  blockNumber,
  brix,
  sizeMin,
  sizeMax,
  'appearance': appearance->{name, description},
  'flavor': flavor->{name, description},
  week,
  images,
  stems,
  approved,
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

export async function getAllPostsWithSlug() {
  const data = await getClient(true).fetch(
    `*[_type == "post" && defined(title) && defined(label) && defined(lot)]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post" && defined(lot) && approved == true] | order(publishedAt desc){
      ${postFields}
      body
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug && defined(title) && defined(label) && defined(lot)] | order(_updatedAt desc) {
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
