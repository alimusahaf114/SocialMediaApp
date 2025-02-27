import { useContext } from "react";
import { PostList as PostListData } from "../Store/Post-list-store";
import Post from "./Post";
export default function PostList({ children }) {
  const { postList } = useContext(PostListData);
  return (
    <>
      {children}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
