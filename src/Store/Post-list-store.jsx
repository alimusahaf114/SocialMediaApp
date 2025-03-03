import { useReducer, createContext } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
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
    newPostList = action.payload.posts; // ✅ Fixed: Spread array to ensure proper state update
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

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD-POST",
      payload: {
        id: Date.now(),
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
      value={{ addPost, addInitialPosts, deletePost, postList }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
