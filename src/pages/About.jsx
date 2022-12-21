import {Layout} from "../components/Layout";

export function About() {
  return (
    <div>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        {/* About nu va primi stilizarea din Home.modules.css, cu toate ca are acelasi nume de clasa. */}
        <h1>About</h1>
      </Layout>
    </div>
  );
}