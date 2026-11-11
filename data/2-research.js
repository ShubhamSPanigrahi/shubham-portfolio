/* Research pillars, the model-to-deployment pipeline, and capability chains. */

const PILLARS=[
 {id:'multiphysics',n:'Multiphysics Modeling &amp; Digital Engineering',c:'var(--teal)',w:'var(--teal-wash)',
  icon:'<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
  blurb:'Computational models of transport in biological and food materials &mdash; airflow, heat, moisture, species transport, drying, aeration and coupled reaction&ndash;transport behaviour.',
  q:'How do air, heat and moisture actually move through a packed, anisotropic biological bulk &mdash; and where does conditioning fail?',
  m:'3D finite-volume CFD with anisotropic resistance; transient conjugate heat and mass transfer; finite-difference solvers; parallel computing',
  o:'Validated silo aeration and drying models, a commercial conditioning simulation tool, and control-oriented reduced models'},
 {id:'aiml',n:'AI/ML, Imaging &amp; Predictive Analytics',c:'var(--gold)',w:'var(--gold-wash)',
  icon:'<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4 6.6 15.8M12 7.4l5.4 8.4M7.4 18h9.2"/>',
  blurb:'Data-driven models that turn sensor, image, spectral and microbiological data into interpretable predictions of crop performance, food quality and safety.',
  q:'What can be predicted reliably &mdash; and how far can a model be trusted outside the conditions it was trained on?',
  m:'UAV LiDAR and multispectral fusion; hyperspectral imaging; deep learning; predictive microbiology; explainable AI',
  o:'Field-scale phenotyping models, growth and lag-phase predictors for quantitative risk assessment, and spectral quality classifiers'},
 {id:'systems',n:'Intelligent Food &amp; Agricultural Systems',c:'var(--rust)',w:'var(--rust-wash)',
  icon:'<path d="M5 12.5a7 7 0 0 1 14 0"/><path d="M8.5 15.5a3.5 3.5 0 0 1 7 0"/><circle cx="12" cy="18.5" r="1.4"/><path d="M2 9.5a11 11 0 0 1 20 0"/>',
  blurb:'Models, sensors, communications and control logic integrated into working systems for monitoring, decision support, automation and process optimisation.',
  q:'What has to be true for a model to run a fan, a conveyor or a dryer without someone watching it?',
  m:'IoT nodes and gateways; cloud-connected fan control; automated aeration; digital twins; imaging and robotic systems',
  o:'Deployed monitoring and automated aeration on commercial bins and outdoor sugar-beet piles; poultry inspection automation under development'},
 {id:'sustain',n:'Sustainability &amp; Technology Translation',c:'var(--ink-faint)',w:'var(--navy-wash)',
  icon:'<path d="M3 20h18"/><path d="M6 20V11M11 20V5M16 20v-6M21 20v-9"/>',
  blurb:'Whether a technology works scientifically is only half the question. I evaluate energy, emissions, life-cycle burden, cost and adoption.',
  q:'Does the better engineering option survive contact with energy prices, carbon accounting and an operator\'s schedule?',
  m:'Thermodynamic process modeling; LCA (OpenLCA); TEA (SuperPro Designer); energy and carbon accounting; automation-feasibility tooling',
  o:'Dryer sustainability comparisons with policy implications, carbon-footprint assessments of on-farm drying, and a poultry automation TEA toolkit'}
];

