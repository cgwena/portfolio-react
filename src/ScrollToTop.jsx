import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // On récupère le chemin de la page ET l'ancre (hash)
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Cas 1 : S'il y a une ancre dans l'URL (ex: #about)
    if (hash) {
      // On utilise un petit délai (setTimeout) pour laisser le temps à React 
      // de charger la page d'accueil avant de chercher l'élément
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } 
    // Cas 2 : Changement de page classique sans ancre, on remonte en haut
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};