// Importam hook-ul useParams, de la React Router.
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Layout} from "../components/Layout";

export function User() {
  // Extragem id-ul, din obiectul returnat de hook-ul useParams.
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    // Cerem datele de la server, pentru id-ul curent, si actualizam serverul.
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
      // Cand id-ul se schimba, cerem datele corespunzatoare.
  }, [id]);

  return (
    <div>
      <Layout>
        {/* Afisam numele si emailul userului. */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Layout>
    </div>
  );
}