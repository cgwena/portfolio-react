import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImageUrl } from '../../utils';
import projectsData from '../data/projects.json';
import styles from './ProjectDetails.module.css';
import ReactMarkdown from 'react-markdown';

export const ProjectDetails = () => {
    // On récupère l'ID depuis l'URL
    const { id } = useParams();
    
    // On cherche le projet correspondant dans le fichier JSON
    const project = projectsData.find((p) => p.id === id);

    // Si on tape une mauvaise URL ou que le projet n'existe pas
    if (!project) {
        return (
            <div className={styles.container}>
                <h2>Projet introuvable</h2>
                <Link to="/" className={styles.backButton}>← Retourner à l'accueil</Link>
            </div>
        );
    }

    // On extrait les détails pour alléger le code
    const { details } = project;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>← Retour au portfolio</Link>
            
            <h1 className={styles.title}>{project.title}</h1>
            
            <div className={styles.toolsContainer}>
                {project.tools.map((tool, index) => (
                    <span key={index} className={styles.toolBadge}>{tool}</span>
                ))}
            </div>
                {(project.github || project.demo) && (
                <div className={styles.linksContainer}>
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.actionButton}
                        >
                            Voir le code sur GitHub
                        </a>
                    )}
                    
                    {/* J'ai anticipé un bouton "Démo" au cas où vous auriez un site web ou un dashboard Power BI en ligne ! */}
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.actionButton}
                            style={{ backgroundColor: 'transparent', border: '1px solid var(--color-text)', color: 'var(--color-text)' }}
                        >
                            Voir le projet en ligne
                        </a>
                    )}
                </div>
            )}
            
            <img 
                className={styles.bannerImage} 
                src={getImageUrl(project.image)} 
                alt={project.title} 
            />
            
            {/* On vérifie que 'details' existe avant d'afficher les sections */}
            {details && (
                <div className={styles.contentWrapper}>
                    
                    {/* 1. Contexte */}
                    {details.context && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{details.context.title}</h2>
                            {details.context.intro && (
                                <div className={styles.sectionText}>
                                    <ReactMarkdown>{details.context.intro}</ReactMarkdown>
                                </div>
                            )}
                            {details.context.items && (
                                <ul>
                                    {details.context.items.map((item, index) => (
                                        <li key={index} className={styles.sectionText}>
                                            <ReactMarkdown>{item}</ReactMarkdown>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    {/* 2. Données */}
                    {details.data && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{details.data.title}</h2>
                            <div className={styles.sectionText}>
                                <ReactMarkdown>{details.data.text}</ReactMarkdown>
                            </div>
                        </section>
                    )}

                    {/* 3. Démarche et outils */}
                    {details.methodology && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{details.methodology.title}</h2>
                            {details.methodology.items && (
                                <ul>
                                    {details.methodology.items.map((item, index) => (
                                        <li key={index} className={styles.sectionText}>
                                            <ReactMarkdown>{item}</ReactMarkdown>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    {/* 4. Résultats et recommandations */}
                    {details.results && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{details.results.title}</h2>
                            {details.results.intro && (
                                <div className={styles.sectionText}>
                                    <ReactMarkdown>{details.results.intro}</ReactMarkdown>
                                </div>
                            )}
                            {details.results.items && (
                                <ul>
                                    {details.results.items.map((item, index) => (
                                        <li key={index} className={styles.sectionText}>
                                            <ReactMarkdown>{item}</ReactMarkdown>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                        
                    )}

                    {details.limites && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{details.limites.title}</h2>
                            
                            {details.limites.intro && (
                                <div className={styles.sectionText}>
                                    <ReactMarkdown>{details.limites.intro}</ReactMarkdown>
                                </div>
                            )}
                            
                            {details.limites.items && (
                                <ul>
                                    {details.limites.items.map((item, index) => (
                                        <li key={index} className={styles.sectionText}>
                                            <ReactMarkdown>{item}</ReactMarkdown>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}
                </div>
            )}
        </div>
    );
};