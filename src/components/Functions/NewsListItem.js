import Card from "../UI/Card";

const NewsListItem = ({ property }) => {
  return (
    <Card>
      <h2>{property.title}</h2>
      <p>{property.feed}</p>
    </Card>
  );
};
export default NewsListItem;
