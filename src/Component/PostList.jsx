import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../Store/Post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
