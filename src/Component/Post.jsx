import image from "../Images/Profile.jpeg";
const Post = () => {
  return (
    <div class="card" style={{ width: "18rem", marginTop: "10px" }}>
      <img src={image} class="card-img-top" alt="Musahaf Ali" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Post;
