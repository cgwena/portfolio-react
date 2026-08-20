import React from 'react'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heroText}>
                    <div>
                        <h1 className={styles.title}>
                            Structurer, analyser et présenter les données.
                        </h1>
                        <p className={styles.description}>
                            De la fiabilisation des bases de données à la création de tableaux de bord interactifs pour piloter vos décisions métiers.
                        </p>
                    </div>
                </div>

                <div className={styles.actionContainer}>
                    <a
                        href="/CV_Gwenaelle_Bousses.pdf"
                        download="CV_Gwenaelle_Bousses.pdf"
                        className={styles.cvButton}
                    >
                        Télécharger mon CV
                    </a>
                </div>

                <div className={styles.pillars}>
                    {/* Pilier 1 */}
                    <div className={styles.pillar}>
                        <img className={styles.pillarIcon} src="/assets/about/structurer.png" alt="structurer" title="structurer" />
                        <h3>1. Structurer</h3>
                        <p>
                            Création de pipelines de données robustes, nettoyage et modélisation (ETL/ELT) pour garantir la qualité de l'information.
                        </p>
                        <div className={styles.toolsIconContainer}>
                            <img className={styles.toolIcon} src="/assets/about/python.png" alt="Python" title="Python" />
                            <img className={styles.toolIcon} src="/assets/about/sql.svg" alt="SQL" title="SQL" />
                            <img className={styles.toolIcon} src="/assets/about/dbt.svg" alt="dbt" title="dbt" />
                        </div>
                    </div>
                    {/* Pilier 2 */}
                    <div className={styles.pillar}>
                        <img className={styles.pillarIcon} src="/assets/about/analyser.png" alt="Analyser" title="Analyser" />
                        <h3>2. Analyser</h3>
                        <p>
                            Exploration approfondie des jeux de données et modélisation statistique pour en extraire des modèles exploitables.
                        </p>
                        <div className={styles.toolsIconContainer}>
                            <img className={styles.toolIcon} src="/assets/about/pandas.svg" alt="Pandas" title="Pandas" />
                            <img className={styles.toolIcon} src="/assets/about/r.svg" alt="R" title="R" />
                        </div>
                    </div>

                    {/* Pilier 3 */}
                    <div className={styles.pillar}>
                        <img className={styles.pillarIcon} src="assets/about/visualiser.png" alt="Visualiser" title="Visualiser" />
                        <h3>3. Visualiser</h3>
                        <p>
                            Conception de rapports clairs et ergonomiques, restitution d'indicateurs de performance clés (KPIs) orientés utilisateurs.
                        </p>
                        <div className={styles.toolsIconContainer}>
                            <img className={styles.toolIcon} src="assets/about/powerbi.svg" alt="Power BI" title="Power BI" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}