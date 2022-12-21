// Importam link-ul de la react router.
import {Link} from "react-router-dom";

export function Header() {
  return (
    <div>
      {/* Adauagam link-uri ce duc catre paginile Home, respectiv users. */}
      <Link to={"/"}>Home</Link>
      <Link to={"/users"}>Users</Link>
    </div>
  );
}