/* ============================================================
   COPY  —  every heading and paragraph on the page.
   This is the file to open when you want to reword something.
   Keys are in the order the sections appear on the site.
   HTML is allowed: <b>, <em>, <i>, <a href>, &mdash;, &ndash;, &nbsp;
   ============================================================ */

/* ---------- The top of the page ---------- */
const HERO={
  eyebrow:   'Computational + AI/ML Food &amp; Biosystems Engineer',
  headline:  'Engineering intelligent food and agricultural systems — from <em>physics</em> to <em>prediction</em> to <em>practice</em>.',   /* <em>…</em> renders in teal italic */
  positioning:'I combine multiphysics modeling, AI/ML, sensing, automation and techno-economic analysis to develop safer, more efficient and more sustainable food and biosystems technologies.',
  name:      'Shubham Subrot Panigrahi, Ph.D., P.Eng.',
  role:      'Postdoctoral Research Associate &middot; Department of Food Science, University of Arkansas'
};

/* ---------- Section headings and intros ----------
   Each block fills one section's eyebrow number, heading and intro paragraph.
   In 'publications', the braces are filled in automatically from your
   publication list, so keep them: {n} {lead} {recent} {from} {to}        */
const SECTIONS={
  research:{
    num:  '01 / Research',
    title:'Four pillars, one system',
    lede: 'My work moves along a single chain &mdash; understand the physics, learn from the data, build the system, then prove it pays. Select a pillar to see the questions, methods and outputs behind it.'
  },
  work:{
    num:  '02 / Selected work',
    title:'Flagship case studies',
    lede: 'Six programmes spanning stored-grain physics, aerial crop sensing, predictive food safety, cyber-physical control, process sustainability and poultry automation. Open any card for the problem, my role, the methods and the results.'
  },
  pipeline:{
    num:  '03 / Approach',
    title:'From scientific model to usable system',
    lede: 'The signature of every project I run: no stage stands alone, and the last one decides whether the first four mattered.'
  },
  lab:{
    num:  '04 / Interactive',
    title:'Aeration dead-zone explorer',
    lede: 'Airflow through a peaked grain bulk is anisotropic and uneven: resistance rises with bed depth and with the horizontal path length through packed kernels, so the lower outer corners starve first. Move the controls and watch where the bulk stops being conditioned.'
  },
  publications:{
    num:  '05 / Publications',
    title:'{n} published refereed articles',
    lede: 'Spanning multiphysics modeling, AI-enabled sensing, food safety, drying and storage, sustainable processing and automation &mdash; {lead} of them first- or corresponding-authored, and {recent} published in {from}&ndash;{to}. Search by title, or filter by year, topic and authorship role.'
  },
  methods:{
    num:  '06 / Methods',
    title:'Capability chains, not a logo wall',
    lede: 'Each capability is listed with the tools it runs on and the outcome it has actually produced in published or funded work.'
  },
  translation:{
    num:  '07 / Translation',
    title:'Funding, industry and deployment',
    lede: 'Funded, submitted and evaluated work is listed separately and in its original currency &mdash; no aggregated totals.'
  },
  teaching:{
    num:  '08 / Teaching &amp; leadership',
    title:'Mentoring, teaching and professional service',
    lede: 'Five current mentees at the University of Arkansas, plus three co-supervised on the Prince Edward Island collaboration, two credit courses developed and taught, and elected service across ASABE communities and journal editorial boards.'
  },
  about:{
    num:  '09 / About',
    title:'A path from food process engineering to computational systems',
    lede: 'I am a food and biosystems engineer trained across food process engineering, mechanical and manufacturing engineering, computational modeling and data science. My research has progressed from understanding grain-storage ecosystems to building intelligent sensing, food-safety and automation technologies with academic, government, producer and industry partners.'
  },
};

/* ---------- The closing block and footer ---------- */
const CONTACT={
  title:'Let\'s build something that leaves the lab.',
  body: 'Interested in computational food engineering, intelligent automation or translational research? I collaborate with universities, government research centres, producer groups and industry R&amp;D teams &mdash; on modeling studies, sensing and automation projects, and feasibility work that has to stand up economically.'
};
const FOOTER={ location:'Fayetteville, Arkansas, USA' };

/* ---------- The side panels ----------
   Each entry is the full contents of one boxed panel, markup and all.
   Reword freely; keep the tags balanced. <li> is one bullet,
   <dt>/<dd> is one label-and-text row.                                   */
