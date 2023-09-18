import React from "react";
import Card from "@leafygreen-ui/card";
import { css } from "@leafygreen-ui/emotion";
import { H3, H2 } from "@leafygreen-ui/typography";
import Badge from "@leafygreen-ui/badge";
import { Link } from "react-router-dom";

const cardStyle = css`
  margin: 1em;
`
const book = (doctorID) => {
  console.log('====================================');
  console.log('Book for doctor', doctorID);
  console.log('====================================');
}

export default function PostSummary(props) {
  return (
    <Card className={cardStyle}>
      <H2>{props.name}</H2>
      <H3>{props.qualification}</H3>
      <Link to={`/post/${props._id}`}>Read More...</Link><br/>
      {props && <React.Fragment><Badge>{props.tokensPerDay}</Badge> </React.Fragment>}
      <button onClick={() => book(props._id)}>Book</button>
    </Card>
  )
}