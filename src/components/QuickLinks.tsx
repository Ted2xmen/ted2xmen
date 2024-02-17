import Badge from "./shared/Badge";
import { HOME_DATA } from "../consts";

const QuickLinks = () => {
  return (
    <div className="flex space-x-4">
      {HOME_DATA.quickLinks?.map((item: { name: string }, i: number) => {
        return <Badge label={item.name} key={i} />;
      })}
    </div>
  );
};

export default QuickLinks;
