/* Flagship case studies. See README section "Adding a photo or video" for the media field. */

const CASES=[
 {id:'cfd',pillar:'multiphysics',tag:'Multiphysics &amp; CFD',t:'CFD and Digital Engineering for Stored-Grain Systems',
  thumb:'media/fig-bioseng2021-3.jpg',   /* real image for the card; falls back to the drawn illustration if absent */
  ac:'#0B6B6B',aw:'#E4F0EF',status:'Published',vis:'silo',
  teaser:'Predicting how air, heat and moisture move through stored grain &mdash; and turning those predictions into better aeration and control decisions.',
  tags:['3D finite-volume CFD','Anisotropic resistance','Transient heat &amp; moisture','Parallel computing'],
  kpi:{v:'65%',l:'reduction in average lower-region dead-zone proportion with a 5&nbsp;kW fan, modelled 1,000&nbsp;t silo'},
  problem:'Airflow through a peaked grain bulk is neither uniform nor isotropic. Resistance depends on bed depth and on the direction of travel through packed kernels, so large regions of a silo &mdash; typically the lower outer corners &mdash; can receive almost no conditioning air. Grain in those dead zones keeps its moisture and temperature, and that is where spoilage and insect activity begin.',
  role:'Lead researcher and Ph.D. researcher. I built the numerical model, implemented the anisotropic resistance formulation, parallelised the solver and ran the validation campaign against on-farm aeration trials in South Australia.',
  methods:['3D finite-volume CFD of airflow through peaked grain bulks with direction-dependent resistance components','Transient conjugate heat and moisture transfer across the grain ecosystem','Solver parallelisation using compiler directives, with a study of how discretisation choice affects solution efficacy','Finite-difference reformulation of a commercial conditioning simulation tool (PHAST model)','On-farm validation trials and mesh-convergence studies'],
  results:[{v:'65%',l:'Lower-region dead-zone reduction with a 5&nbsp;kW fan in a modelled 1,000&nbsp;t silo'},{v:'6',l:'Peer-reviewed articles on stored-grain CFD, aeration and numerical modeling'},{v:'3D',l:'Transient coupled heat&ndash;moisture model, parallelised for HPC'}],
  pubs:[{t:'Strategies to mitigate dead-zones in on-farm stored grain silos fitted with aeration ducting modelled using CFD',j:'Biosystems Engineering 205, 93&ndash;104 (2021)',d:'10.1016/j.biosystemseng.2021.02.013'},
        {t:'CFD modelling of physical velocity and anisotropic resistance components in a peaked stored grain with aeration ducting systems',j:'Computers and Electronics in Agriculture 179, 105820 (2020)',d:'10.1016/j.compag.2020.105820'},
        {t:'A 3D transient CFD model to predict heat and moisture transfer in on-farm stored grain silo through parallel computing',j:'Drying Technology (2022)',d:'10.1080/07373937.2022.2121284'}],
  value:'Academic depth in coupled transport, and direct industrial relevance for silo design, aeration scheduling and digital twins.',
  media:[
    {type:'image', src:'media/fig-bioseng2021-3.jpg', wide:true,
     caption:'Stored grain configurations formed with V-shaped aeration ducts: (a) levelled; (b) 16&nbsp;t; (c) 32&nbsp;t; (d) 48&nbsp;t; (e) 80&nbsp;t; (f) 158&nbsp;t cored grain. Figure 3, <i>Biosystems Engineering</i> 205, 93&ndash;104 (2021).'},
    {type:'image', src:'media/fig-dt2019-1.jpg',
     caption:'Grain bulk discretised into a three-dimensional domain of tetrahedral and hexahedral elements, showing the finite set of points at which the governing PDEs are allocated and solved. Figure 1, <i>Drying Technology</i> 38(13), 1677&ndash;1697 (2019).'},
    {type:'image', src:'media/fig-dt2019-3.jpg',
     caption:'Factors and parameters affecting the thermo-physical phenomena in an on-farm grain storage silo. Figure 3, <i>Drying Technology</i> 38(13), 1677&ndash;1697 (2019).'},
    {type:'image', src:'media/fig-dt2019-5.jpg',
     caption:'A sector of a cylindrical silo divided into a finite number of spatial elements &mdash; radial (r), circumferential (n) and vertical (m). Figure 5, <i>Drying Technology</i> 38(13), 1677&ndash;1697 (2019).'},
    {type:'image', src:'media/fig-cea2020-9.jpg',
     caption:'Contour profiles for the optimised, validated model: (a) static pressure distribution (Pa); (b) physical velocity magnitude (m&nbsp;s&#8315;&sup1;), with regions below 0.016&nbsp;m&nbsp;s&#8315;&sup1; marked. Figure 9, <i>Computers and Electronics in Agriculture</i> 179, 105820 (2020).'},
    {type:'image', src:'media/fig-dt2022-8.jpg',
     caption:'Mid-section contours of absolute humidity (kg water per kg dry air) during aeration cooling: (a) initial; (b) after 24&nbsp;h. Figure 8, <i>Drying Technology</i> (2022).'},
    {type:'image', src:'media/stirling-fsi-overview.jpg', wide:true,
     caption:'The same fluid&ndash;structure interaction toolchain applied outside grain storage: self-start and forced-start modelling of a gamma-type free-piston Stirling engine, validated experimentally. <i>Applied Thermal Engineering</i> 306, 133147 (2026).'}
  ]},

 {id:'uav',pillar:'aiml',tag:'AI/ML &amp; Imaging',t:'UAV LiDAR and Multispectral ML for Crop Phenotyping',
  thumb:'media/dry-bean-maturity-workflow.jpg',   /* real image for the card; falls back to the drawn illustration if absent */
  ac:'#8A6113',art:'#A9791C',aw:'#F7EEDC',status:'Published',vis:'uav',
  teaser:'Converting aerial point clouds and spectral signatures into field-scale predictions of crop structure, yield and maturity.',
  tags:['UAV LiDAR','Multispectral fusion','ML classifiers','Image processing'],
  kpi:{v:'R&sup2; 0.84',l:'LiDAR canopy-height estimation at the R6 growth stage in dry bean breeding trials'},
  problem:'Breeding programmes need plant height, lodging, yield and physiological maturity measured across hundreds of plots, repeatedly, through the season. Manual scoring is slow, subjective and does not scale &mdash; which makes it the bottleneck in the selection cycle rather than the genetics.',
  role:'Lead researcher at Agriculture and Agri-Food Canada. Published contributor roles on the open-access study cover methodology, software, validation, formal analysis, investigation, data curation and original drafting.',
  methods:['UAV-mounted LiDAR for canopy-height and lodging estimation across dry bean breeding trials','Multispectral imaging with spectral-index fusion feeding machine-learning classifiers','Integrated LiDAR&ndash;multispectral framework for seed-yield and physiological-maturity prediction','Open-source image-processing pipelines for trait extraction','Multispectral protocols for crop/soil residue cover in cover crops; Raspberry&nbsp;Pi hyperspectral system for pea root rot and wheat minerals'],
  results:[{v:'R&sup2; 0.84',l:'LiDAR canopy-height estimation at the R6 stage'},{v:'R&sup2; 0.64',l:'Integrated LiDAR&ndash;multispectral yield prediction'},{v:'4',l:'Published articles on UAV phenotyping and maturity forecasting'}],
  pubs:[{t:'UAV-based LiDAR and Multispectral Imaging for Estimating Dry Bean Plant Height, Lodging and Seed Yield',j:'Sensors 25(11), 3535 (2025)',d:'10.3390/s25113535'},
        {t:'An Integrated UAV-Based Spectral-Index Fusion Framework Using Machine Learning Classifiers to Model Physiological Maturity in Dry Bean',j:'Computers and Electronics in Agriculture 246, 111573 (2026)',d:'10.1016/j.compag.2026.111573'},
        {t:'Forecasting Spring Wheat Maturity from UAV-Based Multispectral Imagery Using Machine and Deep Learning Models',j:'AgriEngineering 8(2), 62 (2026)',d:'10.3390/agriengineering8020062'}],
  value:'End-to-end sensing, machine learning and agronomic domain knowledge in one workflow &mdash; with results a breeder can act on.',
  media:[
    {type:'image', src:'media/dry-bean-maturity-workflow.jpg', wide:true,
     caption:'Spectral-index fusion workflow: six multispectral bands and five vegetation indices combined into 63 feature sets, evaluated across ten classification models to predict physiological maturity in dry bean.'}
  ]
  },

 {id:'listeria',pillar:'aiml',tag:'Food Safety &amp; AI',t:'Predictive Microbiology for Ready-to-Eat Meat Safety',
  ac:'#B84B2A',aw:'#FAE9E2',status:'Published',vis:'micro',
  teaser:'Modeling microbial lag and growth behaviour so that quantitative risk assessment rests on prediction rather than worst-case assumption.',
  tags:['Growth &amp; lag-phase modeling','Comparative predictive models','Explainable AI'],
  kpi:{v:'Predictive microbiology',l:'integrated growth and lag-phase modeling of <i>L.&nbsp;monocytogenes</i> for quantitative risk assessment'},
  problem:'Quantitative microbial risk assessment needs to know not just how fast <i>Listeria monocytogenes</i> grows in ready-to-eat meat, but how long it waits before it starts. Lag phase is the part most models treat crudely, and it is precisely the part that decides whether a product is safe at the end of its shelf life.',
  role:'Research collaborator and co-author at the University of Arkansas, working at the intersection of data-driven modeling and food safety engineering.',
  methods:['Integrated growth and lag-phase data-driven predictive modeling for quantitative risk assessment','Comparative framework benchmarking classical gamma-concept models against explainable AI approaches','Uncertainty characterisation for risk-assessment inputs','Microbial risk-assessment machine-learning models for low- and high-moisture food systems'],
  results:[{v:'1',l:'Published article in International Journal of Food Microbiology (2026)'},{v:'1',l:'Explainable-AI comparative framework under review at Food Research International'},{v:'RTE',l:'Ready-to-eat meat systems, with transfer to low-moisture foods in progress'}],
  pubs:[{t:'Integrated Growth and Lag Phase Data-driven Predictive Modeling of Listeria monocytogenes in Ready-to-Eat Meats for Quantitative Risk Assessment',j:'International Journal of Food Microbiology 461, 112026 (2026)',d:'10.1016/j.ijfoodmicro.2026.112026'}],
  value:'A direct line from machine learning to a food-safety decision that a processor and a regulator can both interrogate.'},

 {id:'iot',pillar:'systems',tag:'Automation &amp; IoT',t:'IoT Monitoring and Automated Aeration Control',
  thumb:'media/sugar-beet-sensor-probe.jpg',   /* real image for the card; falls back to the drawn illustration if absent */
  ac:'#0B6B6B',aw:'#E4F0EF',status:'Published',vis:'iot',
  teaser:'Sensors, gateways and control logic that run storage conditioning without someone standing at the fan switch.',
  tags:['IoT nodes &amp; gateways','Cloud fan control','Automated aeration','Decision logic'],
  kpi:{v:'2',l:'commercial storage systems automated &mdash; grain bins and outdoor sugar-beet piles'},
  problem:'Large storage systems need continuous monitoring and timely intervention, but the person who should run the fan is usually doing something else. Fans run too long, burning energy, or too late, after the hot spot has already formed.',
  role:'Co-lead researcher for sugar-beet pile conditioning; lead researcher on grain fan-control projects, including improvements to OPI Systems fan control and its output database.',
  methods:['Sensor networks, IoT nodes and gateways with cloud connectivity','Automated fan-control logic driven by ambient and bulk conditions','Continuous carbon-dioxide monitoring in commercial canola bins as a spoilage indicator','Energy-efficient wireless monitoring for outdoor sugar-beet piles','Integration with commercial platforms: OPI Systems, AGI SureTrack, GSI, Bin-Sense'],
  results:[{v:'5,000&ndash;50,000',l:'Bushel bin capacities worked with, 3&ndash;40&nbsp;hp fan systems'},{v:'3',l:'Peer-reviewed outputs on wireless monitoring and automated aeration'},{v:'USD 105K',l:'OPI Systems industry contract led at the University of Arkansas'}],
  pubs:[{t:'Energy-Efficient Wireless Monitoring and Automated Aeration System for Sustainable Sugar Beet Pile Conditioning',j:'Sugar Tech (2026)',d:'10.1007/s12355-026-01773-9'}],
  value:'Demonstrates genuine cyber-physical integration on commercial equipment &mdash; not a generic claim of IoT capability.',
  media:[
    {type:'image', src:'media/sugar-beet-sensor-probe.jpg',
     caption:'Sensor cable and spear probe installed inside a commercial sugar beet pile, alongside the existing site instrumentation.'},
    {type:'image', src:'media/ppot-fan-sensor.jpg',
     caption:'Pressure, temperature and humidity sensing installed on the aeration fan for automated pile conditioning.'}
  ]
  },

 {id:'drying',pillar:'sustain',tag:'Sustainability &amp; TEA',t:'Sustainable Grain Drying and Process Economics',
  ac:'#8A6113',art:'#A9791C',aw:'#F7EEDC',status:'Published',vis:'dry',
  teaser:'Drying decisions set energy demand, cost, carbon emissions, throughput and product quality all at once. I quantify the trade-off.',
  tags:['Thermodynamic modeling','LCA','TEA','Energy &amp; carbon accounting'],
  kpi:{v:'3',l:'dryer architectures compared on energy, carbon and cost &mdash; cross-flow, mixed-flow, double-flow'},
  problem:'A producer choosing between in-bin low-temperature drying and a high-temperature dryer is really choosing between an energy bill, a carbon position, a throughput ceiling and a milling-quality outcome. Those four rarely point the same way, and the engineering literature usually reports only one of them.',
  role:'Lead researcher and first author across the related studies, working with Alberta Grains, the Saskatchewan Wheat Development Commission and commercial dryer operators.',
  methods:['Thermodynamic-based theoretical energy-efficiency modeling for high-temperature dryers, validated for conventional and combination drying','Comparative energy, carbon-emission and cost analysis of cross-flow, mixed-flow and double-flow dryers','Specific-energy and carbon-cost assessment of in-bin low- vs high-temperature drying, with policy implications','Milling-quality evaluation of on-farm high-temperature wheat drying parameters','Distributive (Luikov) parameter modeling of canola hot-air drying'],
  results:[{v:'6+',l:'Published articles on drying sustainability, efficiency and quality'},{v:'LCA + TEA',l:'Energy, emissions and cost assessed in one framework'},{v:'Policy',l:'Carbon-cost findings framed for provincial policy and extension audiences'}],
  pubs:[{t:'Comparison on energy efficiency, carbon emissions, and cost implications of cross-flow, mixed-flow, and double-flow grain dryers',j:'Cleaner Engineering and Technology 34, 101289 (2026)',d:'10.1016/j.clet.2026.101289'},
        {t:'Analysis of In-bin Low-temperature and High-temperature Grain Drying in Alberta: Specific Energy, Carbon Costs and Policy Implications',j:'Energy Reports 12, 3341&ndash;3352 (2024)',d:'10.1016/j.egyr.2024.09.013'},
        {t:'Impact of On-farm High-temperature Wheat Drying Parameters on Milling Quality',j:'Journal of Stored Products Research 119, 103189 (2026)',d:'10.1016/j.jspr.2026.103189'}],
  value:'The bridge between engineering performance and the management decision that actually gets made.',
  media:[
    {type:'image', src:'media/fig-crfsfs2025-9.jpg', wide:true,
     caption:'SCADA and IoT integration in drying systems. Figure 9, <i>Comprehensive Reviews in Food Science and Food Safety</i> 24(5), e70269 (2025).'}
  ]
  },

 {id:'poultry',pillar:'systems',tag:'Active R&amp;D',t:'Physics-Guided Thermal Vision for Poultry Safety',
  thumb:'media/air-curtain-poster.jpg',   /* real image for the card; falls back to the drawn illustration if absent */
  ac:'#B84B2A',aw:'#FAE9E2',status:'Active R&amp;D',vis:'poultry',
  teaser:'Transparent plastic on a wet, irregular poultry surface is nearly invisible to a normal camera. Heat it briefly, and physics does the segmentation for you.',
  tags:['Transient conjugate heat transfer','Air-curtain excitation','Computer vision','TEA'],
  kpi:{v:'Active',l:'conveyor-scale translational research in progress &mdash; results not yet validated at line speed'},
  problem:'Foreign material on poultry &mdash; particularly transparent plastic film &mdash; is extremely difficult to distinguish from wet, specular, irregular meat surfaces using visible contrast alone. Detection has to happen at line speed, on a moving conveyor, without slowing the process or rejecting good product.',
  role:'Multiphysics-modeling contributor on the current programme; an internal project description identifies me as technical lead for its first modeling objective. Collaboration with University of Georgia food-safety faculty and the Center for Scalable and Intelligent Automation in Poultry Processing. A USD 1.2&nbsp;M NSF Translation-to-Practice proposal to move this work into commercial poultry processing is under submission, with FloVision, Simmons and Tyson Foods as industry collaborators.',
  methods:['Transient conjugate heat and mass-transfer modeling of controlled cold-air excitation','Air-curtain design to create a transient thermal contrast between contaminant and tissue','Thermal imaging with computer-vision segmentation and object tracking','Techno-economic evaluation of automation feasibility for the poultry industry'],
  results:[{v:'386',l:'Annotated thermal images in the published stationary proof-of-concept study'},{v:'1.05&deg;C',l:'Thermal contrast reported in that stationary study'},{v:'0.983',l:'YOLOv8s detection precision reported under stationary conditions'}],
  note:'The figures above come from <b>published stationary proof-of-concept work</b>. They are <b>not</b> validated conveyor-scale performance. The active programme &mdash; combining controlled cold-air excitation, a transient heat-transfer model, thermal imaging, tracking and techno-economic evaluation &mdash; is ongoing, and partner names and unpublished performance are withheld pending clearance.',
  pubs:[],
  value:'The clearest single demonstration of the combined computational, AI, food-safety, automation and translation identity &mdash; and an honest picture of where the evidence currently stops.',
  media:[
    {type:'video', src:'media/air-curtain-simulation.mp4', poster:'media/air-curtain-poster.jpg', wide:true,
     caption:'CFD pathlines through the cold-air curtain used to create a transient thermal contrast between contaminant and tissue. Velocity magnitude up to 49&nbsp;m/s; simulation in Ansys Fluent.'},
    {type:'image', src:'media/fig-chapter13-1.jpg', wide:true,
     caption:'Robot coordinate systems and their degrees of freedom: (A) linear; (B) cylindrical; (C) spherical. Figure 13.1, &lsquo;Robotics for general material handling machines in food plants&rsquo;, Elsevier.'}
  ]
  }
];
