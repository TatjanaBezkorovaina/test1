import React from "react";

const Post = ({ data }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <span
        style={{
          marginRight: "10px",
          color: "blue",
          display: "flex",
        }}
      >
        {data.count}
      </span>
      <span style={{ fontStyle: "italic" }}>{data.text}</span>
    </div>
  );
};

export default Post;
