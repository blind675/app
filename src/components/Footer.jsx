// Importam link-ul de la react router.
import {Link} from "react-router-dom";

export function Footer() {
  return (
    <div>
      {/* Adauagam un link, care duce catre pagina About. */}
      <Link to="/about">About</Link>
    </div>
  );
}