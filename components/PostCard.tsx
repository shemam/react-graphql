import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

interface Post {
  post: {
    author: {
      name: string;
      id: string;
      bio: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;

    slug: string;
    title: string;
    exerpt: string;

    feature: {
      url: string;
    };
    categories: [{ name: string; slug: string }];
  };
}

const PostCard: FC<Post> = ({ post }) => {
  const data = post;
  console.log("all post dataa", post);

  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md ">
        <Image
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
          layout="fill"
          src={post.feature.url}
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <Image
            alt={post.author.name}
            className="rounded-full align-middle"
            layout="fixed"
            height="30"
            width="30 "
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
