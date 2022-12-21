import { Layout } from "../components/Layout";
// Importam stilurile din modulul de CSS.
import styles from "./Home.module.css";

export function Home() {
  return (
    <div>
      {/* Instantiem Layout, dându-i copii. */}
      <Layout>
        {/* Utilizam clasa color, din modulul de CSS. */}
        <h1 className={styles.stilizare_In_CSS}>Home</h1>
      </Layout>
    </div>
  );
}