import React from "react";

export function Post(props) {
  console.log("Post props: ", props);
  return (
    <div>
      <h1>{props.props.name}</h1>
      <p>{props.props.content}</p>
    </div>
  );
}
