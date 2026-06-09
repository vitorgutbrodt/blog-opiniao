"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/app/components/title";
import { API_URL } from "@/lib/api/axios";

export default function NovoArtigo() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const artigo = {
            titulo: formData.get("titulo"),
            autor: formData.get("autor"),
            data: formData.get("data"),
            texto: formData.get("texto"),
            imagem: formData.get("imagem"),
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(artigo),
            });

            const data = await response.json();

            console.log(data);

            event.currentTarget.reset();
        } catch (error) {
            console.error("Erro ao criar artigo:", error);
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