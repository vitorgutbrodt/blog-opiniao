import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>    
    <p className={styles.page__text}>Eventualmente vai ter um texto de apresentação aqui. Mas por enquanto ainda não tem. Então por hora é basicamente isso ai mesmo. Valeu falou.</p>
    <Link href="/mais-lidos" className={styles.link}>
      <button className={styles.page__button}>VER ARTIGOS MAIS LIDOS</button>
    </Link>
    </>
  );
}