import { HomeIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";

const Breadcrumb = ({ title }: { title?: string }) => {
  return (
    <div className="py-5 text-xs flex items-center justify-between w-full">
      <a href="/blog" className="flex items-center  gap-2">
        Back
      </a>
      <h1> {title} </h1>
      <a href="/" className="flex items-center gap-2">
        Home
      </a>
    </div>
  );
};

export default Breadcrumb;
