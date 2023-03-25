"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>The Launch Market v.0.1.1 dev</h1>
      <p>With hot reloading enabled in Docker</p>
      <a href="Go To Page" onClick={() => router.push("/page")}>
        Back to Home Page
      </a>
    </main>
  );
}
