import FormTwit from "@/components/FormTwit/FormTwit/FormTwit";
import TwitList from "@/components/TwitList/TwitList";
import styles from "./index.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>OWL BIRD</h2>
          <p>
            No deixis que la vida et passi. Per no perdret res viu el present
            enganxat a owl bird.
          </p>
          <p>Tho expliquem tot!</p>
        </div>
        <FormTwit />;
        <div>
          <TwitList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