const PANELS={

  /* Under review & in preparation */
  underReview: `<h3>Under review &amp; in preparation</h3>
        <ul>
          <li><b>From Gamma Models to Explainable AI:</b> A Comparative Framework for Predicting <i>Listeria monocytogenes</i> Growth in Ready-to-Eat Meat Products &mdash; <i>Food Research International</i> (under review)</li>
          <li><b>Effects of Infrared-assisted Hot-air Drying</b> on the Chamomile Bioactive Substances &mdash; <i>Food Science and Biotechnology</i> (under review)</li>
          <li><b>Advances in Computer Simulation and Modeling for In-bin Grain Management</b> &mdash; book chapter, CRC Press (under review)</li>
          <li><b>Low Temperature Drying for an Advanced On-Farm In-Bin Grain Management System</b> &mdash; book chapter, CRC Press (in preparation)</li>
        </ul>`,

  /* Beyond journal articles */
  beyondJournals: `<h3>Beyond journal articles</h3>
        <dl class="kv">
          <dt>Book chapters</dt><dd>3 published &mdash; robotics for material handling in food plants; nanoedible coatings for dairy matrices; nanosensors in food safety</dd>
          <dt>Conference papers</dt><dd>7 peer-reviewed proceedings papers (ASABE, CSBE/SCGAB, CAF 2020 &amp; 2024)</dd>
          <dt>Editorial</dt><dd>Editorial Advisory Board, <i>Journal of Stored Products Research</i> (2026&ndash;); Associate Editor, ASABE Processing Systems (2025&ndash;)</dd>
          <dt>Guest editing</dt><dd><i>Frontiers in Food Science &amp; Technology</i>; <i>Foods</i>; cutting-edge grain drying special issue (2024&ndash;26)</dd>
          <dt>Peer review</dt><dd>40+ reviews for <i>J. Stored Products Research</i>; 10+ each for <i>Computers &amp; Electronics in Agriculture</i> and <i>Drying Technology</i>; 5+ each for <i>J. of the ASABE</i> and <i>Applied Engineering in Agriculture</i></dd>
        </dl>`,

  /* Computing & software */
  computing: `<h3>Computing &amp; software</h3>
        <dl class="kv">
          <dt>Simulation</dt><dd>ANSYS, OpenFOAM, EDEM, SolidWorks, NVIDIA PhysicsNeMo, high-performance computing</dd>
          <dt>ML / DL</dt><dd>PyTorch, Python, Spyder, PyCharm, R, MATLAB</dd>
          <dt>Languages</dt><dd>C, C++, Python, R, Visual Basic</dd>
          <dt>LCA / TEA</dt><dd>OpenLCA, SuperPro Designer</dd>
          <dt>Cyber-physical</dt><dd>Microsoft Azure Digital Twins, IoT nodes and gateways, cloud fan control</dd>
          <dt>Statistics</dt><dd>OriginPro, Design-Expert, Aspen Unscrambler, SPSS, MiniTab</dd>
        </dl>`,

  /* Experimental & industrial */
  experimental: `<h3>Experimental &amp; industrial</h3>
        <dl class="kv">
          <dt>Spectroscopy</dt><dd>FTIR, NIR grain analyser, multispectral and hyperspectral imaging systems, LiDAR</dd>
          <dt>Analysis</dt><dd>LECO protein analyser, HPLC, Rapid Visco Analyser, texture analyser, DSC</dd>
          <dt>Cereal quality</dt><dd>Glutomatic, Falling Number, Farinograph, Extensograph, Alveograph</dd>
          <dt>Processing</dt><dd>Twin-screw extruder, HTST pasteurisation, spray dryer, cold plasma, ozone systems</dd>
          <dt>Grain industry</dt><dd>High-temperature dryers, supplemental heaters, automated fan controls, OPI Systems, AGI SureTrack, GSI, Bin-Sense</dd>
          <dt>Almond industry</dt><dd>Moisture Content Programmable Computer, TOMRA sorters, Qcify in-line monitoring, hullers, graders</dd>
        </dl>`,

  /* Industry & producer partners */
  partners: `<h3>Industry &amp; producer partners</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.65;margin-bottom:14px">Work delivered with and for organisations that run the equipment, not only for the literature.</p>
        <div class="caplist">
          <span class="captag">OPI Systems Inc.</span><span class="captag">Lantic Sugars Inc.</span>
          <span class="captag">Cavendish Farms</span><span class="captag">KOTZUR Pty. Ltd.</span>
          <span class="captag">Amber Agriculture</span><span class="captag">Oxidation Technologies LLC</span>
          <span class="captag">AGI</span><span class="captag">Alberta Grains</span>
          <span class="captag">Sask. Wheat Development Commission</span><span class="captag">Alberta Pulse Growers</span>
          <span class="captag">Potato Growers of Alberta</span><span class="captag">Brightlight Agribusiness</span>
          <span class="captag">Protein Industries Canada</span><span class="captag">PAMI</span>
        </div>`,

  /* Deployment experience */
  deployment: `<h3>Deployment experience</h3>
        <ul>
          <li>On-farm bins of <b>5,000&ndash;50,000 bushel</b> capacity with 3&ndash;40&nbsp;hp fans, direct and indirect supplemental heaters</li>
          <li><b>Mixed-flow, cross-flow and double-flow</b> high-temperature dryers running on bio-fuels, propane and natural gas</li>
          <li><b>Automated fan control</b> for grain bins and outdoor sugar-beet piles via IoT nodes, gateways and cloud systems</li>
          <li><b>Extension delivery:</b> invited speaker at the 2026 Grain Bin School (NERREC, Harrisburg, Arkansas) on &ldquo;Is Your Grain Bin Talking?&rdquo;; three agriculture field days organised, technical talks to farmer and industry audiences, extension reports for Alberta Grains and the Saskatchewan Wheat Commission</li>
          <li><b>Standards:</b> committee member updating ASABE D245.7 moisture-relationship standards</li>
        </ul>`,

  /* Current mentees */
  mentees: `<h3>Current mentees</h3>
          <p style="font-size:14px;color:var(--ink-soft);line-height:1.65;margin-bottom:16px">Co-supervising at the University of Arkansas with emphasis on experimental design, data analysis, modeling, publication and professional development.</p>
          <dl class="kv">
            <dt>2 &times; Ph.D.</dt><dd>Multiphysics modeling and predictive microbiology</dd>
            <dt>2 &times; M.S.</dt><dd>Ozone treatment for seed and grain quality; experimental and CFD modeling of ozone transport in deep grain beds</dd>
            <dt>1 &times; B.S.</dt><dd>Senior undergraduate researcher</dd>
            <dt>Also</dt><dd>Co-supervising a third-year undergraduate, a master's and a Ph.D. student on CFD of potato-storage aeration (UPEI collaboration)</dd>
          </dl>`,

  /* Courses developed & taught */
  courses: `<h3>Courses developed &amp; taught</h3>
          <ul>
            <li><b>AGS4483 &mdash; Harvest and Crop Storage Technology</b> (3.0 credit, + lab): harvesting and storage equipment technology, with core thermodynamics, psychrometrics, heat and mass transfer and fluid dynamics. Real data sets evaluated to make agronomic recommendations.</li>
            <li><b>AGS3382 &mdash; Telematics and Sensors</b> (3.0 credit, + lab): sensing technologies for yield monitoring and decision-making, telematics, communication technologies, sensor integration and variable-rate technology.</li>
            <li>Assisting in the development of graduate-level courses on food safety engineering and circular bioeconomy at the University of Arkansas.</li>
          </ul>`,

  /* Professional service & leadership */
  servicePanel: `<h3>Professional service &amp; leadership</h3>
        <div class="tl" id="service" style="margin-top:6px"></div>`,

  /* Recognition */
  recognition: `<h3>Recognition</h3>
          <ul>
            <li><b>P.Eng.</b> &mdash; Association of Professional Engineers and Geoscientists of Alberta (APEGA), 2025&ndash;</li>
            <li><b>People's Choice Award in STEM</b>, 2020 &mdash; three-minute Ph.D. thesis presentation, Australia</li>
            <li><b>SAGIT additional research funding</b> (AUD 35,000) and travel funding (AUD 5,000) for the Ph.D., 2019</li>
            <li><b>Australian Government Research Training Program International Scholarship</b> with Higher Degree Research fee offset, 2018</li>
            <li><b>Prime Minister's Scholarship</b>, India &mdash; full undergraduate studies, 2013</li>
            <li><b>Alberta Machine Intelligence Institute (AMII)</b> certifications, 2022&ndash;</li>
          </ul>`,
};
