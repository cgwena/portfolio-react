import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developper</h3>
                            <p>I'm a frontend developper with experience in building resposive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developper</h3>
                            <p>I have experience developing fast and optimized back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
