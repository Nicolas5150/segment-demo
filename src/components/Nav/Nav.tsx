import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <div>Segment Demo</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* Will remove after setting up article ids */}
        <li>
          <Link to="/article">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}