const STAGES=[
 {n:'Physical process',c:'#0B6B6B',w:'#E4F0EF',s:'Transport, reaction and quality change in a real bulk, bed or carcass.',
  d:'Everything starts with the mechanism. Airflow through an anisotropic grain bulk, heat and moisture moving between kernel and interstitial air, microbial lag under fluctuating temperature, or conduction between a plastic film and wet tissue. Getting the governing physics right is what keeps every later stage from being a curve fit.',
  tags:['Heat &amp; mass transfer','Fluid dynamics','Thermodynamics','Reaction kinetics','Psychrometrics']},
 {n:'Experimental &amp; sensor data',c:'#A9791C',w:'#F7EEDC',s:'Instrumented trials, imaging and field campaigns that anchor the model.',
  d:'A model without a measurement campaign behind it is a hypothesis. On-farm aeration trials, commercial bin CO&#8322; monitoring, UAV flights over breeding trials, hyperspectral acquisition, thermal image annotation and cereal-quality laboratory analysis all exist to give the model something to be wrong against.',
  tags:['On-farm trials','LiDAR &amp; multispectral','Hyperspectral','Thermal imaging','FTIR / NIR','Cereal quality lab']},
 {n:'Computational model',c:'#10263D',w:'#E8EDF2',s:'Numerical solution at a resolution the question actually requires.',
  d:'Finite-volume CFD with anisotropic resistance, transient conjugate heat and mass transfer, finite-difference reformulation for commercial tools, parallelisation with compiler directives, and mesh-convergence and validation studies. The aim is a model fast enough to be used, not just accurate enough to be published.',
  tags:['ANSYS','OpenFOAM','C / C++','HPC','PhysicsNeMo','EDEM']},
 {n:'AI / decision layer',c:'#B84B2A',w:'#FAE9E2',s:'Learned models and control logic that turn prediction into action.',
  d:'Machine-learning classifiers on fused spectral indices, deep learning on imagery, predictive microbiology for growth and lag, explainable AI for interrogable risk outputs, and the control logic that decides when a fan runs or a reject arm fires. This is where a simulation becomes a decision.',
  tags:['PyTorch','Explainable AI','Predictive microbiology','Digital twins','Control logic']},
 {n:'Deployment &amp; economics',c:'#0B6B6B',w:'#E4F0EF',s:'Does it survive energy prices, carbon accounting and an operator\'s schedule?',
  d:'Life-cycle assessment, techno-economic analysis, carbon and energy accounting, automation-feasibility tooling, extension reporting and standards work. A technology that is scientifically correct and operationally impossible has not been translated &mdash; it has only been described.',
  tags:['OpenLCA','SuperPro Designer','TEA','Carbon accounting','Extension &amp; standards']}
];

const CAPS=[
 {n:'Coupled transport modeling',tools:['ANSYS','OpenFOAM','C / C++','High-performance computing','NVIDIA PhysicsNeMo','EDEM','SolidWorks'],
  out:'Validated airflow, drying, thermal and moisture predictions for on-farm silos, commercial conditioning tools, dryers and poultry-processing geometries &mdash; including a parallelised 3D transient heat-and-moisture model and a finite-difference reformulation of a commercial grain-conditioning simulator.'},
 {n:'AI/ML &amp; scientific computing',tools:['Python','PyTorch','R','MATLAB','Spyder','PyCharm','Explainable AI'],
  out:'Crop-trait, food-safety, spectral and predictive models: UAV spectral-index fusion for physiological maturity, machine- and deep-learning maturity forecasting, and integrated growth and lag-phase prediction of <i>Listeria monocytogenes</i> for quantitative risk assessment.'},
 {n:'Imaging &amp; sensing',tools:['LiDAR','RGB','Multispectral','Hyperspectral','Thermal imaging','FTIR','NIR grain analyser'],
  out:'Phenotyping, quality, disease and contaminant detection &mdash; canopy height and lodging from aerial LiDAR, residue cover from multispectral imagery, a Raspberry&nbsp;Pi hyperspectral system for pea root rot and wheat minerals, and thermal segmentation of foreign material on poultry.'},
 {n:'Cyber-physical systems',tools:['IoT nodes','Gateways','Cloud systems','Azure Digital Twins','OPI Systems','AGI SureTrack','Bin-Sense'],
  out:'Monitoring, fan control and decision support running on commercial equipment: automated aeration for grain bins and outdoor sugar-beet piles, continuous CO&#8322; monitoring in commercial canola storage, and improvements to a commercial fan-control system and its output database.'},
 {n:'Sustainability &amp; economics',tools:['OpenLCA','SuperPro Designer','LCA','TEA','Carbon accounting','ROI tooling'],
  out:'Energy, carbon, cost, feasibility and ROI assessment &mdash; comparative sustainability of cross-, mixed- and double-flow dryers, specific-energy and carbon-cost analysis of in-bin drying with policy implications, and a techno-economic toolkit for poultry-automation feasibility.'},
 {n:'Experimental validation',tools:['Spectroscopy','Rapid Visco Analyser','Glutomatic','Farinograph','Twin-screw extruder','Cold plasma','Ozone systems'],
  out:'Model grounding and product-quality evaluation &mdash; milling and baking quality under on-farm high-temperature drying, pasting and gelling behaviour of flour blends, sorption isotherms and isosteric heat for feed barley, and non-thermal decontamination trials.'}
];
