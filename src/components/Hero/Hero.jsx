import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Gwenaëlle</h1>
                <p className={styles.description}>I'm a fullstack developper</p>
                <a className={styles.contactBtn} href="mailto:cgenaelle@hotmail.com">Contactez-moi !</a></div>
            <img className={styles.heroImg}src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
