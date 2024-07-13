import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div>                
                    <img className={styles.aboutImg} src={getImageUrl("about/Gwenaelle_Bousses.jpg")} alt="Me sitting with a laptop" />
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Développeuse Front-End</h3>
                            <p>Je suis développeuse Front-End et je construis des sites optimisés et adaptés à tous les formats.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Développeuse Back-End</h3>
                            <p>Je sais construire et gérer des bases de données et des APIs sécurisées.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}
