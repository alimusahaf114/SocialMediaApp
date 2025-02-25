import Post from "./Post";
export default function PostList() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}
