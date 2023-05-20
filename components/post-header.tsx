import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import { useRouter } from "next/router";
import CardWrapper from "./elements/cardWrapper";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} src={coverImage} /> */}
      </div>
      <div className="max-w-2xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <CardWrapper>
          <div
            onClick={() => router.back()}
            className="text-green-500 font-mono flex items-center cursor-pointer text-lg my-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
              <path d="M5 12l6 6"></path>
              <path d="M5 12l6 -6"></path>
            </svg>
            back
          </div>
        </CardWrapper>
      </div>
    </>
  );
};

export default PostHeader;
