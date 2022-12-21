import {Link} from "react-router-dom";

export function Page404() {
  return (
    <div>
      <h1>Error - Page Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
