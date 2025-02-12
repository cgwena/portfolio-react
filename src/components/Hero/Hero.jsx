import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Gwenaëlle</h1>
                <div className={styles.about}>
                    <img className={styles.aboutImg} src={getImageUrl("about/Gwenaelle_Bousses.jpg")} alt="Me sitting with a laptop" />
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    <img className={styles.arrow1} src={getImageUrl("about/arrow_white.svg")} alt="" />
                                    <img className={styles.logo} src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                                    <div className={styles.cardText}>
                                        <h3>Développeuse Front-End</h3>
                                        <p>Je construis des sites optimisés et adaptés à tous les formats.</p>
                                    </div>
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img className={styles.logo} src={getImageUrl("skills/html.png")} alt="logo html" />
                                    <img className={styles.logo} src={getImageUrl("skills/css.png")} alt="logo css" />
                                    <img className={styles.logo} src={getImageUrl("skills/js.png")} alt="logo javascript" />
                                    <img className={styles.logo} src={getImageUrl("skills/react.png")} alt="logo react" />
                                    <img className={styles.logo} src={getImageUrl("skills/angular.png")} alt="logo html" />
                                    <img className={styles.logo} src={getImageUrl("skills/figma.png")} alt="logo figma" />
                                </div>
                            </div>
                        </li>

                        <li className={styles.aboutItem}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    <img className={styles.arrow2} src={getImageUrl("about/arrow_white.svg")} alt="" />
                                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />

                                    <div className={styles.cardText}>
                                        <h3>Développeuse Back-End</h3>
                                        <p>Je sais construire et gérer des bases de données et des APIs sécurisées.</p>
                                    </div>
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img className={styles.logo} src={getImageUrl("skills/python.png")} alt="logo python" />
                                    <img className={styles.logo} src={getImageUrl("skills/mongodb.png")} alt="logo mongodb" />
                                    <img className={styles.logo} src={getImageUrl("skills/node.png")} alt="logo node.js" />
                                    <img className={styles.logo} src={getImageUrl("skills/php.png")} alt="logo php" />
                                    <img className={styles.logo} src={getImageUrl("skills/mysql.png")} alt="logo mysql" />

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <a className={styles.contactBtn} href="mailto:cgenaelle@hotmail.com">Contactez-moi !</a>

            </div>

        </section >
    )
}
