export default function CreatePost() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="Form-label">
            Email address
          </label>
          <input
            type="email"
            class="Form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="Form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="Form-label">
            Password
          </label>
          <input
            type="password"
            class="Form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 Form-check">
          <input type="checkbox" class="Form-check-input" id="exampleCheck1" />
          <label class="Form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
