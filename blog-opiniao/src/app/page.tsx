import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import { getArtigos } from "@/lib/api/crudcrud"

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <>    
    <p className={styles.page__text}>Eventualmente vai ter um texto de apresentação aqui. Mas por enquanto ainda não tem. Então por hora é basicamente isso ai mesmo. Valeu falou.</p>
    <Title title="Artigos Mais Lidos:" />
    <Grid artigos={artigos}/>     
    <Link href="/artigos" className={styles.page__link}>
      <button className={styles.page__button}>VER MAIS ARTIGOS</button>
    </Link>
    </>
  );
}