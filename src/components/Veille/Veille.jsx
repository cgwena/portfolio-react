import React from 'react'
import styles from './Veille.module.css'

export const Veille = () => {
    return (
        <section className={styles.container} id="veille">
            <div className={styles.header}>
                <h2 className={styles.title}>Veille Technologique & Métier</h2>
                <p className={styles.description}>
                    Garantir la pertinence de mes analyses passe par une mise à jour constante sur la Modern Data Stack et les meilleures pratiques du secteur.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Bloc 1 : Les Sources */}
                <div className={styles.card}>
                    <h3>Mes Sources</h3>
                    <ul>
                        <li><strong>Newsletters spécialisées :</strong> Data News, Towards Data Science.</li>
                        <li><strong>Communautés :</strong> Documentation officielle et forums (Power BI, dbt Community).</li>
                        <li><strong>Réseaux professionnels :</strong> Suivi d'experts Data sur LinkedIn et GitHub.</li>
                    </ul>
                </div>

                {/* Bloc 2 : Thématiques suivies */}
                <div className={styles.card}>
                    <h3>Thématiques Actuelles</h3>
                    <ul>
                        <li><strong>Data Engineering :</strong> Évolution des outils de transformation (ELT) et d'orchestration (dbt, Airflow).</li>
                        <li><strong>Data Visualisation :</strong> Nouvelles fonctionnalités Power BI et accessibilité des dashboards.</li>
                        <li><strong>Data Quality :</strong> Méthodes de fiabilisation et tests automatisés sur les pipelines SQL/Python.</li>
                    </ul>
                </div>

                {/* Bloc 3 : Critères de sélection */}
                <div className={styles.card}>
                    <h3>Critères de Choix des Outils</h3>
                    <ul>
                        <li><strong>Communauté & Support :</strong> Une documentation riche et une communauté active pour faciliter la résolution de problèmes.</li>
                        <li><strong>Interopérabilité :</strong> Capacité de l'outil à s'intégrer fluidement dans une stack existante.</li>
                        <li><strong>Courbe d'apprentissage :</strong> Prise en main par les équipes métiers pour garantir l'adoption des solutions.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}