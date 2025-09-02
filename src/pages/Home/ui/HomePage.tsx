import styles from "./HomePage.module.scss";
import { Footer, Header } from "@/widgets";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui";

const HomePage = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Button onClick={() => setError(true)}>click me!</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
