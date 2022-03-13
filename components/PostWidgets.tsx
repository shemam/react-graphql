import { FC, useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPost } from '../services';
import { features } from 'process';
interface fetchedPost {
  categories: undefined | [{ name: string; slug: string }];
  slug: undefined;
}

interface relatedPost {
  title: string;
  feature: { url: string };
  slug: string;
  createdAt: string;
}

const PostWidgets: FC<fetchedPost> = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  console.log('yeye', categories);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug).then((result) => setRelatedPost(result));
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, []);

  console.log(
    'postss',
    relatedPost.map((post: any) => post),
  );

  return (
    <div className="mb-8 ml-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPost.map((content: relatedPost) => (
        <div key={content.title} className="flex w-full items-center">
          <div className="w-16 flex-none">
            <img src={content.feature.url} width="60px" height="60px" alt={content.title} />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">{moment(content.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${content.slug}`}>{content.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidgets;
