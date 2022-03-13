import React from 'react';

import { getPostDetails, getPosts } from '../../services';
import { Categories, PostCard, PostWidgets, Author, CommentForm, PostDetail, Comment } from '../../components';

type SlugType = {
  node: { slug: string };
};

const PostDetails = ({ data }: any) => {
  console.log('data', data);
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail data={data} />
          <Author author={data.author} />
          {/* <CommentForm slug={data.slug} />
          <Comment slug={data.slug} /> */}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidgets
              slug={data.slug}
              categories={data.categories.map((category: { slug: string }) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug);

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: SlugType) => ({ params: { slug } })),
    fallback: false,
  };
}
