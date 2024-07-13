import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell free to reach out</p>
        </div>
        <ul  className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:cgwenaelle@hotmail.com">cgwenaelle@hotmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/gwenaelle-bousses" target='blank'>www.linkedin.com/in/gwenaelle-bousses</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/cgwena" target='blank'>https://github.com/cgwena</a>
            </li>
        </ul>
    </footer>
  )
}
