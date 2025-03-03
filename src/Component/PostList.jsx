import { useContext } from "react";
import { PostList as PostListData } from "../Store/Post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList({ children }) {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // ✅ Log response
        console.log("Posts array:", data.posts); // ✅ Log posts array

        if (Array.isArray(data.posts)) {
          addInitialPosts(data.posts);
        } else {
          console.error("Error: API did not return an array");
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  return (
    <>
      {children}
      {postList.length === 0 ? (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}
