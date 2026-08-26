import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // useLocation permet d'écouter les changements d'URL
  const { pathname } = useLocation();

  useEffect(() => {
    // À chaque fois que l'URL change, on force le scroll tout en haut
    window.scrollTo(0, 0);
  }, [pathname]); // Le useEffect se déclenche quand 'pathname' change

  // Ce composant n'affiche rien visuellement
  return null;
};