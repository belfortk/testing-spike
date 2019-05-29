import React from "react";

interface IProps{
  text: string;
  otherText: string;
}
const TitleComponent = ({text, otherText}: IProps) =>{
  return <h1 className="title">{text} {otherText}</h1>
}

export default TitleComponent;