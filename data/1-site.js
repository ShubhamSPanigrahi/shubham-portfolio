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

/* ============================================================
   COMING SOON  —  the teaser card directly under the hero.
   Set show:false to hide the whole section.
   When the tool goes live, put its URL in href and the card
   gains a button; leave href empty while it is unreleased.
   ============================================================ */
const SOON={
  show:true,
  shot:'media/robotic-deboning-roi.png',
  shotAlt:'Header of the Robotic Deboning Return on Investment tool, showing the Center for Scalable and Intelligent Automation in Poultry Processing logo and the project funding line.',
  badge:'In development',
  title:'Robotic Deboning &mdash; Return on Investment (ROI) Tool',
  body:'An interactive techno-economic tool for evaluating whether robotic deboning pays in a given poultry processing operation &mdash; weighing capital outlay, throughput, yield and labour against payback period under the plant\'s own assumptions.',
  note:'Going online soon. Stay tuned.',
  meta:'USDA-NIFA AFRI &middot; Grant #2023-70442-39232 &middot; Sustainable Agricultural Systems Program<br>Center for Scalable &amp; Intelligent Automation in Poultry Processing (CSI-APP) &middot; University of Arkansas',
  href:'',
  linkText:'Open the preview'
};

