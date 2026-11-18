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

  /* Hero animation. A looping montage of simulation output: the cold-air
     curtain pathlines, pressure and velocity contours, the 24 h humidity
     transition, the V-duct configurations and the discretised domain.
     Delete this heroVideo block to fall back to heroFigure below it, or
     delete both to bring back the animated silo schematic.                 */
  heroVideo:{
    src:'media/hero-simulations.mp4',
    poster:'media/hero-simulations-poster.jpg',
    alt:'Looping montage of computational fluid dynamics results: air-curtain pathlines, pressure and velocity contours, humidity transition and meshed grain configurations.',
    label:'Simulation reel &mdash; CFD &amp; multiphysics',
    sublabel:'Ansys Fluent &middot; finite-volume models',
    credit:'Panigrahi et al., 2019&ndash;2026'
  },

  /* Fallback still, used only if the video above is removed or fails. */
  heroFigure:{
    src:'media/uav-dry-bean-field.jpg',
    alt:'UAV in flight over a dry bean breeding trial, and the multispectral and LiDAR payload on its landing pad.',
    label:'UAV phenotyping &mdash; dry bean trial',
    sublabel:'LiDAR + multispectral payload',
    credit:'Panigrahi et al. (2025) Sensors 25(11), 3535 &mdash; CC BY'
  }
};
