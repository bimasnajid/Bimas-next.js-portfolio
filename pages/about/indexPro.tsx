// pages/index.tsx
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/projects">
        <button className={styles.learnMoreButton}>Learn More</button>
      </Link>
    </div>
  );
}
