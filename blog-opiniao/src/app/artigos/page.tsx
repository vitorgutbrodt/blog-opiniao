import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/app/components/title";
import Grid from "@/app/components/grid";
import {artigos} from "@/lib/artigos";

export default function MaisLidosPage() {
  return (
    <>
    <Title title="Artigos Mais Lidos:" />
    <Grid artigos={artigos}/>  
    </>
  );
}