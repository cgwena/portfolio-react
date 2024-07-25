import React from 'react'
import ReactPlayer from 'react-player'

import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>Pour mieux me connaître...</h2>
            <ReactPlayer url="https://www.youtube.com/embed/M-jG7oF6kR8?si=Y1XPsy3b0gQw700L" controls />
        </section>
    )
}
