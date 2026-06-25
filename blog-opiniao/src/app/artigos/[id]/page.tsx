import Image from "next/image";
import Title from "@/app/components/title";
import styles from "./page.module.css";
import Link from "next/link";
import { getArtigoById } from "@/lib/api/crudcrud";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const generateMetadata = async ({ params }: Props) => {

const { id } = await params;

  const artigo = await getArtigoById(id);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.texto.substring(0, 160), 
  };

}

export default async function ArtigoPage({ params }: Props) {
  const { id } = await params;

  console.log("ID recebido pela rota:", id);

  const artigo = await getArtigoById(id);

  console.log("Artigo encontrado:", artigo);

  if (!artigo) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <main>
      <Link href="/artigos" className={styles.link}>
        <button className={styles.page__returnbutton}>
          VOLTAR
        </button>
      </Link>

      <Title title={artigo.titulo} />

      <Image
        src={artigo.imagem}
        alt={`Foto de ${artigo.titulo}`}
        width={600}
        height={400}
        className={styles.page__image}
      />

      <p className={styles.page__text}>
        {artigo.texto}
      </p>

      <p className={styles.page__autor}>
        {artigo.autor}
      </p>

      <p className={styles.page__date}>
        {artigo.data}
      </p>
    </main>
  );
}