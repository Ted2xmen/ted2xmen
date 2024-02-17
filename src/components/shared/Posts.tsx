import ArticlePreview from "./ArticlePreview";
import Wrapper from "./Wrapper";

const Posts = ({ data }: any) => {
  return (
    <Wrapper>
      {data.map((article: any, id: any) => (
        <ArticlePreview key={id} article={article} />
      ))}
    </Wrapper>
  );
};

export default Posts;
