"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/app/components/title";
import { API_URL } from "@/lib/api/axios";

export default function NovoArtigo() {

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const artigo = {
        titulo: formData.get("titulo") as string,
        autor: formData.get("autor") as string,
        data: formData.get("data") as string,
        texto: formData.get("texto") as string,
        imagem: formData.get("imagem") as string,
    };

    if (
        !artigo.titulo.trim() ||
        !artigo.autor.trim() ||
        !artigo.data.trim() ||
        !artigo.texto.trim() ||
        !artigo.imagem.trim()
    ) {
        alert("Preencha todos os campos antes de publicar o artigo.");
        return;
    }

    try {
        const response = await API_URL.post("/artigos", artigo);

        console.log("Artigo criado:", response.data);

        alert("Artigo publicado com sucesso!");
        form.reset();

    } catch (error) {
        console.error("Erro ao criar artigo:", error);
        alert("Ocorreu um erro ao publicar o artigo.");
    }
}

    return (
        <>
        <Link href="/" className={styles.link}>
        <button className={styles.page__returnbutton}>VOLTAR</button>
        </Link>
        <Title title="Crie um novo artigo!" />
        <form className={styles.page__form} onSubmit={handleSubmit}>
            <label htmlFor="titulo" className={styles.page__label}>Título:</label>
            <input type="text" id="titulo" name="titulo" className={styles.page__input} />

            <label htmlFor="autor" className={styles.page__label}>Autor:</label>
            <input type="text" id="autor" name="autor" className={styles.page__input} />

            <label htmlFor="data" className={styles.page__label}>Data:</label>
            <input type="date" id="data" name="data" className={styles.page__input} />

            <label htmlFor="texto" className={styles.page__label}>Texto:</label>
            <textarea id="texto" name="texto" className={styles.page__textarea}></textarea>

            <label htmlFor="imagem" className={styles.page__label}>Imagem:</label>
            <input type="url" id="imagem" name="imagem" className={styles.page__input} />

            <button type="submit" className={styles.page__button}>PUBLICAR</button>
        </form>
        </>
    );
}