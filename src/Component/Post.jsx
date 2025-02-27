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
            key={post.id}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill "
            onClick={() => deletePost(post.id)}
          >
            <FaDeleteLeft className="deleteIcon" />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags &&
          post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
        <div className="alert alert-success reactions" role="alert">
          {post.reactions}
        </div>
      </div>
    </div>
  );
};
export default Post;
