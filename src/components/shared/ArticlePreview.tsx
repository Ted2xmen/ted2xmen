import { CalendarIcon } from "@radix-ui/react-icons";
import moment from "moment";

const ArticlePreview = ({ article }: any) => {
  return (
    <article className="flex justify-between space-x-2 items-center">
      <a
        className="flex items-center text-main/70 hover:text-primary gap-2 line-clamp-1 text-sm md:text-base space-x-2"
        href={"/blog/" + article?.slug}>
        {article.data.title}
      </a>
      <div className="hidden md:flex items-center space-x-2">
        <div className="">
          {article?.data?.tags?.slice(0, 3).map((tag: string, id: number) => {
            return (
              <span
                key={id}
                className="cursor-pointer text-primary px-1 text-xs rounded-full py-1">
                {tag}
              </span>
            );
          })}
        </div>
        <span className="text-xs flex items-center text-main/40 gap-2">
          {moment(article.data.pubDate).format("ll")}
        </span>
        <div className="hidden md:flex text-main/40">
          <CalendarIcon />
        </div>
      </div>
    </article>
  );
};

export default ArticlePreview;
