import { useReducer } from "react";

import { createContext } from "react";

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
  } else if (action.type === "ADD-POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD-POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        addPost,
        deletePost,
        postList,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
