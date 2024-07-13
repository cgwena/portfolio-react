import React from 'react'
import ReactPlayer from 'react-player'

import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Gwenaëlle</h1>
                <p className={styles.description}>Développeuse Fullstack</p>
                <a className={styles.contactBtn} href="mailto:cgenaelle@hotmail.com">Contactez-moi !</a>
            </div>
            <ReactPlayer url="/assets/hero/Gwenaelle_Bousses.mp4" controls />
        </section>
    )
}
