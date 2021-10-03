import NewsListItem from "./NewsListItem";
import Wrapper from "./Wrapper";

const NewsList = ({ news }) => {
  const nachricht = news.map((item) => {
    const _ = require("lodash");
    const id = _.uniqueId("uniqueID_");

    return (
      <Wrapper key={id}>
        <NewsListItem property={item} />
      </Wrapper>
    );
  });

  return nachricht;
};

export default NewsList;
