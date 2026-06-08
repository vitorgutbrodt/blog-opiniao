import { Artigo } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css';

type Props = {
    artigo: Artigo;
}

const Card = ({artigo} : Props) => {
    const {id, título, autor, data, texto, imagem, link} = artigo;
    return (
        <div className={styles.card} key={id}>            
            <Image src={imagem} alt={`Foto de ${título}`} width={300} height={200} className={styles.card__image}/>
            <Link className={styles.card__name} href={link}>
                <h3>{título}</h3>
                <h4>{autor}</h4>
            </Link>            
            <p className={styles.card__text}>{texto}</p>
            <p>{data}</p>            
        </div>
    )
}

export default Card;