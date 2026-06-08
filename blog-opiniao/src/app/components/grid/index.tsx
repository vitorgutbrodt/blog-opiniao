import Card from "@/app/components/card";
import { Artigo } from "@/types/types";
import styles from './grid.module.css';

type Props = {
    artigos: Artigo[]
}

const Grid = ({artigos} : Props) => {
    return(
        <section className={styles.grid}>
            {artigos.map(artigo => <Card key={artigo.id} artigo={artigo}/>)}
        </section>
    )
}

export default Grid;