import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import { getArtigos } from "@/lib/api/crudcrud"

export const dynamic = "force-static";

export default async function Home() {
  const artigos = await getArtigos();

  const destaques = artigos.slice(0, 4); // Seleciona os 4 primeiros artigos como destaques

  return (
    <>    
    <p className={styles.page__text}>O Blog Opinião é um algoritmo criado para fins de estudo em um curso de front-ent através da EBAC. Supostamente esse seria o modelo para um blog de diversos tipos de artigos. </p>
    <Title title="Artigos Mais Lidos:" />
    <Grid artigos={destaques}/>     
    <Link href="/artigos" className={styles.page__link}>
      <button className={styles.page__button}>VER MAIS ARTIGOS</button>
    </Link>
    </>
  );
}