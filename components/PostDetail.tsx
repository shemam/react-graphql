import { FC } from 'react';
import moment from 'moment';

const PostDetail: FC<any> = ({ data }) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={data.feature.url}
          alt=""
          className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
            <img
              alt={data.author.name}
              height="30px"
              width="30px"
              className=" align-middle"
              src={data.author.photo.url}
            />
            <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">{data.author.name}</p>
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
            <span className="align-middle">{moment(data.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{data.title}</h1>

        <div>
          <p>{data.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
