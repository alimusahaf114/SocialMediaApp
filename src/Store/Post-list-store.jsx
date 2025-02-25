import { useReducer } from "react";

import { createContext } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        addPost: addPost,
        deletePost: deletePost,
        postList: postList,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
