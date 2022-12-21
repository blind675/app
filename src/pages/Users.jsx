import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {Layout} from "../components/Layout";
import "./Users.css";

export function Users() {
  const [users, setUsers] = useState([]);
  // Cerem userii de la server si actualizam state-ul.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <Layout>
        {/* Afisam userii pe ecran. */}
        {users.map((user) => {
          return (
            <div key={user.id}>
              {/* Link-ul care duce catre un anumit user contine id-ul acestuia. */}
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}