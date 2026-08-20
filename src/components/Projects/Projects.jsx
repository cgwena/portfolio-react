import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Projects.module.css'
// On importe directement les données depuis le fichier JSON
import projectsData from '../data/projects.json'
import { Link } from 'react-router-dom';

export const Projects = () => {
    // Création d'une copie du tableau inversée
    const reversedProjects = [...projectsData].reverse();

    return (
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Réalisations</h2>
            </div>

            <div className={styles.grid}>
                {/* On utilise maintenant reversedProjects au lieu de projectsData */}
                {reversedProjects.map((project) => (
                    <Link to={`/projet/${project.id}`} key={project.id} className={styles.card}>
                        <div key={project.id} className={styles.card}>
                            <img
                                className={styles.projectImage}
                                src={getImageUrl(project.image)}
                                alt={`Aperçu du projet ${project.title}`}
                            />

                            <div className={styles.overlay}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.tools}>
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className={styles.toolBadge}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </section>
    )
}