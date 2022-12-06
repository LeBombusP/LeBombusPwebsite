import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>No, i don't think so.</h1>
      <Link to="/">Return home</Link>
    </div>
  );
}

export default ErrorPage;