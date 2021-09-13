import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listItem/ListItem.jsx";
import "./List.scss";
const List = () => {
  return (
    <div className="list">
      <span className="listTitle"> Continue to watch</span>
      <ArrowBackIosOutlined />
      <div className="container">
        <ListItem />
        <ListItem />
      </div>
      <ArrowForwardIosOutlined />
    </div>
  );
};
export default List;
