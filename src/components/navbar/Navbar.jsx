import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    // Votre état existant pour le menu burger
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Les nouveaux états pour la gestion du scroll
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                // On cache la navbar quand on descend
                setShow(false);
                // UX : On referme le menu burger si la personne scroll vers le bas
                setMenuOpen(false); 
            } else {
                // On réaffiche la navbar quand on remonte
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        // On combine votre classe navbar avec la classe hidden dynamiquement
        <nav className={`${styles.navbar} ${show ? '' : styles.hidden}`}>
            <a className={styles.title} href="/">Gwenaëlle Boussès</a>
            
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                    alt="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)} 
                />
                
                <ul 
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`} 
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="/#about">À propos</a></li>
                    <li><a href="/#projects">Réalisations</a></li>
                    <li><a href="/#veille">Veille</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};