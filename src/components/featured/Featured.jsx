import "./featured.css";
import wildlife from "../../assets/wildlife.jpg";
import beach from "../../assets/beach.jpg";
import sigiriya from "../../assets/sigiriya.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={wildlife}          
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={beach}          
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={sigiriya}          
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
