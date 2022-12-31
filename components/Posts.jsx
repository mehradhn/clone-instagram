import React from "react";
import Post from "./Post";
const posts = [
  {
    id: "123",
    username: "Mehrad",
    userImage: "/images/person-unknown.jpg",
    image: "/images/download.jpg",
    caption: "this is caption for our first post",
  },
  {
    id: "1234",
    username: "Mehrad",
    userImage: "/images/person-unknown.jpg",
    image: "/images/download.jpg",
    caption: "this is caption for our second post",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          caption={post.caption}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Posts;
