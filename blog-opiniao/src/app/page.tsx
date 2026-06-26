import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import { getArtigos } from "@/lib/api/crudcrud"

export const dynamic = "force-dynamic";
export const revalidate = 0; // "forçar" o force-dynamic 

export default async function Home() {
  const artigos = await getArtigos();

  console.log("HOME RENDER");

  const destaques = artigos.slice(-4).reverse(); // pega os 4 artigos mais recentes e inverte a ordem para exibir do mais recente para o mais antigo

  return (
    <>    
    <p className={styles.page__text}>O Blog Opinião é uma aplicação criada para fins de estudo em um curso de front-ent através da EBAC. Supostamente esse seria o modelo para um blog de diversos tipos de artigos. </p>
    <Title title="Artigos Mais Lidos:" />
    <Grid artigos={destaques}/>     
    <Link href="/artigos" className={styles.page__link}>
      <button className={styles.page__button}>VER MAIS ARTIGOS</button>
    </Link>
    </>
  );
}