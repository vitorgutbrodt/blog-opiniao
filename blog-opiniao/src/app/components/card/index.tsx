import Artigo from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css';

type Props = {
    artigo: Artigo;
}

const Card = ({artigo} : Props) => {
    const { _id, titulo, autor, data, texto, imagem} = artigo;

    return (
        <div className={styles.card} key={_id}>            
            {imagem && (
            <Image src={imagem} alt={`Foto de ${titulo}`} width={300} height={200} className={styles.card__image}/>
        )}
            <Link className={styles.card__name} href={`/artigos/${_id}`}>
                <h3>{titulo}</h3>                
            </Link>        
                <h4 className={styles.card__autor}>{autor}</h4>    
            <p className={styles.card__text}>{texto}</p>
            <p className={styles.card__date}>{data}</p>            
        </div>
    )
}

export default Card;