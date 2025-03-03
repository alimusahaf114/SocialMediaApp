import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }} // ✅ Makes delete icon clickable
          >
            <FaDeleteLeft className="deleteIcon" />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {/* ✅ Ensure `post.tags` exists before mapping */}
        {post.tags?.length > 0 &&
          post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}

        {/* ✅ Fix reactions display (Ensures object values are correctly displayed) */}
        {post.reactions && (
          <div className="alert alert-success reactions" role="alert">
            👍 Likes: {post.reactions.likes ?? 0} | 👎 Dislikes:{" "}
            {post.reactions.dislikes ?? 0}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
