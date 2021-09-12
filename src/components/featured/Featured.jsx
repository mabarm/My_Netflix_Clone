import { PlayArrow, InfoTwoTone } from "@material-ui/icons";
import ProfileImg from "../../Image/ProfileImg.png";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <img src={ProfileImg} alt="Profile" />
      <div className="info">
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magni beatae alias impedit corrupti numquam ut rerum harum illo magnam
          iste blanditiis dignissimos architecto, ipsam, quaerat praesentium
          maxime, distinctio nobis!
        </span>
        <div className="buttons">
          <div className="play">
            <PlayArrow />
            <span>Play</span>
          </div>
          <div className="more">
            <InfoTwoTone />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
