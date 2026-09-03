import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>À propos de moi</h2>
            <div className={styles.content}>
                <img
                    className={styles.aboutImg}
                    src={getImageUrl("about/Gwenaelle_Bousses.png")}
                    alt="Gwenaëlle Boussès - Data Analyst"
                />
                <div className={styles.textContent}>
                    <p>
                        Je suis Gwenaëlle, Data Analyst passionnée par l'accompagnement des organisations qui souhaitent exploiter pleinement le potentiel de leurs données.
                    </p>
                    <p>
                        De la réflexion initiale sur les indicateurs à mesurer, en passant par la structuration et la modélisation (via Python, SQL et dbt), jusqu'à la restitution visuelle sous Power BI, j'interviens sur l'ensemble de la chaîne de valeur. Mon objectif est de fiabiliser chaque étape du processus pour permettre à vos équipes de prendre des décisions éclairées, basées sur des faits concrets.
                    </p>
                    <p>
                        Forte de mon expérience passée dans l'enseignement, j'attache une importance primordiale à la clarté et à la transmission. J'accompagne ainsi mes interlocuteurs dans la prise en main des tableaux de bord et je partage les meilleures pratiques en matière de data visualisation pour rendre la donnée accessible à tous.
                    </p>
                </div>
            </div>
        </section>
    )
} 
