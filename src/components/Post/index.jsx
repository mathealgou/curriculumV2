import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

export function Post(props) {
  console.log("Post props: ", props);
  return (
    <div>
      <ReactMarkdown children={props.props.content} />
    </div>
  );
}
