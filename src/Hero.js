import "./Hero.css";
import image from "./lebissa.jpeg";

export default function Hero() {
  return (
    <div className="batal">
      <img src={image} className="issa" />
      <div className="ow">
        <h1 className="HeroHeader"> About The Company!</h1>
        <p1>
          With more than 15 years of experience, COMPU-VISION provides you with
          a team of experts in each field of information technology,<br></br>{" "}
          from website, mobile application UI/UX and development, software
          solutions, artificial intelligence to IT consultancy.<br></br> We
          tailor our approach based on the project and requirements and client's
          needs.
        </p1>
      </div>
    </div>
  );
}
