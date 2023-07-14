import "./Lower.css";

import star from "./redstar.png";
export default function Lower(props) {
  console.log(props.image1);

  return (
    <div className="lowerdiv">
      <img src={props.image1} className="jangol" />
      <div className="info">
        <img src={star} className="nejme" />
        <span>{props.text0}</span>
        <span className="gray">{props.text1} </span>
        <span className="gray">{props.text2}</span>
      </div>
      <p>{props.parag1} </p>
      <p>
        {" "}
        <span className="bold">{props.parag2}</span>/hr
      </p>
    </div>
  );
}
