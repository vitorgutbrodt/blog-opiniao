import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import Link from "next/link";
import {artigos} from "@/lib/artigos";

export default function ArtigosPage() {
  return (
    <>
    <Link href="/" className={styles.link}>
      <button className={styles.page__returnbutton}>VOLTAR</button>
      </Link>  
    <Grid artigos={artigos}/>  
    </>
  );
}