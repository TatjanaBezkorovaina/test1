import React from "react";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      count: 1,
      text: "Good Worker!",
    },
    {
      count: 2,
      text: "Wonderful",
    },
    {
      count: 3,
      text: "Good quality",
    },
  ];

  return (
    <div>
      <h2>Posts:</h2>

      {
        posts.map((post, index) => (
          <Post data={post} key={"post - " + index} />
        ))

        /* <Post data={posts[0]} />
      <Post data={posts[1]} />
      <Post data={posts[2]} /> */
      }
    </div>
  );
};

export default Posts;
