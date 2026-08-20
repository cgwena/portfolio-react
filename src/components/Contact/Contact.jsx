import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Prêt(e) à faire parler vos données ? N'hésitez pas à me contacter !</p>
            
            {/* Le rappel du bouton CV */}
            <a 
                href="/CV_Gwenaelle_Bousses.pdf" 
                download="CV_Gwenaelle_Bousses.pdf" 
                className={styles.cvButtonFooter}
            >
                Télécharger mon CV
            </a>
        </div>
        
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Icône Email" />
                <a href="mailto:cgwenaelle@hotmail.com">cgwenaelle@hotmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Icône LinkedIn" />
                {/* Ajout du _blank et du rel="noopener noreferrer" */}
                <a href="https://www.linkedin.com/in/gwenaelle-bousses" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/gwenaelle-bousses
                </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Icône GitHub" />
                <a href="https://github.com/cgwena" target="_blank" rel="noopener noreferrer">
                    github.com/cgwena
                </a>
            </li>
        </ul>
    </footer>
  )
}