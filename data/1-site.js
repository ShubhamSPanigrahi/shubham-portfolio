/* ============================================================
   SITE  —  the things you change most often.
   Edit this file, commit, and Netlify redeploys in under a minute.
   ============================================================ */

const LAST_UPDATED={label:'November 2026', iso:'2026-11-18'};

/* Mentees shown on the homepage counter. Six at the University of Arkansas
   (three current Ph.D., two M.S. and one B.S. now graduated). The three
   co-supervised on the Prince Edward Island collaboration are described in
   the Teaching section rather than counted here.                          */
const MENTEES=6;

const SITE={
  /* Hero portrait. Square JPG/PNG in media/. '' falls back to the SP monogram. */
  portrait:'media/headshot.jpg',
  portraitAlt:'Shubham Subrot Panigrahi',

  /* Hero figure. Replaces the animated silo schematic with a real figure.
     Delete this whole heroFigure block (or set src:'') to bring the
     animation back.                                                        */
  heroFigure:{
    src:'media/uav-dry-bean-field.jpg',
    alt:'UAV in flight over a dry bean breeding trial, and the multispectral and LiDAR payload on its landing pad.',
    label:'UAV phenotyping &mdash; dry bean trial',
    sublabel:'LiDAR + multispectral payload',
    credit:'Panigrahi et al. (2025) Sensors 25(11), 3535 &mdash; CC BY'
  }
};
