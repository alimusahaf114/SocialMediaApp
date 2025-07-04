import { useReducer, createContext, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD-INITIAL-POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD-POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD-INITIAL-POSTS",
      payload: { posts },
    });
  };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD-POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ addPost, deletePost, postList }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
