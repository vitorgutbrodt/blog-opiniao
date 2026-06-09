import styles from "./page.module.css";
import Grid from "@/app/components/grid";
import Link from "next/link";
import { getArtigos } from "@/lib/api/crudcrud"

export default async function ArtigosPage() {
  const artigos = await getArtigos();

  return (
    <>
    <Link href="/" className={styles.link}>
      <button className={styles.page__returnbutton}>VOLTAR</button>
      </Link>  
    <Grid artigos={artigos}/>  
    </>
  );
}