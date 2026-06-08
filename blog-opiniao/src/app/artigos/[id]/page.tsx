import { artigos } from "@/lib/artigos";    
import Image from "next/image";
import Title from "@/app/components/title";
import styles from "./page.module.css";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ArtigoPage({
  params,
}: Props) {
  const { id } = await params;

  const artigo = artigos.find(
    (artigo) => artigo.id === Number(id)
  );

  if (!artigo) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <main>
      <Link href="/mais-lidos" className={styles.link}>
         <button className={styles.page__returnbutton}>VOLTAR</button>
      </Link>      
      <Title title={artigo.título} />
      <Image src={artigo.imagem} alt={`Foto de ${artigo.título}`} width={600} height={400} className={styles.page__image} />
      <p className={styles.page__text}>{artigo.texto}</p>      
    </main>
  );
}