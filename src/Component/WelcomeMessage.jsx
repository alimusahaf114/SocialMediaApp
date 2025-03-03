export default function WelcomeMessage({ onGetPostClick }) {
  return (
    <div className="welcomeMessage">
      <h1>There are no posts 😂</h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get posts from Server
      </button>
    </div>
  );
}
