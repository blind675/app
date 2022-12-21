import "./styles.css";
// Importam paginile create.
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { Page404 } from "./pages/Page404";
// Importam componentele de la React Router.
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Toate paginile (rutele) noastre sunt copii ai componentei Routes */}
      <Routes>
        {/* Pentru a asocia o pagina unei rute, o punem ca valoare a prop-ului element. */}
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* id este un parametru. In momentul in care scriem la url ruta /users/1, id-ul va lua valoarea 1. */}
        <Route path="/user/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        {/* path="*" va prinde orice ruta care nu a fost prinsa mai sus, este ca un default de la switch-ul de JS. */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
