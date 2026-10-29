/* Realistic 3D Planet Image Logos */
    const PLANET_REALISTIC_LOGOS = {
      Sun: `<div class="planet-img-logo bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 shadow-amber-500/50 shadow-lg border border-amber-300"></div>`,
      Mercury: `<div class="planet-img-logo bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800 border border-gray-400"></div>`,
      Venus: `<div class="planet-img-logo bg-gradient-to-br from-amber-100 via-yellow-600 to-amber-900 border border-amber-300"></div>`,
      Earth: `<div class="planet-img-logo bg-gradient-to-br from-blue-400 via-indigo-600 to-emerald-700 shadow-cyan-500/40 shadow-md border border-cyan-300"></div>`,
      Mars: `<div class="planet-img-logo bg-gradient-to-br from-orange-400 via-red-600 to-amber-900 border border-red-400"></div>`,
      Jupiter: `<div class="planet-img-logo bg-gradient-to-br from-amber-200 via-amber-700 to-yellow-900 border border-amber-400"></div>`,
      Saturn: `<div class="relative flex items-center justify-center"><div class="planet-img-logo bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-800 border border-yellow-300 z-10"></div><div class="absolute w-14 h-4 rounded-full border-2 border-amber-200/80 transform -rotate-12 z-0"></div></div>`,
      Uranus: `<div class="relative flex items-center justify-center"><div class="planet-img-logo bg-gradient-to-br from-cyan-200 via-cyan-500 to-blue-800 border border-cyan-300 z-10"></div><div class="absolute w-12 h-3 rounded-full border-2 border-cyan-200/60 transform rotate-45 z-0"></div></div>`,
      Neptune: `<div class="planet-img-logo bg-gradient-to-br from-blue-400 via-blue-700 to-indigo-950 border border-blue-400"></div>`,
      Moon: `<div class="planet-img-logo bg-gradient-to-br from-gray-100 via-gray-400 to-gray-700 border border-gray-300"></div>`,
      MilkyWay: `<div class="planet-img-logo bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 shadow-purple-500/50 shadow-lg border border-purple-300"></div>`
    };

    /* Accurate Astronomical Dataset */
    const CELESTIAL_DATA = {
      Sun: {
        name: 'Sun',
        subtitle: 'Yellow Dwarf Star (Spectral Class G2V)',
        radius: 12,
        color: 0xffaa00,
        mass: '1.9885 × 10³⁰ kg (333,000 Earths)',
        meanRadius: '1,392,700 km (Diameter)',
        temp: '5,507°C (Core: 15,000,000°C)',
        gravity: '274.0 m/s² (28x Earth)',
        distance: '0 km (Center of Solar System)',
        orbitSpeed: '220 km/s (Galactic Orbit)',
        period: '230 Million Years (Cosmic Year)',
        rotation: '25.38 Days (Equator)',
        tilt: '7.25°',
        atmosphere: '73.46% Hydrogen, 24.85% Helium, 0.77% Oxygen, 0.29% Carbon',
        moons: ['8 Major Planets', '5 Official Dwarf Planets', '1,300,000+ Asteroids'],
        desc: 'The Sun is the star at the heart of our solar system. It is a nearly perfect sphere of hot plasma, generating energy via nuclear fusion of hydrogen into helium at its core.',
        facts: [
          'Contains 99.86% of the entire Solar System\'s mass.',
          'Light takes 8 minutes and 20 seconds to travel from Sun to Earth.',
          'Consumes 600 million tons of hydrogen every single second.'
        ]
      },
      Mercury: {
        name: 'Mercury',
        subtitle: '1st Planet from the Sun (Terrestrial)',
        radius: 0.8,
        orbitDistance: 22,
        speed: 0.04,
        color: 0xa5a5a5,
        mass: '3.3011 × 10²³ kg (0.055 Earths)',
        meanRadius: '4,879.4 km (Diameter)',
        temp: '-180°C to 430°C',
        gravity: '3.70 m/s²',
        distance: '57.91 Million km (0.387 AU)',
        orbitSpeed: '47.36 km/s',
        period: '87.97 Days',
        rotation: '58.65 Days',
        tilt: '0.034°',
        atmosphere: 'Exosphere: 42% Oxygen, 29% Sodium, 22% Hydrogen, 6% Helium',
        moons: ['0 Moons'],
        desc: 'Mercury is the smallest planet in the Solar System and closest to the Sun. It has a heavily cratered metallic body with no substantial atmosphere.',
        facts: [
          'Orbital speed of nearly 47 km/s makes it the fastest planet in space.',
          'Experiences extreme temperature fluctuations of over 600°C between day and night.',
          'A year on Mercury is only 88 days long.'
        ]
      },
      Venus: {
        name: 'Venus',
        subtitle: '2nd Planet from the Sun (Terrestrial)',
        radius: 1.5,
        orbitDistance: 32,
        speed: 0.015,
        color: 0xe3bb76,
        mass: '4.8675 × 10²⁴ kg (0.815 Earths)',
        meanRadius: '12,103.6 km (Diameter)',
        temp: '464°C (867°F - Hottest Planet)',
        gravity: '8.87 m/s²',
        distance: '108.21 Million km (0.723 AU)',
        orbitSpeed: '35.02 km/s',
        period: '224.70 Days',
        rotation: '243.02 Days (Retrograde)',
        tilt: '177.36°',
        atmosphere: '96.5% Carbon Dioxide, 3.5% Nitrogen, clouds of Sulfuric Acid',
        moons: ['0 Moons'],
        desc: 'Venus is Earth\'s twin in size and density, but has a toxic, crushing greenhouse atmosphere with surface pressures 92 times greater than Earth.',
        facts: [
          'Rotates in the opposite direction (east to west) relative to most planets.',
          'A day on Venus (243 Earth days) is longer than its year (225 Earth days).',
          'Surface temperature is hot enough to melt lead due to extreme greenhouse trapping.'
        ]
      },
      Earth: {
        name: 'Earth',
        subtitle: '3rd Planet from the Sun (Terrestrial)',
        radius: 1.7,
        orbitDistance: 45,
        speed: 0.01,
        color: 0x2233ff,
        mass: '5.9722 × 10²⁴ kg',
        meanRadius: '12,742 km (Diameter)',
        temp: '15°C (Min: -89°C, Max: 56.7°C)',
        gravity: '9.807 m/s²',
        distance: '149.60 Million km (1.000 AU)',
        orbitSpeed: '29.78 km/s',
        period: '365.256 Days',
        rotation: '23h 56m 4s',
        tilt: '23.44°',
        atmosphere: '78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon, 0.04% CO2',
        moons: ['1 Natural Satellite (The Moon)'],
        desc: 'Earth is our home planet and the only known world in the universe confirmed to host life, liquid oceans, and active plate tectonics.',
        facts: [
          '70.8% of Earth\'s surface is covered by liquid water oceans.',
          'Earth\'s strong protective magnetosphere shields us from solar flare radiation.',
          'Only terrestrial planet with a large active natural moon.'
        ]
      },
      Mars: {
        name: 'Mars',
        subtitle: '4th Planet from the Sun (Terrestrial)',
        radius: 1.1,
        orbitDistance: 58,
        speed: 0.008,
        color: 0xc1440e,
        mass: '6.4171 × 10²³ kg (0.107 Earths)',
        meanRadius: '6,779 km (Diameter)',
        temp: '-63°C (Min: -140°C, Max: 20°C)',
        gravity: '3.721 m/s²',
        distance: '227.92 Million km (1.524 AU)',
        orbitSpeed: '24.07 km/s',
        period: '686.98 Days',
        rotation: '24h 37m 22s',
        tilt: '25.19°',
        atmosphere: '95.32% Carbon Dioxide, 2.6% Nitrogen, 1.9% Argon, 0.16% Oxygen',
        moons: ['2 Moons (Phobos & Deimos)'],
        desc: 'Mars is a cold desert planet with a thin atmosphere. Its reddish hue comes from oxidized iron (rust) covering its surface rocks.',
        facts: [
          'Home to Olympus Mons, the largest shield volcano in the solar system (21.9 km high).',
          'Has polar ice caps made of water ice and frozen carbon dioxide.',
          'Explored continuously by NASA and international robotic rovers.'
        ]
      },
      Jupiter: {
        name: 'Jupiter',
        subtitle: '5th Planet from the Sun (Gas Giant)',
        radius: 4.5,
        orbitDistance: 78,
        speed: 0.004,
        color: 0xb07f35,
        mass: '1.8982 × 10²⁷ kg (317.8 Earths)',
        meanRadius: '139,822 km (Diameter)',
        temp: '-110°C (Cloud top)',
        gravity: '24.79 m/s² (2.5x Earth)',
        distance: '778.57 Million km (5.204 AU)',
        orbitSpeed: '13.07 km/s',
        period: '11.862 Years',
        rotation: '9h 55m 30s',
        tilt: '3.13°',
        atmosphere: '89.8% Hydrogen, 10.2% Helium, traces of Methane & Ammonia',
        moons: ['95 Confirmed Moons (Io, Europa, Ganymede, Callisto)'],
        desc: 'Jupiter is the largest planet in our solar system—more than twice as massive as all other planets combined. It features the Great Red Spot storm.',
        facts: [
          'Fastest rotating planet in the solar system with a day under 10 hours.',
          'The Great Red Spot is a anticyclonic storm larger than planet Earth.',
          'Ganymede, its largest moon, is bigger than Mercury and has its own magnetic field.'
        ]
      },
      Saturn: {
        name: 'Saturn',
        subtitle: '6th Planet from the Sun (Gas Giant)',
        radius: 3.8,
        orbitDistance: 102,
        speed: 0.0025,
        color: 0xe2bf7d,
        mass: '5.6834 × 10²⁶ kg (95.2 Earths)',
        meanRadius: '116,464 km (Diameter)',
        temp: '-140°C',
        gravity: '10.44 m/s²',
        distance: '1.433 Billion km (9.582 AU)',
        orbitSpeed: '9.68 km/s',
        period: '29.457 Years',
        rotation: '10h 33m 38s',
        tilt: '26.73°',
        atmosphere: '96.3% Hydrogen, 3.25% Helium, 0.45% Methane',
        moons: ['146 Confirmed Moons (Titan, Enceladus, Mimas)'],
        desc: 'Famous for its complex, brilliant ring system composed of billions of ice chunks and rock particles, Saturn is the least dense planet.',
        facts: [
          'Saturn\'s average density is less than water—it would float in a giant bathtub.',
          'Its ring system extends up to 282,000 km from the planet but is only ~10 meters thick.',
          'Moon Titan has a dense nitrogen atmosphere and liquid methane/ethane lakes.'
        ]
      },
      Uranus: {
        name: 'Uranus',
        subtitle: '7th Planet from the Sun (Ice Giant)',
        radius: 2.6,
        orbitDistance: 125,
        speed: 0.0015,
        color: 0x4b70dd,
        mass: '8.6810 × 10²⁵ kg (14.5 Earths)',
        meanRadius: '50,724 km (Diameter)',
        temp: '-195°C (Min: -224°C - Coldest Atmosphere)',
        gravity: '8.69 m/s²',
        distance: '2.871 Billion km (19.191 AU)',
        orbitSpeed: '6.80 km/s',
        period: '84.011 Years',
        rotation: '17h 14m 24s (Retrograde)',
        tilt: '97.77°',
        atmosphere: '82.5% Hydrogen, 15.2% Helium, 2.3% Methane',
        moons: ['28 Confirmed Moons (Titania, Oberon, Miranda)'],
        desc: 'Uranus is an ice giant with a pale cyan color caused by atmospheric methane. It orbits sideways with a extreme 97.8° tilt.',
        facts: [
          'Orbits the Sun almost completely on its side, causing 42-year long polar day/night seasons.',
          'Reaches the coldest atmospheric temperatures of any planet in the solar system (-224°C).',
          'Has 13 faint concentric ring structures.'
        ]
      },
      Neptune: {
        name: 'Neptune',
        subtitle: '8th Planet from the Sun (Ice Giant)',
        radius: 2.5,
        orbitDistance: 145,
        speed: 0.001,
        color: 0x274687,
        mass: '1.0241 × 10²⁶ kg (17.1 Earths)',
        meanRadius: '49,244 km (Diameter)',
        temp: '-200°C',
        gravity: '11.15 m/s²',
        distance: '4.495 Billion km (30.07 AU)',
        orbitSpeed: '5.43 km/s',
        period: '164.79 Years',
        rotation: '16h 6m 36s',
        tilt: '28.32°',
        atmosphere: '80.0% Hydrogen, 19.0% Helium, 1.5% Methane',
        moons: ['16 Confirmed Moons (Triton, Proteus, Nereid)'],
        desc: 'Neptune is the most distant major planet in our solar system. A dark, cold ice giant whipped by supersonic planetary winds.',
        facts: [
          'Features the fastest recorded winds in the solar system, reaching up to 2,100 km/h.',
          'First planet predicted purely through mathematical calculations before observational discovery.',
          'Its largest moon, Triton, orbits Neptune backwards (retrograde orbit).'
        ]
      },
      Moon: {
        name: 'The Moon / Luna',
        subtitle: 'Natural Satellite of Planet Earth',
        radius: 0.5,
        orbitDistance: 3.5,
        speed: 0.03,
        color: 0xcccccc,
        mass: '7.342 × 10²² kg (0.0123 Earths)',
        meanRadius: '3,474.8 km (Diameter)',
        temp: '-130°C to 120°C',
        gravity: '1.62 m/s² (16.6% Earth)',
        distance: '384,400 km from Earth',
        orbitSpeed: '1.022 km/s',
        period: '27.321 Days',
        rotation: '27.321 Days (Tidally Locked)',
        tilt: '6.68°',
        atmosphere: 'Trace Exosphere: Helium, Neon, Hydrogen',
        moons: ['0 Moons'],
        desc: 'The Moon is Earth\'s only natural satellite. It is tidally locked, meaning it always shows the same face toward Earth.',
        facts: [
          'Causes ocean tides on Earth through gravitational interaction.',
          'Tidally locked to Earth, completing one rotation per orbit.',
          'Only celestial body outside Earth where humans have walked.'
        ]
      },
      MilkyWay: {
        name: 'Milky Way Galaxy',
        subtitle: 'Barred Spiral Galaxy (SBbc)',
        radius: 500,
        mass: '1.5 Trillion Solar Masses',
        meanRadius: '105,700 Light Years (Diameter)',
        temp: 'Core: Millions of degrees Kelvin',
        gravity: 'Supermassive Black Hole (Sagittarius A*)',
        distance: 'Sun is ~26,600 light years from Center',
        orbitSpeed: '230 km/s (Sun\'s speed)',
        period: '230 Million Years (Galactic Rotation)',
        rotation: 'Differential Spiral Rotation',
        tilt: '63° to Celestial Equator',
        atmosphere: 'Interstellar Gas, Cosmic Dust, Dark Matter',
        moons: ['100–400 Billion Stars', '50+ Dwarf Satellite Galaxies'],
        desc: 'The Milky Way is our home galaxy—a vast barred spiral structure housing hundreds of billions of stars. Our Sun resides in the Orion Arm.',
        facts: [
          'At its center lies Sagittarius A*, a supermassive black hole 4.1 million times the mass of the Sun.',
          'Moving through space at 600 km/s and will merge with Andromeda Galaxy in 4.5 billion years.',
          'Contains between 100 and 400 billion stars and at least 100 billion planets.'
        ]
      }
    };

    /* Globals */
    let scene, camera, renderer, controls;
    let solarSystemGroup, galaxyGroup, orbitLinesGroup;
    let planets = {};
    let labelElements = {};
    
    let currentView = 'solar'; 
    let focusedObject = null;
    let focusedObjectName = 'Sun';
    let simSpeed = 1;
    let showOrbits = true;
    let showLabels = true;

    /* Speech Controls */
    let currentUtterance = null;
    let isSpeaking = false;

    /* Texture Canvas Generators */
    function createSunTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 1024; canvas.height = 512;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#ff3300');
      grad.addColorStop(0.5, '#ff9900');
      grad.addColorStop(1, '#ffee00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      for (let i = 0; i < 3000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.25)' : 'rgba(180,20,0,0.35)';
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    }

    function createPlanetTexture(colorHex, detailType) {
      const canvas = document.createElement('canvas');
      canvas.width = 1024; canvas.height = 512;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = colorHex;
      ctx.fillRect(0, 0, 1024, 512);

      if (detailType === 'earth') {
        // Richer Earth map: deep blue oceans, recognizable stylized continent masses,
        // polar ice and scattered cloud bands for a much clearer spherical appearance.
        const ocean = ctx.createLinearGradient(0, 0, 0, 512);
        ocean.addColorStop(0, '#123f83'); ocean.addColorStop(.48, '#087db5'); ocean.addColorStop(1, '#092d65');
        ctx.fillStyle = ocean; ctx.fillRect(0, 0, 1024, 512);
        const continents = [
          [[105,92],[160,65],[205,78],[226,108],[205,135],[180,154],[164,193],[132,180],[115,145],[88,126]],
          [[185,205],[224,216],[246,252],[235,298],[214,345],[195,382],[176,342],[166,294],[148,252]],
          [[270,88],[322,72],[358,94],[383,124],[367,151],[328,160],[304,137]],
          [[440,92],[489,70],[543,83],[566,108],[603,106],[636,127],[626,154],[587,161],[570,190],[533,181],[508,154],[470,146]],
          [[515,183],[553,195],[570,230],[555,272],[530,315],[505,292],[493,247]],
          [[625,102],[671,83],[716,96],[751,120],[790,125],[819,154],[803,181],[766,175],[735,194],[704,168],[673,162],[646,137]],
          [[735,216],[774,209],[799,236],[788,276],[759,302],[737,278]],
          [[850,330],[885,316],[914,333],[901,356],[871,365]]
        ];
        continents.forEach((points, index) => {
          ctx.beginPath(); points.forEach((pt, i) => i ? ctx.lineTo(pt[0], pt[1]) : ctx.moveTo(pt[0], pt[1])); ctx.closePath();
          ctx.fillStyle = index % 2 ? '#398653' : '#5c9b50'; ctx.fill();
          ctx.strokeStyle = 'rgba(184,210,112,.45)'; ctx.lineWidth = 3; ctx.stroke();
        });
        // Polar ice caps
        const ice = ctx.createLinearGradient(0, 0, 0, 90); ice.addColorStop(0, 'rgba(235,250,255,.95)'); ice.addColorStop(1, 'rgba(235,250,255,0)');
        ctx.fillStyle = ice; ctx.fillRect(0, 0, 1024, 70);
        ctx.save(); ctx.translate(0,512); ctx.scale(1,-1); ctx.fillStyle = ice; ctx.fillRect(0,0,1024,65); ctx.restore();
        // Thin, irregular cloud streaks across the globe map
        for (let i = 0; i < 115; i++) {
          const x = Math.random() * 1024, y = 45 + Math.random() * 420;
          ctx.beginPath(); ctx.ellipse(x, y, 8 + Math.random() * 48, 1.5 + Math.random() * 5, (Math.random()-.5)*.35, 0, Math.PI*2);
          ctx.fillStyle = `rgba(235,248,255,${.10 + Math.random()*.28})`; ctx.fill();
        }
      } else if (detailType === 'bands') {
        for (let y = 0; y < 512; y += 12) {
          ctx.fillStyle = y % 24 === 0 ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.18)';
          ctx.fillRect(0, y, 1024, Math.random() * 12 + 4);
        }
        if (colorHex === '#b07f35') {
          ctx.fillStyle = '#992200';
          ctx.beginPath();
          ctx.ellipse(600, 320, 55, 32, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (detailType === 'craters') {
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        for (let i = 0; i < 350; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 10 + 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return new THREE.CanvasTexture(canvas);
    }

    /* Initialize Scene */
    function init() {
      const container = document.getElementById('webgl-container');

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x030712, 0.0006);

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000);
      camera.position.set(0, 70, 170);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxDistance = 2500;
      controls.minDistance = 2;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      const sunPointLight = new THREE.PointLight(0xffffff, 2.2, 800, 0.5);
      sunPointLight.castShadow = true;
      scene.add(sunPointLight);

      // Groups
      solarSystemGroup = new THREE.Group();
      galaxyGroup = new THREE.Group();
      orbitLinesGroup = new THREE.Group();

      scene.add(solarSystemGroup);
      scene.add(galaxyGroup);
      solarSystemGroup.add(orbitLinesGroup);

      createBackgroundStars();
      buildSolarSystem();
      buildMilkyWayGalaxy();

      window.addEventListener('resize', onWindowResize);
      renderer.domElement.addEventListener('click', onPointerClick);

      updateInfoPanel('Sun');
      animate();
    }

    function createBackgroundStars() {
      const count = 5000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const r = 900 + Math.random() * 1100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 1.0;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({ size: 1.6, vertexColors: true, transparent: true, opacity: 0.8 });
      scene.add(new THREE.Points(geometry, material));
    }

    function buildSolarSystem() {
      // SUN
      const sunGeo = new THREE.SphereGeometry(CELESTIAL_DATA.Sun.radius, 64, 64);
      const sunMat = new THREE.MeshBasicMaterial({ map: createSunTexture() });
      const sunMesh = new THREE.Mesh(sunGeo, sunMat);
      sunMesh.userData = { name: 'Sun' };
      solarSystemGroup.add(sunMesh);
      planets['Sun'] = sunMesh;

      const glowGeo = new THREE.SphereGeometry(CELESTIAL_DATA.Sun.radius * 1.25, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.25, side: THREE.BackSide });
      sunMesh.add(new THREE.Mesh(glowGeo, glowMat));

      createHTMLLabel('Sun');

      // PLANETS
      const planetKeys = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

      planetKeys.forEach((key) => {
        const data = CELESTIAL_DATA[key];
        
        const pivot = new THREE.Group();
        solarSystemGroup.add(pivot);

        const orbitGeo = new THREE.BufferGeometry();
        const points = [];
        for (let i = 0; i <= 128; i++) {
          const theta = (i / 128) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(theta) * data.orbitDistance, 0, Math.sin(theta) * data.orbitDistance));
        }
        orbitGeo.setFromPoints(points);
        const orbitLine = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 }));
        orbitLinesGroup.add(orbitLine);

        let detailType = 'smooth';
        if (key === 'Earth') detailType = 'earth';
        else if (key === 'Jupiter' || key === 'Saturn') detailType = 'bands';
        else if (key === 'Mercury' || key === 'Mars') detailType = 'craters';

        const planetGeo = new THREE.SphereGeometry(data.radius, 32, 32);
        const planetMat = new THREE.MeshStandardMaterial({
          map: createPlanetTexture('#' + data.color.toString(16), detailType),
          roughness: 0.7,
          metalness: 0.1
        });

        const planetMesh = new THREE.Mesh(planetGeo, planetMat);
        planetMesh.position.x = data.orbitDistance;
        planetMesh.rotation.z = THREE.MathUtils.degToRad(parseFloat(data.tilt) || 0);
        planetMesh.castShadow = true;
        planetMesh.receiveShadow = true;
        planetMesh.userData = { name: key, pivot: pivot, speed: data.speed, orbitDistance: data.orbitDistance };

        pivot.add(planetMesh);
        planets[key] = planetMesh;

        if (key === 'Saturn') {
          const ringGeo = new THREE.RingGeometry(data.radius * 1.4, data.radius * 2.5, 64);
          const ringMat = new THREE.MeshStandardMaterial({ color: 0xc2a166, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2;
          planetMesh.add(ringMesh);
        }

        if (key === 'Uranus') {
          const ringGeo = new THREE.RingGeometry(data.radius * 1.3, data.radius * 1.6, 32);
          const ringMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2;
          planetMesh.add(ringMesh);
        }

        createHTMLLabel(key);

        if (key === 'Earth') {
          buildMoon(planetMesh, 'Moon', 0.4, 3.5, 0.03, 0xdddddd);
        } else if (key === 'Jupiter') {
          buildMoon(planetMesh, 'Io', 0.25, 6.5, 0.05, 0xffcc44);
          buildMoon(planetMesh, 'Europa', 0.22, 8.0, 0.04, 0xcccccc);
          buildMoon(planetMesh, 'Ganymede', 0.35, 10.0, 0.025, 0xaaaaaa);
        } else if (key === 'Saturn') {
          buildMoon(planetMesh, 'Titan', 0.32, 9.0, 0.02, 0xe0a050);
        }
      });
    }

    function buildMoon(parentPlanetMesh, name, radius, orbitDist, speed, color) {
      const moonPivot = new THREE.Group();
      parentPlanetMesh.add(moonPivot);

      const moonGeo = new THREE.SphereGeometry(radius, 16, 16);
      const moonMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.8 });
      const moonMesh = new THREE.Mesh(moonGeo, moonMat);
      moonMesh.position.x = orbitDist;
      moonMesh.userData = { name: name, pivot: moonPivot, speed: speed, isMoon: true };

      moonPivot.add(moonMesh);
      planets[name] = moonMesh;
    }

    /* 3D Milky Way Spiral Galaxy */
    function buildMilkyWayGalaxy() {
      const particleCount = 70000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const arms = 4;
      const maxRadius = 650;

      const colorInside = new THREE.Color(0xffaa44);
      const colorOutside = new THREE.Color(0x3388ff);

      for (let i = 0; i < particleCount; i++) {
        const r = Math.pow(Math.random(), 2) * maxRadius;
        const armIndex = i % arms;
        const armAngle = (armIndex / arms) * Math.PI * 2;
        const spinAngle = r * 0.012;

        const randomX = (Math.random() - 0.5) * Math.pow(r * 0.1, 1.2);
        const randomY = (Math.random() - 0.5) * Math.pow(r * 0.05, 1.2);
        const randomZ = (Math.random() - 0.5) * Math.pow(r * 0.1, 1.2);

        const x = Math.cos(armAngle + spinAngle) * r + randomX;
        const y = randomY;
        const z = Math.sin(armAngle + spinAngle) * r + randomZ;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixedColor = colorInside.clone().lerp(colorOutside, r / maxRadius);
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 1.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });

      galaxyGroup.add(new THREE.Points(geometry, particleMaterial));

      // Removed the oversized central core sphere for a cleaner Milky Way view.

      const sunMarker = new THREE.Mesh(
        new THREE.SphereGeometry(5, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x00ffff })
      );
      sunMarker.position.set(180, 5, 120);
      galaxyGroup.add(sunMarker);

      galaxyGroup.visible = false;
    }

    function createHTMLLabel(name) {
      const container = document.getElementById('labels-container');
      const div = document.createElement('div');
      div.className = 'planet-label';
      div.innerText = name.toUpperCase();
      div.id = `label-${name}`;
      container.appendChild(div);
      labelElements[name] = div;
    }

    function updateHTMLLabels() {
      if (!showLabels || currentView === 'galaxy') {
        Object.values(labelElements).forEach(el => el.style.opacity = '0');
        return;
      }

      const tempV = new THREE.Vector3();
      Object.keys(labelElements).forEach(name => {
        const mesh = planets[name];
        if (mesh) {
          mesh.getWorldPosition(tempV);
          tempV.project(camera);

          if (tempV.z > 1) {
            labelElements[name].style.opacity = '0';
            return;
          }

          const x = (tempV.x * .5 + .5) * window.innerWidth;
          const y = (tempV.y * -.5 + .5) * window.innerHeight;

          labelElements[name].style.transform = `translate(-50%, -100%) translate(${x}px,${y}px)`;
          labelElements[name].style.opacity = '1';
        }
      });
    }

    function onPointerClick(event) {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(solarSystemGroup.children, true);

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj && !obj.userData.name && obj.parent) {
          obj = obj.parent;
        }

        if (obj && obj.userData.name) {
          focusBody(obj.userData.name);
        }
      }
    }

    function focusBody(name) {
      stopSpeech();
      focusedObjectName = name;
      const targetMesh = planets[name];

      if (name === 'MilkyWay' || currentView === 'galaxy') {
        focusedObjectName = 'MilkyWay';
        updateInfoPanel('MilkyWay');
        openInfoPanel();
        return;
      }

      if (targetMesh) {
        focusedObject = targetMesh;
        updateInfoPanel(name);
        openInfoPanel();

        const worldPos = new THREE.Vector3();
        targetMesh.getWorldPosition(worldPos);

        const radius = CELESTIAL_DATA[name] ? CELESTIAL_DATA[name].radius : 2;
        const targetCamPos = new THREE.Vector3()
          .copy(worldPos)
          .add(new THREE.Vector3(radius * 4 + 6, radius * 2 + 4, radius * 4 + 6));

        new TWEEN.Tween(controls.target).to(worldPos, 1200).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(camera.position).to(targetCamPos, 1200).easing(TWEEN.Easing.Cubic.Out).start();
      }
    }

    function zoomToCurrentFocus() {
      // The galaxy is a particle field rather than a single mesh, so focus it
      // with a dedicated camera move instead of calling focusBody('MilkyWay'),
      // which only refreshes the information panel.
      if (currentView === 'galaxy' || focusedObjectName === 'MilkyWay') {
        focusedObjectName = 'MilkyWay';
        stopSpeech();
        updateInfoPanel('MilkyWay');
        openInfoPanel();
        new TWEEN.Tween(controls.target)
          .to({ x: 0, y: 0, z: 0 }, 1000)
          .easing(TWEEN.Easing.Cubic.Out)
          .start();
        new TWEEN.Tween(camera.position)
          .to({ x: 0, y: 220, z: 370 }, 1200)
          .easing(TWEEN.Easing.Cubic.Out)
          .start();
        return;
      }
      if (focusedObjectName) focusBody(focusedObjectName);
    }

    function resetCamera() {
      stopSpeech();
      focusedObject = null;
      focusedObjectName = 'Sun';

      new TWEEN.Tween(controls.target).to({ x: 0, y: 0, z: 0 }, 1000).easing(TWEEN.Easing.Cubic.Out).start();
      new TWEEN.Tween(camera.position).to({ x: 0, y: 70, z: 170 }, 1000).easing(TWEEN.Easing.Cubic.Out).start();
    }

    /* Switch View Mode in Navbar */
    function switchView(view) {
      stopSpeech();
      currentView = view;
      const solarBtn = document.getElementById('view-solar-btn');
      const galaxyBtn = document.getElementById('view-galaxy-btn');
      const quickDock = document.getElementById('quick-dock');
      if (quickDock) quickDock.classList.toggle('hidden', view === 'galaxy');

      if (view === 'solar') {
        focusedObjectName = 'Sun';
        solarBtn.classList.add('btn-glow-active');
        galaxyBtn.classList.remove('btn-glow-active');
        solarSystemGroup.visible = true;
        galaxyGroup.visible = false;
        resetCamera();
      } else {
        focusedObjectName = 'MilkyWay';
        galaxyBtn.classList.add('btn-glow-active');
        solarBtn.classList.remove('btn-glow-active');
        solarSystemGroup.visible = false;
        galaxyGroup.visible = true;

        // Offset the galaxy's viewing target slightly right so the galaxy itself sits a little left in the visible area beside the persistent navigation.
        new TWEEN.Tween(controls.target).to({ x: -75, y: 0, z: 0 }, 1200).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(camera.position).to({ x: -75, y: 450, z: 750 }, 1200).easing(TWEEN.Easing.Cubic.Out).start();

        updateInfoPanel('MilkyWay');
        openInfoPanel();
      }
      if (typeof onWindowResize === 'function' && renderer && camera) onWindowResize();
    }

    /* Text-To-Speech System */
    function speakPlanetInfo() {
      if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in your browser.');
        return;
      }

      if (isSpeaking) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
          setVoiceUIState('speaking');
          return;
        } else {
          window.speechSynthesis.pause();
          setVoiceUIState('paused');
          return;
        }
      }

      window.speechSynthesis.cancel();

      // Explicitly check currentView or focusedObjectName
      const activeKey = (currentView === 'galaxy') ? 'MilkyWay' : focusedObjectName;
      const data = CELESTIAL_DATA[activeKey];
      if (!data) return;

      const narrationText = `${data.name}. ${data.subtitle}. ${data.desc} Mass: ${data.mass}. Diameter: ${data.meanRadius}. Surface Temperature: ${data.temp}. Surface Gravity: ${data.gravity}. Key Scientific Facts: ${data.facts.join(' ')}`;

      currentUtterance = new SpeechSynthesisUtterance(narrationText);
      currentUtterance.rate = 0.95;
      currentUtterance.pitch = 1.0;

      currentUtterance.onstart = () => {
        isSpeaking = true;
        setVoiceUIState('speaking');
      };

      currentUtterance.onend = () => {
        isSpeaking = false;
        setVoiceUIState('stopped');
      };

      currentUtterance.onerror = () => {
        isSpeaking = false;
        setVoiceUIState('stopped');
      };

      window.speechSynthesis.speak(currentUtterance);
    }

    function stopSpeech() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      isSpeaking = false;
      setVoiceUIState('stopped');
    }

    function setVoiceUIState(state) {
      const btnText = document.getElementById('speech-btn-text');
      const icon = document.getElementById('speech-icon');
      const bar = document.getElementById('voice-control-bar');

      if (state === 'speaking') {
        btnText.innerText = 'Pause';
        icon.className = 'fa-solid fa-pause text-[10px]';
        bar.classList.add('voice-speaking');
      } else if (state === 'paused') {
        btnText.innerText = 'Resume';
        icon.className = 'fa-solid fa-play text-[10px]';
        bar.classList.remove('voice-speaking');
      } else {
        btnText.innerText = 'Listen Info';
        icon.className = 'fa-solid fa-play text-[10px]';
        bar.classList.remove('voice-speaking');
      }
    }

    /* Set Simulation Speed: 1x, 2x, 3x, 4x */
    function setSimSpeed(speed) {
      simSpeed = speed;
      [0, 1, 2, 3, 4, 5, 6].forEach(s => {
        const btn = document.getElementById(`speed-${s}`);
        if (btn) {
          if (s === speed) {
            btn.classList.add('text-cyan-400', 'font-bold', 'bg-white/10');
            btn.classList.remove('text-gray-300');
          } else {
            btn.classList.remove('text-cyan-400', 'font-bold', 'bg-white/10');
            btn.classList.add('text-gray-300');
          }
        }
      });
    }

    function toggleOrbits() {
      showOrbits = !showOrbits;
      orbitLinesGroup.visible = showOrbits;
      document.getElementById('nav-orbit-btn').classList.toggle('text-cyan-400', showOrbits);
    }

    function toggleLabels() {
      showLabels = !showLabels;
      document.getElementById('nav-label-btn').classList.toggle('text-cyan-400', showLabels);
    }

    function toggleAudio() {
      const audio = document.getElementById('bg-audio');
      const icon = document.getElementById('audio-icon');

      if (audio.paused) {
        audio.play().catch(() => {});
        icon.className = 'fa-solid fa-volume-high text-cyan-400';
      } else {
        audio.pause();
        icon.className = 'fa-solid fa-volume-xmark';
      }
    }

    function updateInfoPanel(name) {
      const data = CELESTIAL_DATA[name];
      if (!data) return;

      // Realistic 3D Planet Image Logo
      const logoBox = document.getElementById('info-logo-container');
      logoBox.innerHTML = PLANET_REALISTIC_LOGOS[name] || PLANET_REALISTIC_LOGOS['Sun'];

      document.getElementById('info-title').innerText = data.name;
      document.getElementById('info-subtitle').innerText = data.subtitle;
      document.getElementById('info-mass').innerText = data.mass;
      document.getElementById('info-radius').innerText = data.meanRadius;
      document.getElementById('info-temp').innerText = data.temp;
      document.getElementById('info-gravity').innerText = data.gravity;

      document.getElementById('info-desc').innerText = data.desc;
      document.getElementById('info-distance').innerText = data.distance;
      document.getElementById('info-orbit-speed').innerText = data.orbitSpeed || 'N/A';
      document.getElementById('info-period').innerText = data.period;
      document.getElementById('info-rotation').innerText = data.rotation;
      document.getElementById('info-tilt').innerText = data.tilt || 'N/A';
      document.getElementById('info-atmosphere').innerText = data.atmosphere;

      const moonsList = document.getElementById('info-moons-list');
      moonsList.innerHTML = '';
      if (data.moons && data.moons.length > 0) {
        data.moons.forEach(m => {
          const badge = document.createElement('span');
          badge.className = 'px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium';
          badge.innerText = m;
          moonsList.appendChild(badge);
        });
      }

      const factsList = document.getElementById('info-facts');
      factsList.innerHTML = '';
      if (data.facts) {
        data.facts.forEach(fact => {
          const li = document.createElement('li');
          li.innerText = fact;
          factsList.appendChild(li);
        });
      }
    }

    function openInfoPanel() {
      document.getElementById('info-panel').classList.remove('translate-x-full');
    }

    function closeInfoPanel() {
      stopSpeech();
      document.getElementById('info-panel').classList.add('translate-x-full');
    }

    function filterPlanets(query) {
      const resultsContainer = document.getElementById('search-results');
      if (!query.trim()) {
        resultsContainer.classList.add('hidden');
        return;
      }

      const matches = Object.keys(CELESTIAL_DATA).filter(k => k.toLowerCase().includes(query.toLowerCase()));
      resultsContainer.innerHTML = '';

      if (matches.length > 0) {
        resultsContainer.classList.remove('hidden');
        matches.forEach(k => {
          const item = document.createElement('div');
          item.className = 'p-2 hover:bg-white/10 text-xs text-white cursor-pointer rounded-lg';
          item.innerHTML = `<span class="block w-full">${CELESTIAL_DATA[k].name}</span>`;
          item.onclick = () => {
            focusBody(k);
            resultsContainer.classList.add('hidden');
            document.getElementById('planet-search').value = '';
          };
          resultsContainer.appendChild(item);
        });
      } else {
        resultsContainer.classList.add('hidden');
      }
    }

    /* Render Animation Loop */
    function animate() {
      requestAnimationFrame(animate);

      TWEEN.update();

      if (currentView === 'solar') {
        Object.keys(planets).forEach(name => {
          const mesh = planets[name];
          if (mesh && mesh.userData) {
            mesh.rotation.y += 0.005;

            if (mesh.userData.pivot && simSpeed > 0 && !(activeMission && activeMission.phase === 'travel')) {
              // Hold planetary orbital motion during the transfer so the route stays easy to follow.
              mesh.userData.pivot.rotation.y += mesh.userData.speed * 0.2 * simSpeed;
            }
          }
        });

        if (focusedObject && focusedObjectName !== 'Sun') {
          const worldPos = new THREE.Vector3();
          focusedObject.getWorldPosition(worldPos);
          controls.target.copy(worldPos);
        }
      } else if (currentView === 'galaxy') {
        galaxyGroup.rotation.y += 0.0005;
      }

      updateMissionSimulationFrame();
      controls.update();
      updateHTMLLabels();
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      const explorerRoot = document.getElementById('cosmic-explorer');
      const galaxyNav = explorerRoot?.classList.contains('ce-galaxy-mode')
        ? document.getElementById('ce-nav') : null;
      const navWidth = galaxyNav ? galaxyNav.getBoundingClientRect().width : 0;
      const viewportWidth = Math.max(320, window.innerWidth - navWidth);
      const container = document.getElementById('webgl-container');
      if (container && galaxyNav) {
        container.style.left = `${navWidth}px`;
        container.style.width = `calc(100vw - ${navWidth}px)`;
      } else if (container) {
        container.style.left = '0px';
        container.style.width = '100vw';
      }
      camera.aspect = viewportWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewportWidth, window.innerHeight);
    }

    window.onload = init;

// Expose functions used by the existing inline HTML event handlers.
Object.assign(window, { resetCamera, switchView, closeInfoPanel, focusBody, setSimSpeed, speakPlanetInfo, stopSpeech, toggleAudio, toggleLabels, toggleOrbits, zoomToCurrentFocus, filterPlanets });

/* ==========================================================================
   NASA SATELLITE MISSION SIMULATOR MODULE
   ========================================================================== */

const NASA_MISSION_DATA = {
  Mercury: { meanDistKm: 91700000, minDistKm: 77300000, maxDistKm: 222000000, hohmannDays: 146 },
  Venus:   { meanDistKm: 41400000, minDistKm: 38200000, maxDistKm: 261000000, hohmannDays: 109 },
  Mars:    { meanDistKm: 78300000, minDistKm: 54600000, maxDistKm: 401000000, hohmannDays: 259 },
  Jupiter: { meanDistKm: 628700000, minDistKm: 588500000, maxDistKm: 968000000, hohmannDays: 997 },
  Saturn:  { meanDistKm: 1275000000, minDistKm: 1200000000, maxDistKm: 1650000000, hohmannDays: 2200 },
  Uranus:  { meanDistKm: 2723000000, minDistKm: 2570000000, maxDistKm: 3150000000, hohmannDays: 5800 },
  Neptune: { meanDistKm: 4351000000, minDistKm: 4300000000, maxDistKm: 4680000000, hohmannDays: 11200 }
};

let satelliteMesh = null;
let trajectoryCurveLine = null;
let activeMission = null;
let missionDistanceTag = null;
let missionOrbitLine = null;
let missionModalSource = 'top';

function openMissionModal() {
  missionModalSource = 'explorer';
  const modal = document.getElementById('mission-modal');
  modal.classList.remove('hidden', 'mission-top-mode');
  calculateMissionData();
}

function openTopMissionModal() {
  missionModalSource = 'top';
  const root = document.getElementById('cosmic-explorer');
  root?.classList.remove('ce-mission-mode');
  const modal = document.getElementById('mission-modal');
  modal.classList.add('mission-top-mode');
  modal.classList.remove('hidden');
  calculateMissionData();
}

function openExplorerMissionSimulator() {
  installExplorerUI();
  const root = document.getElementById('cosmic-explorer');
  root?.classList.remove('hidden', 'ce-galaxy-mode');
  root?.classList.add('ce-mission-mode');
  if (typeof switchView === 'function') switchView('solar');
  document.querySelectorAll('.ce-nav-item.active').forEach(el => el.classList.remove('active'));
  document.querySelector('.ce-mission-nav')?.classList.add('active');
  openMissionModal();
}

function closeMissionModal() {
  document.getElementById('mission-modal').classList.add('hidden');
}

function calculateMissionData() {
  const target = document.getElementById('sim-target-planet').value;
  const craftType = document.getElementById('sim-craft-type').value;
  const data = NASA_MISSION_DATA[target];

  if (!data) return;

  let craftSpeedKmS = 11.2; // Default Hohmann launch from Earth escape
  let travelDays = data.hohmannDays;

  if (craftType === 'new_horizons') {
    craftSpeedKmS = 16.26;
    travelDays = Math.round(data.hohmannDays * 0.55);
  } else if (craftType === 'voyager') {
    craftSpeedKmS = 17.0;
    travelDays = Math.round(data.hohmannDays * 0.50);
  } else if (craftType === 'ion_drive') {
    craftSpeedKmS = 22.5;
    travelDays = Math.round(data.hohmannDays * 0.38);
  }

  const meanAU = (data.meanDistKm / 149597870.7).toFixed(2);
  const travelYears = (travelDays / 365.25).toFixed(2);

  document.getElementById('sim-distance-km').innerText = `${(data.meanDistKm / 1e6).toFixed(1)} Million km`;
  document.getElementById('sim-distance-au').innerText = `${meanAU} AU`;
  document.getElementById('sim-travel-days').innerText = `${travelDays} Days`;
  document.getElementById('sim-travel-years').innerText = `~${travelYears} Years`;
  document.getElementById('sim-craft-speed').innerText = `${craftSpeedKmS} km/s`;
  document.getElementById('sim-min-dist').innerText = `${(data.minDistKm / 1e6).toFixed(1)} Million km`;
  document.getElementById('sim-target-label').innerHTML = `${target} <i class="fa-solid fa-location-dot ml-1"></i>`;
}

/* 3D Visual Satellite Flight Simulation */
function createSatelliteMesh() {
  const group = new THREE.Group();

  // Satellite Body
  const bodyGeo = new THREE.BoxGeometry(0.8, 0.8, 1.2);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.8, roughness: 0.2 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  group.add(body);

  // Solar Panels
  const panelGeo = new THREE.BoxGeometry(3.2, 0.05, 0.9);
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x0033aa, roughness: 0.3 });
  const panels = new THREE.Mesh(panelGeo, panelMat);
  group.add(panels);

  // Dish Antenna
  const dishGeo = new THREE.ConeGeometry(0.5, 0.3, 16);
  const dishMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5 });
  const dish = new THREE.Mesh(dishGeo, dishMat);
  dish.rotation.x = -Math.PI / 2;
  dish.position.z = 0.7;
  group.add(dish);

  return group;
}

function start3DMissionSimulation() {
  closeMissionModal();
  const explorerRoot = document.getElementById('cosmic-explorer');
  explorerRoot?.classList.remove('ce-galaxy-mode');
  if (missionModalSource === 'explorer') explorerRoot?.classList.add('ce-mission-mode');
  else explorerRoot?.classList.remove('ce-mission-mode');
  switchView('solar');

  const targetName = document.getElementById('sim-target-planet').value;
  const earthMesh = planets['Earth'];
  const targetMesh = planets[targetName];
  if (!earthMesh || !targetMesh) return;

  // Remove any previous mission visuals.
  if (satelliteMesh) solarSystemGroup.remove(satelliteMesh);
  if (trajectoryCurveLine) solarSystemGroup.remove(trajectoryCurveLine);
  if (missionDistanceTag) missionDistanceTag.remove();
  if (missionOrbitLine) { solarSystemGroup.remove(missionOrbitLine); missionOrbitLine.geometry.dispose(); missionOrbitLine.material.dispose(); }
  missionOrbitLine = null;
  satelliteMesh = null;
  trajectoryCurveLine = null;
  activeMission = null;

  satelliteMesh = createSatelliteMesh();
  solarSystemGroup.add(satelliteMesh);

  const startPos = new THREE.Vector3();
  const endPos = new THREE.Vector3();
  earthMesh.getWorldPosition(startPos);
  targetMesh.getWorldPosition(endPos);

  // A curved transfer path between Earth's current position and the target.
  const midPos = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
  midPos.y += startPos.distanceTo(endPos) * 0.25;
  const curve = new THREE.QuadraticBezierCurve3(startPos, midPos, endPos);
  const points = curve.getPoints(160);
  const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
  const curveMat = new THREE.LineDashedMaterial({
    color: 0x00ffff, dashSize: 1.4, gapSize: 0.85, transparent: true, opacity: 0.95
  });
  trajectoryCurveLine = new THREE.Line(curveGeo, curveMat);
  trajectoryCurveLine.computeLineDistances();
  solarSystemGroup.add(trajectoryCurveLine);

  // HTML tag follows the satellite and displays its live travelled-distance estimate.
  missionDistanceTag = document.createElement('div');
  missionDistanceTag.className = 'mission-distance-tag';
  missionDistanceTag.textContent = 'SATELLITE • 0 km';
  document.getElementById('labels-container').appendChild(missionDistanceTag);

  // Approximate transfer-path length in scene units, used to map progress to the
  // selected planet's published mean Earth-distance for the mission readout.
  let pathLength = 0;
  for (let i = 1; i < points.length; i++) pathLength += points[i].distanceTo(points[i - 1]);

  const missionData = NASA_MISSION_DATA[targetName];
  activeMission = {
    curve,
    points,
    pathLength,
    progress: 0,
    startedAt: performance.now(),
    duration: 12000,
    targetName,
    targetMesh,
    targetDistanceKm: missionData ? missionData.meanDistKm : 0,
    phase: 'travel',
    orbitStartedAt: 0,
    orbitRadius: Math.max((targetMesh.geometry?.parameters?.radius || 2.5) * 2.4, 3.5),
    orbitAngle: 0
  };

  // Place satellite at Earth immediately so the flight visibly starts there.
  satelliteMesh.position.copy(startPos);

  // Pause the solar-system orbital motion and frame the entire Earth-to-planet route.
  // Camera is placed above the midpoint, far enough away to keep both endpoints visible.
  focusedObject = null;
  focusedObjectName = 'Sun';
  const routeMidpoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
  const routeVector = new THREE.Vector3().subVectors(endPos, startPos);
  const routeLength = routeVector.length();
  const cameraOffset = new THREE.Vector3(0, Math.max(routeLength * 0.24, 18), Math.max(routeLength * 1.15, 55));
  const routeCameraPosition = routeMidpoint.clone().add(cameraOffset);
  new TWEEN.Tween(controls.target).to({ x: routeMidpoint.x, y: routeMidpoint.y, z: routeMidpoint.z }, 1300)
    .easing(TWEEN.Easing.Cubic.InOut).start();
  new TWEEN.Tween(camera.position).to({ x: routeCameraPosition.x, y: routeCameraPosition.y, z: routeCameraPosition.z }, 1300)
    .easing(TWEEN.Easing.Cubic.InOut).start();
}

function updateMissionSimulationFrame() {
  if (!activeMission || !satelliteMesh) return;

  const mission = activeMission;
  const targetPosition = new THREE.Vector3();
  mission.targetMesh.getWorldPosition(targetPosition);

  if (mission.phase === 'travel') {
    mission.progress = Math.min((performance.now() - mission.startedAt) / mission.duration, 1);
    satelliteMesh.position.copy(mission.curve.getPoint(mission.progress));

    // Distance is proportional to the sampled curved path, not the straight-line chord.
    let covered = 0;
    const segmentFloat = mission.progress * (mission.points.length - 1);
    const wholeSegments = Math.floor(segmentFloat);
    for (let i = 1; i <= wholeSegments; i++) {
      covered += mission.points[i].distanceTo(mission.points[i - 1]);
    }
    if (wholeSegments < mission.points.length - 1) {
      const fraction = segmentFloat - wholeSegments;
      const a = mission.points[wholeSegments];
      const b = mission.points[wholeSegments + 1];
      covered += a.distanceTo(b) * fraction;
    }
    const distanceKm = mission.pathLength > 0
      ? Math.round(mission.targetDistanceKm * covered / mission.pathLength)
      : 0;

    if (missionDistanceTag) {
      missionDistanceTag.textContent = `${mission.progress < 1 ? 'SATELLITE EN ROUTE' : 'ARRIVED'} • ${distanceKm.toLocaleString()} km`;
      missionDistanceTag.style.borderColor = '#22d3ee';
    }

    if (mission.progress >= 1) {
      // Erase the transfer line as soon as the satellite reaches the destination orbit.
      if (trajectoryCurveLine) {
        solarSystemGroup.remove(trajectoryCurveLine);
        trajectoryCurveLine.geometry.dispose();
        trajectoryCurveLine.material.dispose();
        trajectoryCurveLine = null;
      }
      mission.phase = 'orbit';
      // Clear the distance readout and zoom in to the destination before orbital motion begins.
      focusedObject = mission.targetMesh;
      focusedObjectName = mission.targetName;
      const destinationRadius = mission.targetMesh.geometry?.parameters?.radius || 2.5;
      const destinationCameraPosition = targetPosition.clone().add(new THREE.Vector3(
        destinationRadius * 4 + 6,
        destinationRadius * 2 + 4,
        destinationRadius * 4 + 6
      ));
      new TWEEN.Tween(controls.target).to({ x: targetPosition.x, y: targetPosition.y, z: targetPosition.z }, 1400)
        .easing(TWEEN.Easing.Cubic.InOut).start();
      new TWEEN.Tween(camera.position).to({ x: destinationCameraPosition.x, y: destinationCameraPosition.y, z: destinationCameraPosition.z }, 1400)
        .easing(TWEEN.Easing.Cubic.InOut).start();

      // Show a glowing dotted orbital path around the destination after arrival.
      const orbitPoints = [];
      const orbitRadius = mission.orbitRadius;
      for (let i = 0; i <= 128; i++) {
        const angle = (i / 128) * Math.PI * 2;
        orbitPoints.push(new THREE.Vector3(
          targetPosition.x + Math.cos(angle) * orbitRadius,
          targetPosition.y,
          targetPosition.z + Math.sin(angle) * orbitRadius
        ));
      }
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMaterial = new THREE.LineDashedMaterial({
        color: 0xa78bfa, dashSize: 0.65, gapSize: 0.45, transparent: true, opacity: 0.95
      });
      missionOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
      missionOrbitLine.computeLineDistances();
      solarSystemGroup.add(missionOrbitLine);
      mission.orbitStartedAt = performance.now();
      mission.orbitAngle = 0;
      if (missionDistanceTag) {
        missionDistanceTag.textContent = `ORBITING ${mission.targetName.toUpperCase()}`;
        missionDistanceTag.style.borderColor = '#a78bfa';
      }
    }
  } else if (mission.phase === 'orbit') {
    if (missionOrbitLine) {
      // The planet itself continues moving, so keep the visible orbit ring centered on it.
      const orbitPositions = missionOrbitLine.geometry.attributes.position;
      for (let i = 0; i < orbitPositions.count; i++) {
        const angle = (i / (orbitPositions.count - 1)) * Math.PI * 2;
        orbitPositions.setXYZ(i,
          targetPosition.x + Math.cos(angle) * mission.orbitRadius,
          targetPosition.y,
          targetPosition.z + Math.sin(angle) * mission.orbitRadius
        );
      }
      orbitPositions.needsUpdate = true;
      missionOrbitLine.geometry.computeBoundingSphere();
    }
    // Keep the satellite revolving around the destination planet; orbit motion is visible.
    mission.orbitAngle += 0.018;
    const r = mission.orbitRadius;
    satelliteMesh.position.set(
      targetPosition.x + Math.cos(mission.orbitAngle) * r,
      targetPosition.y + Math.sin(mission.orbitAngle * 0.55) * r * 0.28,
      targetPosition.z + Math.sin(mission.orbitAngle) * r
    );
    if (missionDistanceTag) {
      missionDistanceTag.textContent = `ORBITING ${mission.targetName.toUpperCase()}`;
    }
  }

  // Project the live satellite position into the HTML overlay so the distance rides
  // beside the satellite's head as it moves through the 3D scene.
  if (missionDistanceTag) {
    const projected = satelliteMesh.position.clone().project(camera);
    const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
    const visible = projected.z > -1 && projected.z < 1;
    missionDistanceTag.style.left = `${x + 16}px`;
    missionDistanceTag.style.top = `${y - 14}px`;
    missionDistanceTag.style.display = visible ? 'block' : 'none';
  }
}

function focusOnSatellite() {
  if (!satelliteMesh) return;
  controls.target.copy(satelliteMesh.position);
}

// Global scope exposures

/* Persistent Object Explorer: additive feature; original Solar System remains untouched. */
const EXPLORER_MOONS = {
  Earth: ['Moon'],
  Jupiter: ['Io', 'Europa', 'Ganymede'],
  Saturn: ['Titan']
};
const EXPLORER_OBJECTS = {
  Moon: { parent:'Earth', color:0xaaa9a5, subtitle:'Earth’s natural satellite', diameter:'3,474.8 km', distance:'384,400 km (average from Earth)', period:'27.3 days (orbit)', fact:'The Moon is tidally locked to Earth and strongly influences ocean tides.' },
  Phobos:{parent:'Mars',color:0x8b8178,subtitle:'Inner moon of Mars',diameter:'22.5 km (mean)',distance:'About 6,000 km from Mars',period:'7.65 hours (orbit)',fact:'Phobos orbits Mars faster than Mars rotates.'},
  Deimos:{parent:'Mars',color:0xb3a79a,subtitle:'Outer moon of Mars',diameter:'12.4 km (mean)',distance:'About 23,460 km from Mars',period:'30.3 hours (orbit)',fact:'Deimos is small, irregular, and covered with fine dust.'},
  Io:{parent:'Jupiter',color:0xe6b94f,subtitle:'Volcanically active moon of Jupiter',diameter:'3,643 km',distance:'421,700 km from Jupiter (average)',period:'1.77 days (orbit)',fact:'Io is the most volcanically active world known in the Solar System.'},
  Europa:{parent:'Jupiter',color:0xc9bda5,subtitle:'Icy moon of Jupiter',diameter:'3,122 km',distance:'671,100 km from Jupiter (average)',period:'3.55 days (orbit)',fact:'Europa likely contains a global ocean beneath its icy crust.'},
  Ganymede:{parent:'Jupiter',color:0x9b9180,subtitle:'Largest moon in the Solar System',diameter:'5,268 km',distance:'1,070,400 km from Jupiter (average)',period:'7.15 days (orbit)',fact:'Ganymede is the only moon known to have its own intrinsic magnetic field.'},
  Callisto:{parent:'Jupiter',color:0x655f58,subtitle:'Heavily cratered moon of Jupiter',diameter:'4,821 km',distance:'1,882,700 km from Jupiter (average)',period:'16.7 days (orbit)',fact:'Callisto has one of the oldest, most heavily cratered surfaces.'},
  Titan:{parent:'Saturn',color:0xc78b43,subtitle:'Largest moon of Saturn',diameter:'5,150 km',distance:'1,221,870 km from Saturn (average)',period:'15.95 days (orbit)',fact:'Titan has a dense nitrogen-rich atmosphere and lakes of liquid methane and ethane.'},
  Enceladus:{parent:'Saturn',color:0xd9e4e8,subtitle:'Icy, active moon of Saturn',diameter:'504 km',distance:'238,000 km from Saturn (average)',period:'1.37 days (orbit)',fact:'Enceladus sprays water-rich plumes from a subsurface ocean.'},
  Mimas:{parent:'Saturn',color:0xaaa9a4,subtitle:'Small icy moon of Saturn',diameter:'396 km',distance:'185,500 km from Saturn (average)',period:'0.94 days (orbit)',fact:'Its large Herschel crater gives Mimas a distinctive appearance.'},
  Titania:{parent:'Uranus',color:0x9c9a91,subtitle:'Largest moon of Uranus',diameter:'1,578 km',distance:'436,300 km from Uranus (average)',period:'8.7 days (orbit)',fact:'Titania is a mixture of ice and rock with a fractured surface.'},
  Oberon:{parent:'Uranus',color:0x77736c,subtitle:'Outer major moon of Uranus',diameter:'1,523 km',distance:'583,500 km from Uranus (average)',period:'13.5 days (orbit)',fact:'Oberon is heavily cratered and has a dark surface.'},
  Miranda:{parent:'Uranus',color:0xaaa49b,subtitle:'Small, geologically varied moon of Uranus',diameter:'472 km',distance:'129,900 km from Uranus (average)',period:'1.41 days (orbit)',fact:'Miranda has dramatic cliffs and patchwork terrain.'},
  Triton:{parent:'Neptune',color:0xb8c6c7,subtitle:'Largest moon of Neptune',diameter:'2,710 km',distance:'354,800 km from Neptune (average)',period:'5.88 days (retrograde orbit)',fact:'Triton travels in a retrograde orbit and has active nitrogen geysers.'},
  Proteus:{parent:'Neptune',color:0x777a79,subtitle:'Large irregular moon of Neptune',diameter:'About 420 km',distance:'117,600 km from Neptune (average)',period:'1.12 days (orbit)',fact:'Proteus is irregularly shaped and heavily cratered.'},
  Nereid:{parent:'Neptune',color:0x8d8b85,subtitle:'Distant moon of Neptune',diameter:'About 340 km',distance:'5.5 million km from Neptune (average)',period:'360 days (orbit)',fact:'Nereid follows one of the most eccentric known moon orbits.'}
};
const EXPLORER_CRAFT = {
  hohmann:{title:'Hohmann Transfer Model',subtitle:'Efficient orbital transfer trajectory',color:0x35d9ff,details:[['Model','Hohmann transfer'],['Purpose','Illustrates a two-impulse transfer between circular orbits'],['Key concept','Efficiency trades travel time for lower idealized Δv'],['Caveat','A trajectory model, not a physical spacecraft'] ],fact:'A Hohmann transfer is an idealized orbital maneuver; real missions include launch windows, gravity assists, and other constraints.'},
  new_horizons:{title:'New Horizons',subtitle:'NASA deep-space planetary probe',color:0x47c9ff,details:[['Launch','January 19, 2006'],['Primary milestone','Pluto flyby: July 14, 2015'],['Current mission','Kuiper Belt exploration'],['Agency','NASA / Johns Hopkins APL'] ],fact:'New Horizons made the first close-up exploration of Pluto and later flew past Arrokoth in the Kuiper Belt.'},
  voyager:{title:'Voyager 1',subtitle:'NASA interstellar mission spacecraft',color:0xffca67,details:[['Launch','September 5, 1977'],['Major milestone','Interstellar space entered in 2012'],['Mission focus','Outer planets and interstellar space'],['Agency','NASA / JPL'] ],fact:'Voyager 1 returned landmark images and measurements of the outer planets before continuing into interstellar space.'},
  ion_drive:{title:'Ion Propulsion Probe',subtitle:'Concept spacecraft model',color:0xb79aff,details:[['Propulsion','Electric ion propulsion (concept)'],['Thrust','Low thrust over long durations'],['Strength','High propellant efficiency'],['Status','Illustrative mission concept, not a specific NASA spacecraft'] ],fact:'Ion engines accelerate charged particles to produce efficient thrust, usually over long periods.'}
};
let explorerRenderer=null, explorerScene=null, explorerCamera=null, explorerControls=null, explorerModel=null, explorerRAF=0, explorerResizeObserver=null, explorerCurrentKey='Earth';
function installExplorerUI(){
 if(document.getElementById('cosmic-explorer')) return;
 const root=document.createElement('div'); root.id='cosmic-explorer'; root.className='cosmic-explorer hidden';
 root.innerHTML=`<div class="ce-backdrop"></div><aside class="ce-nav" id="ce-nav"><div class="ce-brand"><span class="ce-brand-icon">✦</span><div><b>COSMIC ODYSSEY</b><small>OBJECT EXPLORER</small></div><button class="ce-close-nav" onclick="toggleExplorerNav(false)" aria-label="Close navigation">×</button></div><button class="ce-nav-item ce-dashboard" onclick="openExplorerDashboard()"><i class="fa-solid fa-gauge-high"></i> Dashboard</button><button class="ce-nav-item ce-milkyway-nav" onclick="openMilkyWayGalaxy()"><i class="fa-solid fa-star"></i> Milky Way Galaxy</button><button class="ce-nav-item ce-mission-nav" onclick="openExplorerMissionSimulator()"><i class="fa-solid fa-satellite-dish"></i> Mission Simulator</button><button class="ce-nav-item ce-blackhole-nav" onclick="openBlackHoleExplorer()"><i class="fa-solid fa-circle"></i> Black Hole</button><div class="ce-nav-heading">PLANETS</div><div id="ce-planet-list"></div><div class="ce-nav-heading">MISSION SPACECRAFT</div><div id="ce-craft-list"></div><div class="ce-nav-foot">NASA data links included where applicable</div><button class="ce-nav-item ce-creator-nav" onclick="openCreatorPortfolio()"><i class="fa-solid fa-user-astronaut"></i> Get to Know the Creator</button></aside><main class="ce-main"><header class="ce-top"><button class="ce-hamburger" onclick="toggleExplorerNav()" aria-label="Open navigation"><i class="fa-solid fa-bars"></i></button><div><span class="ce-eyebrow">INTERACTIVE 3D DATABASE</span><h2 id="ce-top-title">Dashboard</h2></div><button class="ce-exit" onclick="closeExplorer()"><i class="fa-solid fa-arrow-left"></i><span>Back to Solar System</span></button></header><section id="ce-dashboard" class="ce-dashboard-content">
<div class="ce-dashboard-status"><span class="ce-status-dot"></span><span>EXPLORER STATUS</span><b>READY</b><small>Educational 3D environment · Not live spacecraft telemetry</small></div>
<div class="ce-welcome ce-welcome-real"><span class="ce-pill">COSMIC ODYSSEY / MISSION CONTROL</span><h1>Your window into the universe.</h1><p>Explore the Solar System through interactive 3D worlds, featured moons, spacecraft models, and dedicated Milky Way and black hole experiences. Select a destination to open its model and science guide.</p><div class="ce-voice-actions ce-dashboard-voice-actions"><button class="ce-listen" id="ce-dashboard-listen" onclick="speakExplorerInfo()"><i class="fa-solid fa-volume-high"></i><span>Listen to Dashboard</span></button><button class="ce-voice-pause" id="ce-dashboard-voice-pause" onclick="toggleExplorerVoicePause()" aria-label="Pause dashboard narration" disabled><i class="fa-solid fa-pause"></i><span>Pause</span></button></div><div class="ce-dashboard-actions"><button onclick="openExplorerObject('Earth')"><i class="fa-solid fa-earth-americas"></i> Explore Earth <i class="fa-solid fa-arrow-right"></i></button><button onclick="openExplorerObject('new_horizons','craft')"><i class="fa-solid fa-satellite"></i> Meet New Horizons</button><button onclick="openMilkyWayGalaxy()"><i class="fa-solid fa-star"></i> Open Milky Way</button><button onclick="openBlackHoleExplorer()"><i class="fa-solid fa-circle"></i> Black Hole Explorer</button></div></div>
<div class="ce-dashboard-section-head"><div><span>AT A GLANCE</span><h2>Explore the collection</h2></div><small>Content available in this project</small></div>
<div class="ce-card-grid ce-card-grid-real"><article><span>08</span><b>Planets</b><small>Mercury to Neptune</small></article><article><span>05</span><b>Featured moons</b><small>Earth, Jupiter & Saturn</small></article><article><span>04</span><b>Spacecraft models</b><small>Mission and concept models</small></article><article><span>02</span><b>Cosmic environments</b><small>Milky Way & black hole</small></article></div>
<div class="ce-dashboard-lower"><section class="ce-dashboard-panel"><div class="ce-dashboard-section-head"><div><span>QUICK ACCESS</span><h2>Choose your next destination</h2></div></div><div class="ce-destination-list"><button onclick="openMilkyWayGalaxy()"><span class="ce-dest-icon ce-galaxy-icon"><i class="fa-solid fa-star"></i></span><span><b>Milky Way Galaxy</b><small>Explore our home galaxy in 3D</small></span><i class="fa-solid fa-chevron-right"></i></button><button onclick="openBlackHoleExplorer()"><span class="ce-dest-icon ce-blackhole-icon"><i class="fa-solid fa-circle"></i></span><span><b>Black Hole Explorer</b><small>Discover event horizons and gravity</small></span><i class="fa-solid fa-chevron-right"></i></button><button onclick="openExplorerObject('voyager','craft')"><span class="ce-dest-icon ce-craft-icon"><i class="fa-solid fa-rocket"></i></span><span><b>Interstellar Missions</b><small>Meet Voyager 1 and deep-space explorers</small></span><i class="fa-solid fa-chevron-right"></i></button><button type="button" class="ce-universe-destination" onclick="window.open('https://science.nasa.gov/universe/', '_blank', 'noopener,noreferrer')"><span><b>Explore the Universe</b><small>Read NASA science about galaxies and cosmic origins</small></span><i class="fa-solid fa-arrow-up-right-from-square"></i></button></div></section><section class="ce-dashboard-panel ce-how-panel"><div class="ce-dashboard-section-head"><div><span>HOW TO EXPLORE</span><h2>Three simple steps</h2></div></div><ol class="ce-how-list"><li><b>01</b><span><strong>Choose an object</strong><small>Use the navigation panel to select a planet, moon, or spacecraft.</small></span></li><li><b>02</b><span><strong>Explore in 3D</strong><small>Rotate the model and zoom in or out to inspect it from different angles.</small></span></li><li><b>03</b><span><strong>Learn and listen</strong><small>Read key facts, use voice narration, and follow official NASA resources.</small></span></li></ol></section></div>
<div class="ce-nasa-links"><h3>Continue learning with official NASA resources</h3><a class="ce-nasa-link" href="https://www.nasa.gov/" target="_blank" rel="noopener"><i class="fa-solid fa-earth-americas"></i> NASA Official Website <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="ce-nasa-link" href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> Solar System Exploration <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="ce-nasa-link" href="https://science.nasa.gov/mission/" target="_blank" rel="noopener"><i class="fa-solid fa-rocket"></i> NASA Missions <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="ce-nasa-link" href="https://eyes.nasa.gov/" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> NASA Eyes <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="ce-nasa-link" href="https://images.nasa.gov/" target="_blank" rel="noopener"><i class="fa-regular fa-images"></i> NASA Image & Video Library <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="ce-nasa-link" href="https://www.jpl.nasa.gov/" target="_blank" rel="noopener"><i class="fa-solid fa-satellite"></i> NASA Jet Propulsion Laboratory <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div><p class="ce-source-note">NASA links open in a new tab. Dashboard counts describe this project's built-in educational collection; they are not live mission data.</p></section><section id="ce-creator" class="ce-creator hidden">
 <div class="creator-stars" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
 <div class="creator-scroll">
  <nav class="creator-portfolio-nav" aria-label="Creator portfolio navigation"><a class="creator-nav-brand" href="#creator-home" onclick="scrollCreatorTo('creator-home');return false"><span>✦</span> ARIBA</a><div class="creator-nav-links"><a href="#creator-story" onclick="scrollCreatorTo('creator-story');return false">About</a><a href="#creator-interests" onclick="scrollCreatorTo('creator-interests');return false">Interests</a><a href="#creator-project" onclick="scrollCreatorTo('creator-project');return false">Project</a><a href="#creator-skills" onclick="scrollCreatorTo('creator-skills');return false">Focus</a><a href="#creator-contact" onclick="scrollCreatorTo('creator-contact');return false">Contact</a></div></nav>
  <section class="creator-hero" id="creator-home">
   
   <span class="creator-kicker"><i class="fa-solid fa-sparkles"></i> THE MIND BEHIND THE MISSION</span>
   <h1>Hi, I'm <em>Jannatul Maowa Ariba</em></h1>
   <p class="creator-lead">A curious mind, a student of Computer Science, and a dreamer drawn to the vastness of the universe.</p>
   <div class="creator-tags"><span> <i class="fa-solid fa-code"></i> CSE Student</span><span><i class="fa-solid fa-star"></i> Space Enthusiast</span><span><i class="fa-solid fa-rocket"></i> Learning by Building</span></div>
   <a class="creator-scroll-cta" href="#creator-story" onclick="scrollCreatorTo('creator-story');return false">Explore my universe <i class="fa-solid fa-arrow-down"></i></a>
  </section>
  <section class="creator-section creator-intro" id="creator-story">
   <div class="creator-section-label">01 / A LITTLE ABOUT ME</div><h2>Curiosity is where every journey begins.</h2>
   <p>I’m <strong>Jannatul Maowa Ariba</strong>, a Computer Science and Engineering student who loves turning ideas into interactive experiences. I enjoy exploring technology, building projects, and learning by doing—one experiment, one line of code, and one new question at a time.</p>
   <p>For me, technology is more than writing code. It is a way to make complex ideas easier to explore, transform imagination into something people can interact with, and keep asking “what if?”</p>
  </section>
  <section class="creator-section creator-passion" id="creator-interests">
   <div class="creator-section-label">02 / MY COSMIC CURIOSITY</div><h2>Drawn to the beautiful unknown.</h2>
   <p>Astronomy and space exploration inspire me because they remind us how much there is still to discover. I’m fascinated by planets and their worlds, distant galaxies, stars being born and fading away, the scale of the universe, and the mysteries that continue to challenge human understanding.</p>
   <div class="creator-interest-grid"><article><i class="fa-solid fa-earth-americas"></i><h3>Planets & Worlds</h3><p>Different landscapes, atmospheres, moons, and the possibility of worlds unlike our own.</p></article><article><i class="fa-solid fa-star creator-galaxy-star-icon"></i><h3>Galaxies & Stars</h3><p>The immense beauty of galaxies, stellar life cycles, nebulae, and deep space.</p></article><article><i class="fa-solid fa-satellite"></i><h3>Space Exploration</h3><p>Human ingenuity reaching farther through spacecraft, missions, and scientific discovery.</p></article><article><i class="fa-solid fa-infinity"></i><h3>Cosmic Mysteries</h3><p>Big questions about the universe that encourage curiosity, imagination, and learning.</p></article></div>
  </section>
  <section class="creator-project" id="creator-project">
   
   <div class="creator-project-copy"><div class="creator-section-label">03 / WHY I BUILT IT</div><h2>Cosmic Odyssey</h2><p class="creator-project-subtitle">A small step toward making the universe feel closer.</p><p>Cosmic Odyssey grew from my fascination with space and my desire to combine it with what I’m learning in computer science. I wanted to create more than a static page of facts: an immersive place where visitors can explore celestial objects, interact with 3D models, discover useful information, and feel invited to ask their own questions.</p><p>My vision is to make learning about the cosmos feel engaging, accessible, and full of wonder. This project is both a learning journey and a tribute to the curiosity that keeps us looking up at the stars.</p><div class="creator-project-pills"><span>Interactive 3D</span><span>Learning through exploration</span><span>Built with curiosity</span></div></div>
  </section>
  <section class="creator-section creator-focus" id="creator-skills"><div class="creator-section-label">04 / WHAT I LOVE TO EXPLORE</div><h2>Where technology meets curiosity.</h2><p>I enjoy learning through hands-on projects and exploring how software can turn ideas into experiences people can interact with. My current interests connect software development, research, data, and space-inspired digital experiences.</p><div class="creator-focus-grid"><article><i class="fa-solid fa-code"></i><h3>Software Development</h3><p>Building useful, interactive, and responsive web experiences.</p></article><article><i class="fa-solid fa-microscope"></i><h3>Research & Discovery</h3><p>Asking questions, exploring ideas, and learning through experimentation.</p></article><article><i class="fa-solid fa-cubes"></i><h3>Interactive Experiences</h3><p>Combining design, code, and 3D visuals to make learning engaging.</p></article></div></section>
  <section class="creator-quote"><i class="fa-solid fa-quote-left"></i><p>The universe is vast, but every great journey begins with one curious question.</p><span>— The spirit behind Cosmic Odyssey</span></section>
  <section class="creator-contact" id="creator-contact"><div class="creator-section-label">05 / LET’S CONNECT</div><h2>Contact <em>Me</em></h2><p>Have an idea, a question, or a shared fascination with the cosmos? I’d love to connect.</p>
   <div class="creator-contact-grid">
    <a href="mailto:jannatulmaowaariba0@gmail.com" aria-label="Email Jannatul Maowa Ariba" title="Email"><i class="fa-solid fa-envelope"></i><span>Email</span><small>Send me an email</small></a>
    <a href="https://wa.me/8801856119274" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span><small>Message me directly</small></a>
    <a href="https://github.com/ariba0904" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github"></i><span>GitHub</span><small>Projects & code</small></a>
    <a href="https://www.instagram.com/j_m_ariba" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i><span>Instagram</span><small>Find me on Instagram</small></a>
    <a href="https://www.facebook.com/jm.ariba.09" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i><span>Facebook</span><small>Connect on Facebook</small></a>
    <a href="https://www.linkedin.com/in/jannatul-maowa-ariba-218a0b349" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i><span>LinkedIn</span><small>Professional profile</small></a>
    <a href="https://j-m-ariba.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" title="Portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i><span>Portfolio</span><small>Explore my work</small></a>
   </div><div class="creator-contact-foot"><span><i class="fa-solid fa-location-dot"></i> Bangladesh</span><span><i class="fa-solid fa-heart"></i> Made with curiosity & wonder</span></div>
  </section>
 </div>
</section><section id="ce-blackhole" class="ce-blackhole-content hidden">
 <div class="bh-heading"><span class="ce-pill">NASA-INSPIRED SCIENCE LAB</span><h1>Into the Gravity Well</h1><p>Explore the physics of one of the universe’s most extreme objects first, then choose a satellite, aircraft, star, or planet to see a dedicated 3D model pulled toward the event horizon.</p></div>
 <div class="bh-layout">
  <div class="bh-visual-panel">
   <div class="bh-scene-label"><span class="bh-live-dot"></span> 3D GRAVITATIONAL ENCOUNTER <span id="bh-status">READY</span></div>
   <div id="bh-canvas" class="bh-canvas" aria-label="Animated 3D black hole simulation"></div>
  </div>
  <div id="bh-splitter" class="bh-splitter" role="separator" aria-label="Resize information sidebar" title="Drag to resize panels"></div><aside class="bh-info-panel">
   <div class="bh-voice-row"><button class="bh-voice-btn" onclick="narrateBlackHole()"><i class="fa-solid fa-volume-high"></i> Voice narration</button><button class="bh-stop-voice" onclick="stopBlackHoleNarration()" aria-label="Stop voice narration" title="Stop narration"><i class="fa-solid fa-stop"></i></button></div>
   <div class="bh-info-kicker">MISSION BRIEFING · NASA SOURCED</div><h2 id="bh-info-title">What happens near a black hole?</h2>
   <p id="bh-info-summary">A black hole is a region of spacetime where gravity is so intense that, beyond its event horizon, nothing—not even light—can escape. It is not a cosmic vacuum cleaner: objects can orbit it safely at suitable distances. The bright accretion disk is superheated gas, while gravitational lensing bends light around the dark shadow. Close encounters can produce extreme tidal forces, stretch stars, and heat infalling matter. A black hole’s outcome depends on its mass, spin, and the object’s speed and trajectory.</p>
   <div class="bh-controls bh-sidebar-controls">
    <label for="bh-object-select">Choose an object to simulate</label>
    <select id="bh-object-select" onchange="selectBlackHoleObject()"><option value="satellite">🛰 Satellite</option><option value="aircraft">✈ Aircraft (illustrative)</option><option value="star">⭐ Star</option><option value="planet">🪐 Planet</option></select>
    <div class="bh-sidebar-actions"><button class="bh-run-btn" onclick="runBlackHoleSimulation()"><i class="fa-solid fa-play"></i> Run Simulation</button><button class="bh-reset-btn" onclick="resetBlackHoleSimulation()"><i class="fa-solid fa-rotate-left"></i> Reset</button></div>
    <div class="bh-progress-wrap"><div><span>ENCOUNTER PROGRESS</span><b id="bh-progress-label">0%</b></div><div class="bh-progress-track"><span id="bh-progress"></span></div></div>
   </div>
   <div class="bh-fact-grid"><article><small>BOUNDARY</small><b>Event horizon</b><p>The point of no return, not a solid surface.</p></article><article><small>VISIBLE GLOW</small><b>Accretion disk</b><p>Hot gas shines as it heats up while orbiting inward.</p></article></div>
   <div class="bh-info-scroll" id="bh-info-details"><h3>Black hole science · start here</h3><p><strong>Event horizon:</strong> The boundary beyond which escape is impossible. It is not a solid surface.</p><p><strong>Accretion disk:</strong> Gas and dust can heat up as they orbit and spiral inward, producing intense radiation. The black hole itself emits no light from inside the horizon.</p><p><strong>Gravity and orbits:</strong> Black holes do not automatically swallow everything nearby. At a safe distance, an object can orbit; a close pass may bend its path or lead to capture.</p><p><strong>Tidal disruption:</strong> If the gravitational difference across a star becomes extreme, the star may be stretched into debris that can feed the accretion flow.</p><p><strong>Gravitational lensing:</strong> Spacetime curvature bends light, making the background appear distorted around the black hole.</p><p><strong>Gravity and trajectory:</strong> An object passing nearby can have its path bent. If its speed and trajectory allow a stable orbit, it may orbit; otherwise it can escape or fall inward.</p><p><strong>Tidal forces:</strong> Gravity can pull more strongly on the nearer side of an extended object than the farther side. For some black holes and trajectories, this difference can stretch and disrupt an object.</p><p><strong>Light bending:</strong> Strong gravity curves spacetime, bending light paths and distorting the view of material behind the black hole.</p><p class="bh-note">This interactive is a qualitative visualization, not a numerical general-relativity simulation. Outcomes depend on mass, spin, speed, trajectory, and object structure.</p></div>
   <a class="bh-nasa-official" href="https://science.nasa.gov/universe/black-holes/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i><span><b>Explore NASA’s Black Holes Guide</b><small>Open official NASA science website</small></span></a>
   <a class="bh-nasa-official bh-nasa-secondary" href="https://science.nasa.gov/universe/black-holes/anatomy/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-book-open"></i><span><b>Black Hole Anatomy</b><small>NASA Science · Learn more</small></span></a>
  </aside>
 </div>
</section>
<section id="ce-detail" class="ce-detail hidden"><div class="ce-model-stage" id="ce-model-stage"><div class="ce-model-badge"><span class="ce-live-dot"></span> LIVE 3D MODEL</div><div class="ce-model-hint"><i class="fa-solid fa-hand-pointer"></i> Drag to rotate · Scroll to zoom</div><div id="ce-model-canvas"></div><div class="ce-model-controls"><button onclick="toggleExplorerRotation()" id="ce-rotation-btn"><i class="fa-solid fa-pause"></i> Pause rotation</button><button onclick="resetExplorerCamera()"><i class="fa-solid fa-arrows-to-circle"></i> Reset view</button></div></div><div class="ce-resize-handle" id="ce-resize-handle" title="Drag to resize information panel"></div><aside class="ce-info"><div class="ce-info-head"><div><span id="ce-category" class="ce-pill">PLANET</span><h1 id="ce-title">Earth</h1><p id="ce-subtitle"></p></div><div class="ce-voice-actions"><button class="ce-listen" id="ce-listen" onclick="speakExplorerInfo()"><i class="fa-solid fa-volume-high"></i><span>Listen</span></button><button class="ce-voice-pause" id="ce-voice-pause" onclick="toggleExplorerVoicePause()" aria-label="Pause narration" disabled><i class="fa-solid fa-pause"></i><span>Pause</span></button></div></div><div id="ce-info-body" class="ce-info-body"></div><div class="ce-info-footer"><span><i class="fa-solid fa-database"></i> Verified reference links</span><a id="ce-source-link" href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener">View NASA source ↗</a></div></aside></section></main>`;
 document.body.appendChild(root);
 const planetList=document.getElementById('ce-planet-list');
 ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'].forEach(k=>{
   const row=document.createElement('div'); row.className='ce-planet-group';
   const button=makeExplorerNavItem(k,'planet',k);
   button.classList.add('ce-planet-parent');
   button.onclick=()=>{openExplorerObject(k,'planet'); const children=row.querySelector('.ce-submoon-list'); if(children) children.classList.toggle('expanded');};
   row.appendChild(button);
   if(EXPLORER_MOONS[k]){
     const children=document.createElement('div'); children.className='ce-submoon-list';
     EXPLORER_MOONS[k].forEach(m=>children.appendChild(makeExplorerNavItem(m,'moon',m)));
     row.appendChild(children);
   }
   planetList.appendChild(row);
 });
 const craftList=document.getElementById('ce-craft-list'); Object.keys(EXPLORER_CRAFT).forEach(k=>craftList.appendChild(makeExplorerNavItem(EXPLORER_CRAFT[k].title,'craft',k)));
 const handle=document.getElementById('ce-resize-handle'); let resizing=false;
 handle.addEventListener('pointerdown',e=>{resizing=true;handle.setPointerCapture(e.pointerId);document.body.classList.add('ce-resizing');});
 handle.addEventListener('pointermove',e=>{if(!resizing)return;const width=Math.max(280,Math.min(window.innerWidth*.62,window.innerWidth-e.clientX));root.style.setProperty('--ce-info-width',width+'px');});
 handle.addEventListener('pointerup',()=>{resizing=false;document.body.classList.remove('ce-resizing');});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!root.classList.contains('hidden')){if(window.innerWidth<760)toggleExplorerNav(false);else closeExplorer();}});
}
function makeExplorerNavItem(label,type,key){const b=document.createElement('button');b.className='ce-nav-item';b.dataset.key=key||label;b.dataset.type=type;b.innerHTML=`<span class="ce-nav-dot ${type}"></span><span>${label}</span>`;b.onclick=()=>openExplorerObject(key||label,type);return b;}
function toggleExplorerNav(force){const nav=document.getElementById('ce-nav');if(!nav)return;const open=typeof force==='boolean'?force:!nav.classList.contains('open');nav.classList.toggle('open',open);}
function openExplorer(){installExplorerUI();document.getElementById('cosmic-explorer').classList.remove('ce-galaxy-mode','ce-mission-mode');document.getElementById('cosmic-explorer').classList.remove('hidden');document.getElementById('quick-dock')?.classList.add('ce-original-hidden');document.getElementById('info-panel')?.classList.add('ce-original-hidden');document.querySelector('header.glass-nav')?.classList.add('ce-original-hidden');openExplorerDashboard();}
function openMilkyWayGalaxy(){closeMissionModal();installExplorerUI();const root=document.getElementById('cosmic-explorer');root?.classList.remove('hidden','ce-mission-mode');root?.classList.add('ce-galaxy-mode');document.getElementById('info-panel')?.classList.remove('ce-original-hidden');document.getElementById('quick-dock')?.classList.add('ce-original-hidden');if(typeof switchView==='function'){switchView('galaxy');}else{console.error('Milky Way view switcher is unavailable.');}document.querySelectorAll('.ce-nav-item.active').forEach(x=>x.classList.remove('active'));document.querySelector('.ce-milkyway-nav')?.classList.add('active');requestAnimationFrame(()=>{if(typeof onWindowResize==='function')onWindowResize();});}
function closeExplorer(){document.getElementById('cosmic-explorer')?.classList.remove('ce-galaxy-mode','ce-mission-mode');stopBlackHoleNarration();if(window.__bhRAF)cancelAnimationFrame(window.__bhRAF);if(window.__bhRenderer){window.__bhRenderer.dispose();window.__bhRenderer=null;}stopExplorerVoice();const root=document.getElementById('cosmic-explorer');if(root)root.classList.add('hidden');document.querySelectorAll('.ce-original-hidden').forEach(e=>e.classList.remove('ce-original-hidden'));if(explorerRAF)cancelAnimationFrame(explorerRAF);if(explorerRenderer){explorerRenderer.dispose();explorerRenderer=null;}if(explorerControls){explorerControls.dispose();explorerControls=null;}if(window.speechSynthesis)window.speechSynthesis.cancel();}
function openExplorerDashboard(){closeMissionModal();stopExplorerVoice();installExplorerUI();document.getElementById('cosmic-explorer')?.classList.remove('ce-galaxy-mode','ce-mission-mode');explorerCurrentKey='Dashboard';document.getElementById('ce-dashboard').classList.remove('hidden');document.getElementById('ce-detail').classList.add('hidden');document.getElementById('ce-blackhole')?.classList.add('hidden');document.getElementById('ce-creator')?.classList.add('hidden');document.getElementById('ce-top-title').textContent='Dashboard';const dashboardListen=document.getElementById('ce-dashboard-listen');if(dashboardListen)dashboardListen.dataset.narration='Welcome to Cosmic Odyssey mission control. This is an educational three dimensional space explorer, not a live spacecraft telemetry dashboard. Explore eight planets, five featured moons, four spacecraft models, and dedicated Milky Way and black hole environments. Select a destination to inspect its 3D model, read science facts, and listen to narration. Use the official NASA links for further learning.';document.querySelectorAll('.ce-nav-item.active').forEach(x=>x.classList.remove('active'));if(window.innerWidth<760)toggleExplorerNav(false);if(explorerRAF)cancelAnimationFrame(explorerRAF);if(explorerRenderer){explorerRenderer.dispose();explorerRenderer=null;}if(explorerControls){explorerControls.dispose();explorerControls=null;}}
function openCreatorPortfolio(){
 closeMissionModal();stopExplorerVoice();installExplorerUI();document.getElementById('cosmic-explorer')?.classList.remove('ce-galaxy-mode','ce-mission-mode');
 explorerCurrentKey='Creator';
 document.getElementById('ce-dashboard').classList.add('hidden');
 document.getElementById('ce-detail').classList.add('hidden');
 document.getElementById('ce-blackhole')?.classList.add('hidden');
 document.getElementById('ce-creator').classList.remove('hidden');
 document.getElementById('ce-top-title').textContent='Get to Know the Creator';
 document.querySelectorAll('.ce-nav-item.active').forEach(x=>x.classList.remove('active'));
 document.querySelector('.ce-creator-nav')?.classList.add('active');
 if(window.innerWidth<760)toggleExplorerNav(false);
 if(explorerRAF)cancelAnimationFrame(explorerRAF);
 if(explorerRenderer){explorerRenderer.dispose();explorerRenderer=null;}
 if(explorerControls){explorerControls.dispose();explorerControls=null;}
}
function scrollCreatorTo(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
function openExplorerObject(key,type){closeMissionModal();stopExplorerVoice();installExplorerUI();document.getElementById('cosmic-explorer')?.classList.remove('ce-galaxy-mode','ce-mission-mode');if(type==='moon'){const parent=EXPLORER_OBJECTS[key]?.parent;const group=[...document.querySelectorAll('.ce-planet-group')].find(g=>g.querySelector('.ce-planet-parent')?.dataset.key===parent);group?.querySelector('.ce-submoon-list')?.classList.add('expanded');}explorerCurrentKey=key;document.getElementById('ce-dashboard').classList.add('hidden');document.getElementById('ce-blackhole')?.classList.add('hidden');document.getElementById('ce-creator')?.classList.add('hidden');document.getElementById('ce-detail').classList.remove('hidden');document.getElementById('ce-top-title').textContent=type==='craft'?(EXPLORER_CRAFT[key]?.title||key):key;document.querySelectorAll('.ce-nav-item.active').forEach(x=>x.classList.remove('active'));document.querySelector(`.ce-nav-item[data-key="${CSS.escape(key)}"]`)?.classList.add('active');if(window.innerWidth<760)toggleExplorerNav(false);if(type==='craft')renderExplorerCraft(key);else renderExplorerCelestial(key,type);}
let bhScene=null,bhCamera=null,bhRenderer=null,bhRAF=0,bhObject=null,bhObjectKind=null,bhDisk=null,bhParticles=null,bhRunning=false,bhProgress=0,bhLast=0,bhHasChosenObject=false;
const BH_OBJECTS={
 satellite:{name:'Satellite',color:0x6be7ff,size:.20,title:'A satellite near a black hole',summary:'A satellite is not automatically swallowed. Its fate depends on its approach speed, direction, and the black hole’s mass.',detail:'<h3>Satellite encounter</h3><p><strong>Gravity bends the path:</strong> A passing satellite can be deflected into a new trajectory. It may fly past, become gravitationally bound, or plunge inward.</p><p><strong>Orbit is not guaranteed:</strong> A stable orbit requires the right energy and angular momentum. The animation exaggerates the pull for clarity and is not a trajectory prediction.</p><p><strong>Inside the event horizon:</strong> Escape is no longer possible. The horizon is a boundary in spacetime, not a physical shell.</p>'},
 aircraft:{name:'Aircraft',color:0xffc58a,size:.24,title:'Aircraft: a thought experiment',summary:'Aircraft cannot normally travel through space to encounter a black hole. This option is a fictional scale model for visualizing gravitational deflection.',detail:'<h3>Aircraft thought experiment</h3><p><strong>Important context:</strong> An aircraft needs an atmosphere and cannot fly into deep space as shown. Here it is treated as a generic moving object.</p><p><strong>Gravity:</strong> If any object passes close enough to a massive body, gravity changes its motion. A close pass may lead to deflection or capture depending on its initial conditions.</p><p><strong>Real-world outcome:</strong> This animation is conceptual, not an aircraft flight or survival model.</p>'},
 star:{name:'Star',color:0xffa34d,size:.36,title:'A star approaching a black hole',summary:'If a star passes sufficiently close, tidal forces can overwhelm its self-gravity and stretch it into a stream of gas—a tidal disruption event.',detail:'<h3>Stellar tidal disruption</h3><p><strong>Tidal forces:</strong> The near side of a star experiences stronger gravity than the far side. A sufficiently close encounter can stretch and tear the star apart.</p><p><strong>Bright aftermath:</strong> Some stellar debris can form a hot accretion flow and emit radiation as it loses energy. Not every encounter creates the same outcome.</p><p><strong>Mass matters:</strong> The result depends on the star, black-hole mass, spin, and closest approach. The stretching in this scene is illustrative.</p>'},
 planet:{name:'Planet',color:0x8d9dff,size:.30,title:'A planet near a black hole',summary:'A planet may be deflected, orbit the black hole under suitable conditions, or be disrupted during an extremely close encounter.',detail:'<h3>Planetary encounter</h3><p><strong>Flyby or orbit:</strong> A planet passing at a distance may be deflected. Capture or a bound orbit depends on energy exchange and the full system dynamics.</p><p><strong>Extreme close pass:</strong> Strong tidal gradients can deform or potentially disrupt a planet, depending on its structure and distance.</p><p><strong>No single fate:</strong> There is no universal “suction” radius. The outcome depends on mass, velocity, trajectory, and physical properties.</p>'}
};
function toggleBlackHoleSidebar(){if(bhRenderer&&bhCamera){const mount=document.getElementById('bh-canvas');if(mount){bhCamera.aspect=mount.clientWidth/Math.max(1,mount.clientHeight);bhCamera.updateProjectionMatrix();bhRenderer.setSize(mount.clientWidth,mount.clientHeight);}}}
function openBlackHoleExplorer(){
 closeMissionModal();stopExplorerVoice();installExplorerUI();document.getElementById('cosmic-explorer')?.classList.remove('ce-galaxy-mode','ce-mission-mode');
 explorerCurrentKey='Black Hole';
 document.getElementById('ce-dashboard').classList.add('hidden');
 document.getElementById('ce-detail').classList.add('hidden');
 document.getElementById('ce-creator')?.classList.add('hidden');
 document.getElementById('ce-blackhole').classList.remove('hidden');
 document.getElementById('ce-top-title').textContent='Black Hole Explorer';
 document.querySelectorAll('.ce-nav-item.active').forEach(x=>x.classList.remove('active'));
 document.querySelector('.ce-blackhole-nav')?.classList.add('active');
 if(window.innerWidth<760)toggleExplorerNav(false);
 if(explorerRAF)cancelAnimationFrame(explorerRAF);
 if(explorerRenderer){explorerRenderer.dispose();explorerRenderer=null;}
 if(explorerControls){explorerControls.dispose();explorerControls=null;}
 bhHasChosenObject=false;const objectPicker=document.getElementById('bh-object-select');if(objectPicker)objectPicker.value='satellite';
 const introTitle=document.getElementById('bh-info-title');if(introTitle)introTitle.textContent='What happens near a black hole?';
 const introSummary=document.getElementById('bh-info-summary');if(introSummary)introSummary.textContent='A black hole is a region of spacetime where gravity is so intense that, beyond its event horizon, nothing—not even light—can escape. It is not a cosmic vacuum cleaner: objects can orbit it safely at suitable distances. The bright accretion disk is superheated gas, while gravitational lensing bends light around the dark shadow. Close encounters can produce extreme tidal forces, stretch stars, and heat infalling matter. A black hole’s outcome depends on its mass, spin, and the object’s speed and trajectory.';
 initBlackHoleScene();resetBlackHoleSimulation();setupBHSplitter();
}
function initBlackHoleScene(){
 const mount=document.getElementById('bh-canvas');if(!mount||!window.THREE)return;
 if(bhRAF)cancelAnimationFrame(bhRAF);if(bhRenderer){bhRenderer.dispose();bhRenderer=null;}
 mount.innerHTML='';
 bhScene=new THREE.Scene();bhScene.background=new THREE.Color(0x02030a);bhScene.fog=new THREE.FogExp2(0x02030a,.012);
 bhCamera=new THREE.PerspectiveCamera(42,mount.clientWidth/Math.max(1,mount.clientHeight),.1,180);
 let camRadius=5.9,camTheta=.12,camPhi=1.25;
 const updateCamera=()=>{camPhi=Math.max(.12,Math.min(Math.PI-.12,camPhi));bhCamera.position.set(camRadius*Math.sin(camPhi)*Math.sin(camTheta),camRadius*Math.cos(camPhi),camRadius*Math.sin(camPhi)*Math.cos(camTheta));bhCamera.lookAt(0,0,0);};
 const initialRadius=8.2;camRadius=initialRadius;updateCamera();
 const focusStart=performance.now();const focusCamera=now=>{if(!bhCamera||!bhRenderer)return;const t=Math.min(1,(now-focusStart)/1100);const eased=1-Math.pow(1-t,3);camRadius=initialRadius+(5.9-initialRadius)*eased;updateCamera();if(t<1)requestAnimationFrame(focusCamera);};requestAnimationFrame(focusCamera);
 bhRenderer=new THREE.WebGLRenderer({antialias:true,alpha:false});bhRenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));bhRenderer.setSize(mount.clientWidth,mount.clientHeight);bhRenderer.outputEncoding=THREE.sRGBEncoding||3001;mount.appendChild(bhRenderer.domElement);
 bhRenderer.domElement.style.touchAction='none';
 bhScene.add(new THREE.AmbientLight(0xffffff,.55));
 const keyLight=new THREE.PointLight(0xffa66c,3.5,45);keyLight.position.set(3,4,4);bhScene.add(keyLight);
 const blueLight=new THREE.PointLight(0x8c9dff,1.8,35);blueLight.position.set(-5,-1,-3);bhScene.add(blueLight);
 const hole=new THREE.Mesh(new THREE.SphereGeometry(1.08,96,64),new THREE.MeshBasicMaterial({color:0x000002}));hole.name='bh-hole';bhScene.add(hole);
 const lens=new THREE.Mesh(new THREE.TorusGeometry(1.17,.11,18,160),new THREE.MeshBasicMaterial({color:0xffe0c0,transparent:true,opacity:.84,blending:THREE.AdditiveBlending,depthWrite:false}));lens.rotation.x=Math.PI/2.25;bhScene.add(lens);
 const lens2=new THREE.Mesh(new THREE.TorusGeometry(1.31,.035,12,160),new THREE.MeshBasicMaterial({color:0xffa15e,transparent:true,opacity:.68,blending:THREE.AdditiveBlending,depthWrite:false}));lens2.rotation.x=Math.PI/2.25;bhScene.add(lens2);
 bhDisk=new THREE.Group();bhScene.add(bhDisk);
 // Dense layered accretion disk, seen at an angle like NASA's educational visualizations.
 for(let i=0;i<15;i++){const r=1.35+i*.105;const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.018+(14-i)*.0018,8,180),new THREE.MeshBasicMaterial({color:[0xfff0d8,0xffc28b,0xff8d4f,0xffd9ad,0xc95d36][i%5],transparent:true,opacity:.34+(14-i)*.035,blending:THREE.AdditiveBlending,depthWrite:false}));ring.rotation.x=Math.PI/2.32;ring.rotation.z=(i-7)*.003;bhDisk.add(ring);}
 // Particle stream in the disk
 const diskCount=1800,diskPositions=new Float32Array(diskCount*3),diskColors=[];
 for(let i=0;i<diskCount;i++){const a=Math.random()*Math.PI*2,r=1.35+Math.random()*1.55;diskPositions[i*3]=Math.cos(a)*r;diskPositions[i*3+1]=(Math.random()-.5)*.13;diskPositions[i*3+2]=Math.sin(a)*r;}
 const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.BufferAttribute(diskPositions,3));const dp=new THREE.Points(dg,new THREE.PointsMaterial({color:0xffc18b,size:.025,transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false}));bhDisk.add(dp);
 const count=1600,positions=new Float32Array(count*3);for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,r=4+Math.random()*45;positions[i*3]=Math.cos(a)*r;positions[i*3+1]=(Math.random()-.5)*28;positions[i*3+2]=Math.sin(a)*r;}
 const starGeo=new THREE.BufferGeometry();starGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));bhScene.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xd7e5ff,size:.035,transparent:true,opacity:.85})));
 const objectGroup=new THREE.Group();objectGroup.name='bh-object-group';objectGroup.visible=false;bhScene.add(objectGroup);bhObject=objectGroup;
 // Mouse/touch orbit and wheel zoom: drag to rotate the camera around the scene.
 let dragging=false,lastX=0,lastY=0;
 const canvas=bhRenderer.domElement;
 canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture?.(e.pointerId);});
 canvas.addEventListener('pointermove',e=>{if(!dragging)return;camTheta-=(e.clientX-lastX)*.008;camPhi-=(e.clientY-lastY)*.008;lastX=e.clientX;lastY=e.clientY;updateCamera();});
 const stopDrag=()=>dragging=false;canvas.addEventListener('pointerup',stopDrag);canvas.addEventListener('pointercancel',stopDrag);canvas.addEventListener('wheel',e=>{e.preventDefault();camRadius=Math.max(4.8,Math.min(22,camRadius+e.deltaY*.012));updateCamera();},{passive:false});
 const resize=()=>{if(!bhRenderer||!mount.isConnected)return;bhCamera.aspect=mount.clientWidth/Math.max(1,mount.clientHeight);bhCamera.updateProjectionMatrix();bhRenderer.setSize(mount.clientWidth,mount.clientHeight);};window.__bhResize=resize;window.addEventListener('resize',resize);
 const tick=(t)=>{if(!bhRenderer)return;bhRAF=requestAnimationFrame(tick);const dt=Math.min(.04,(t-(bhLast||t))/1000);bhLast=t;if(bhDisk)bhDisk.rotation.y+=dt*.17;
 if(bhRunning&&bhObject){bhProgress=Math.min(100,bhProgress+dt*8);updateBHProgress();const p=bhProgress/100;const startX=-5.2;const endX=0;const pull=Math.pow(p,1.55);bhObject.position.set(startX*(1-p)+endX*pull,Math.sin(p*Math.PI*2)*.16*(1-p),Math.cos(p*Math.PI*1.4)*.12*(1-p));bhObject.rotation.y+=dt*2.2;bhObject.rotation.x+=dt*.8;const shrink=p>.72?Math.max(0,1-(p-.72)/.28):1;bhObject.scale.setScalar(shrink);if(p>=1){bhRunning=false;bhObject.visible=false;const st=document.getElementById('bh-status');if(st)st.textContent='OBJECT CAPTURED · VANISHED';const note=document.getElementById('bh-idle-note');if(note)note.textContent='Simulation complete · The selected object has disappeared into the event-horizon region in this illustrative model.';const summary=document.getElementById('bh-info-summary');if(summary)summary.textContent='The object has been pulled into the event-horizon region and vanished from view in this educational animation. This is a qualitative effect, not a calculated physical trajectory.';}}
 bhRenderer.render(bhScene,bhCamera);};bhRAF=requestAnimationFrame(tick);
}
function makeBHObject(kind,data){
 if(!window.THREE)return null;const g=new THREE.Group();g.name='selected-object';
 const mat=(color,metalness=.25,roughness=.35,emissive=0x000000)=>new THREE.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:.35});
 if(kind==='satellite'){
  const body=new THREE.Mesh(new THREE.BoxGeometry(.52,.24,.28),mat(0xc5d1df,.75,.28));g.add(body);
  const gold=mat(0x2476b9,.55,.3);for(const s of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.62,.035,.32),gold);panel.position.x=s*.62;g.add(panel);const strut=new THREE.Mesh(new THREE.BoxGeometry(.18,.035,.04),mat(0xb7c3d0));strut.position.x=s*.31;g.add(strut);}
  const dish=new THREE.Mesh(new THREE.SphereGeometry(.16,20,12,0,Math.PI*2,0,Math.PI/2),mat(0xe8edf3,.65,.25));dish.position.y=.18;g.add(dish);
 }else if(kind==='aircraft'){
  const fus=new THREE.Mesh(new THREE.ConeGeometry(.16,.95,12),mat(0xe8edf7,.55,.3));fus.rotation.z=-Math.PI/2;g.add(fus);
  const wing=new THREE.Mesh(new THREE.BoxGeometry(.24,.045,.95),mat(0x94b9d9,.5,.3));g.add(wing);
  const tail=new THREE.Mesh(new THREE.BoxGeometry(.17,.035,.34),mat(0xc5d4e8));tail.position.x=-.36;g.add(tail);
  const engmat=mat(0x52657c,.6,.35);for(const s of [-1,1]){const eng=new THREE.Mesh(new THREE.CylinderGeometry(.055,.07,.22,12),engmat);eng.rotation.x=Math.PI/2;eng.position.set(-.05,-.09,s*.34);g.add(eng);}
 }else if(kind==='star'){
  const star=new THREE.Mesh(new THREE.SphereGeometry(.42,40,32),new THREE.MeshBasicMaterial({color:0xffb04f}));g.add(star);
  const glow=new THREE.Mesh(new THREE.SphereGeometry(.52,32,24),new THREE.MeshBasicMaterial({color:0xff7c32,transparent:true,opacity:.18,blending:THREE.AdditiveBlending,depthWrite:false}));g.add(glow);
  const light=new THREE.PointLight(0xffa64c,1.8,8);g.add(light);
 }else{
  const planet=new THREE.Mesh(new THREE.SphereGeometry(.38,48,32),mat(0x4779d9,.15,.8));g.add(planet);
  const cloud=new THREE.Mesh(new THREE.SphereGeometry(.386,40,28),new THREE.MeshStandardMaterial({color:0x9bd5e9,transparent:true,opacity:.35,roughness:1}));g.add(cloud);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.57,.045,8,64),mat(0xd6c49c,.25,.8));ring.rotation.x=Math.PI/2.4;ring.visible=false;ring.name='planet-ring';g.add(ring);
 }
 g.position.set(-4.6,.1,.1);return g;
}
function selectBlackHoleObject(){
 const kind=document.getElementById('bh-object-select')?.value||'satellite',data=BH_OBJECTS[kind];if(!data)return;
 bhHasChosenObject=true;stopBlackHoleNarration();bhRunning=false;bhProgress=0;updateBHProgress();
 const title=document.getElementById('bh-info-title'),summary=document.getElementById('bh-info-summary'),details=document.getElementById('bh-info-details');
 if(title)title.textContent=data.title;if(summary)summary.textContent=data.summary;if(details)details.innerHTML=data.detail+'<p class="bh-note">NASA reference reading: <a href="https://science.nasa.gov/universe/black-holes/" target="_blank" rel="noopener">NASA Science — Black Holes</a>. This visual is qualitative, not a predictive simulation.</p>';
 const st=document.getElementById('bh-status');if(st)st.textContent='READY · '+data.name.toUpperCase()+' SELECTED';
 const note=document.getElementById('bh-idle-note');if(note)note.textContent=data.name+' selected · Press Run Simulation to animate this specific 3D model toward the event horizon.';
 if(bhObject){bhObject.visible=false;bhObject.scale.setScalar(1);bhObject.position.set(-5.2,0,0);}
}

function setupBHSplitter(){
 const layout=document.querySelector('#ce-blackhole .bh-layout');const splitter=document.getElementById('bh-splitter');if(!layout||!splitter||splitter.dataset.ready)return;splitter.dataset.ready='1';
 let dragging=false,startX=0,startLeft=0;
 splitter.addEventListener('pointerdown',e=>{if(window.innerWidth<=1000)return;dragging=true;startX=e.clientX;startLeft=layout.querySelector('.bh-visual-panel').getBoundingClientRect().width;splitter.setPointerCapture?.(e.pointerId);document.body.style.cursor='col-resize';e.preventDefault();});
 splitter.addEventListener('pointermove',e=>{if(!dragging)return;const rect=layout.getBoundingClientRect(),gap=18;const left=Math.max(280,Math.min(rect.width-300- gap*2,startLeft+(e.clientX-startX)));layout.style.gridTemplateColumns=`minmax(280px, ${left}px) 8px minmax(300px, 1fr)`;if(window.__bhResize)window.__bhResize();});
 const end=()=>{dragging=false;document.body.style.cursor='';};splitter.addEventListener('pointerup',end);splitter.addEventListener('pointercancel',end);
}
function runBlackHoleSimulation(){
 if(!bhRenderer)initBlackHoleScene();const kind=document.getElementById('bh-object-select')?.value||'satellite';const data=BH_OBJECTS[kind];if(!data)return;
 bhHasChosenObject=true;
 // Always rebuild the model after a selection change so a satellite can never be reused for another object.
 if(bhObject){bhScene.remove(bhObject);bhObject.traverse?.(node=>{if(node.geometry)node.geometry.dispose();if(node.material){if(Array.isArray(node.material))node.material.forEach(m=>m.dispose());else node.material.dispose();}});}
 bhObject=makeBHObject(kind,data);bhObjectKind=kind;if(!bhObject)return;bhScene.add(bhObject);bhObject.visible=true;bhObject.position.set(-5.2,0,0);bhObject.scale.setScalar(1);bhProgress=0;updateBHProgress();bhRunning=true;
 const st=document.getElementById('bh-status');if(st)st.textContent='SIMULATION RUNNING · '+data.name.toUpperCase();const note=document.getElementById('bh-idle-note');if(note)note.textContent='The selected '+data.name.toLowerCase()+' model is being pulled inward. Its own 3D geometry is shown; no trajectory line is displayed.';const summary=document.getElementById('bh-info-summary');if(summary)summary.textContent=data.summary+' Watch the '+data.name.toLowerCase()+' model move toward the event horizon and disappear. This is an illustrative animation, not a calculated physical trajectory.';
}
function resetBlackHoleSimulation(){bhRunning=false;bhProgress=0;updateBHProgress();if(bhObject){bhObject.visible=false;bhObject.position.set(-5.2,0,0);bhObject.scale.setScalar(1);}const st=document.getElementById('bh-status');if(st)st.textContent=bhHasChosenObject?'READY · OBJECT HIDDEN':'READY · BLACK HOLE ONLY';const note=document.getElementById('bh-idle-note');if(note)note.textContent=bhHasChosenObject?'Object hidden · Press Run Simulation to replay the selected object encounter.':'Black hole only · Read the science briefing or listen to the introduction, then choose an object to simulate.';}

function updateBHProgress(){const p=document.getElementById('bh-progress');const l=document.getElementById('bh-progress-label');if(p)p.style.width=bhProgress+'%';if(l)l.textContent=Math.round(bhProgress)+'%';}
function narrateBlackHole(){if(!('speechSynthesis'in window)){alert('Voice narration is not supported in this browser.');return;}stopBlackHoleNarration();let text;if(!bhHasChosenObject){text='Welcome to the Black Hole Explorer. A black hole is a region of spacetime where gravity is so strong that, beyond the event horizon, nothing—not even light—can escape. The event horizon is not a solid surface. The glowing accretion disk is hot gas and dust orbiting the black hole; friction and compression can heat this material and make it shine. Gravity can bend light, creating gravitational lensing. Black holes do not suck in everything from far away: objects can orbit at suitable distances, while close encounters may lead to capture or tidal disruption. A star that passes too close may be stretched into streams of debris. In the simulation, choose a satellite, aircraft, star, or planet to see that specific 3D model approach and vanish. This is an educational visual, not a numerical prediction. For further reading, consult NASA Science’s Black Holes guide.';}else{const kind=document.getElementById('bh-object-select')?.value||'satellite',d=BH_OBJECTS[kind];text=`${d.title}. ${d.summary} ${d.detail.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ')} This is an illustrative animation and does not calculate a real trajectory.`;}const utter=new SpeechSynthesisUtterance(text);utter.rate=.94;utter.pitch=1;utter.lang='en-US';window.__bhUtterance=utter;window.speechSynthesis.speak(utter);}
function stopBlackHoleNarration(){if(window.speechSynthesis)window.speechSynthesis.cancel();window.__bhUtterance=null;}
function explorerStartRenderer(){const mount=document.getElementById('ce-model-canvas');if(!mount)return; if(explorerRAF)cancelAnimationFrame(explorerRAF);if(explorerControls){explorerControls.dispose();explorerControls=null;}if(explorerRenderer){explorerRenderer.dispose();explorerRenderer=null;}mount.innerHTML='';explorerScene=new THREE.Scene();explorerScene.background=new THREE.Color(0x030712);explorerScene.fog=new THREE.FogExp2(0x030712,0.018);explorerCamera=new THREE.PerspectiveCamera(45,Math.max(1,mount.clientWidth)/Math.max(1,mount.clientHeight),0.1,2000);explorerCamera.position.set(0,2.2,7);explorerRenderer=new THREE.WebGLRenderer({antialias:true,alpha:true});explorerRenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));explorerRenderer.setSize(Math.max(1,mount.clientWidth),Math.max(1,mount.clientHeight));explorerRenderer.outputEncoding=THREE.sRGBEncoding;mount.appendChild(explorerRenderer.domElement);explorerControls=new THREE.OrbitControls(explorerCamera,explorerRenderer.domElement);explorerControls.enableDamping=true;explorerControls.dampingFactor=.06;explorerControls.minDistance=2;explorerControls.maxDistance=18;explorerScene.add(new THREE.AmbientLight(0x8ba7d8,1.15));const light=new THREE.PointLight(0xffffff,2.4,100);light.position.set(5,4,6);explorerScene.add(light);const rim=new THREE.PointLight(0x3b82f6,1.5,80);rim.position.set(-5,-2,-5);explorerScene.add(rim);const starsGeo=new THREE.BufferGeometry(),arr=[];for(let i=0;i<1000;i++){arr.push((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100);}starsGeo.setAttribute('position',new THREE.Float32BufferAttribute(arr,3));explorerScene.add(new THREE.Points(starsGeo,new THREE.PointsMaterial({color:0xbad7ff,size:.055,transparent:true,opacity:.8})));const resize=()=>{if(!explorerRenderer||!mount.isConnected)return;const w=Math.max(1,mount.clientWidth),h=Math.max(1,mount.clientHeight);explorerCamera.aspect=w/h;explorerCamera.updateProjectionMatrix();explorerRenderer.setSize(w,h);};if(explorerResizeObserver)explorerResizeObserver.disconnect();explorerResizeObserver=new ResizeObserver(resize);explorerResizeObserver.observe(mount);let rotating=true;window.toggleExplorerRotation=()=>{rotating=!rotating;document.getElementById('ce-rotation-btn').innerHTML=rotating?'<i class="fa-solid fa-pause"></i> Pause rotation':'<i class="fa-solid fa-play"></i> Resume rotation';};window.resetExplorerCamera=()=>{if(explorerCamera){explorerCamera.position.set(0,2.2,7);explorerControls.target.set(0,0,0);explorerControls.update();}};const tick=()=>{explorerRAF=requestAnimationFrame(tick);if(explorerModel&&rotating)explorerModel.rotation.y+=.003;explorerControls?.update();explorerRenderer?.render(explorerScene,explorerCamera);};tick();return {scene:explorerScene};}
function renderExplorerCelestial(key,type){const data=CELESTIAL_DATA[key]||{};const moon=EXPLORER_OBJECTS[key];const craftType=type==='moon';const title=moon?key:(data.name||key);const subtitle=moon?moon.subtitle:(data.subtitle||'Solar System object');document.getElementById('ce-category').textContent=moon?'NATURAL SATELLITE':'PLANET';document.getElementById('ce-title').textContent=title;document.getElementById('ce-subtitle').textContent=subtitle;const explorerPalette={Mercury:0x6f7782,Venus:0xf1e8d7,Earth:0x0757a6,Jupiter:0xb07f35,Saturn:0xe2bf7d};const color=moon?moon.color:(explorerPalette[key]||data.color||0x6aaeff);const metrics=moon?[['Parent body',moon.parent],['Diameter',moon.diameter],['Orbital distance',moon.distance],['Orbital period',moon.period]]:[['Mass',data.mass],['Diameter',data.meanRadius],['Temperature',data.temp],['Surface gravity',data.gravity],['Distance from Sun',data.distance],['Orbital period',data.period],['Rotation period',data.rotation],['Atmosphere',data.atmosphere]];const facts=moon?[moon.fact]:((data.facts||[]));let html=`<p class="ce-description">${moon?moon.fact:(data.desc||'Explore this celestial object in interactive 3D.')}</p><div class="ce-metric-grid">${metrics.filter(x=>x[1]).map(x=>`<article><small>${x[0]}</small><b>${x[1]}</b></article>`).join('')}</div><div class="ce-fact-block"><h3><i class="fa-solid fa-star"></i> Key facts</h3><ul>${facts.map(f=>`<li>${f}</li>`).join('')}</ul></div>`;if(!moon&&EXPLORER_MOONS[key]?.length)html+=`<div class="ce-fact-block"><h3><i class="fa-solid fa-moon"></i> Featured moons</h3><div class="ce-moon-chips">${EXPLORER_MOONS[key].map(m=>`<button onclick="openExplorerObject('${m}','moon')">${m} <i class="fa-solid fa-arrow-up-right-from-square"></i></button>`).join('')}</div></div>`;html+=`<p class="ce-accuracy-note">Figures are rounded reference values and may vary by source or epoch. Use the NASA reference for mission-grade data.</p>`;document.getElementById('ce-info-body').innerHTML=html;const source=document.getElementById('ce-source-link');source.href=moon?'https://science.nasa.gov/solar-system/moons/':`https://science.nasa.gov/solar-system/`;explorerStartRenderer();const radius=moon?1.15:(key==='Jupiter'?1.65:key==='Saturn'?1.5:key==='Sun'?1.7:1.25);explorerModel=new THREE.Group();const geo=new THREE.SphereGeometry(radius,64,48);const detailType=key==='Earth'?'earth':(['Jupiter','Saturn'].includes(key)?'bands':(['Mercury','Mars','Moon','Phobos','Deimos','Mimas'].includes(key)?'craters':'smooth'));const explorerTexturePalette={Mercury:'#626b77',Venus:'#eee5d4',Earth:'#0757a6'};const textureColor=explorerTexturePalette[key]||('#'+Number(color).toString(16).padStart(6,'0'));const mat=new THREE.MeshStandardMaterial({color:0xffffff,map:createPlanetTexture(textureColor,detailType),roughness:.8,metalness:.03});const sphere=new THREE.Mesh(geo,mat);explorerModel.add(sphere);if(key==='Saturn'){const ring=new THREE.Mesh(new THREE.RingGeometry(radius*1.35,radius*2.2,96),new THREE.MeshStandardMaterial({color:0xd0b47b,side:THREE.DoubleSide,transparent:true,opacity:.85,roughness:1}));ring.rotation.x=Math.PI/2.5;explorerModel.add(ring);}if(key==='Uranus'){const ring=new THREE.Mesh(new THREE.RingGeometry(radius*1.35,radius*1.65,64),new THREE.MeshBasicMaterial({color:0x80d9ed,side:THREE.DoubleSide,transparent:true,opacity:.55}));ring.rotation.x=Math.PI/2.2;explorerModel.add(ring);}if(key==='Earth'){
  const cloud=new THREE.Mesh(new THREE.SphereGeometry(radius*1.025,64,48),new THREE.MeshStandardMaterial({color:0xe9f7ff,transparent:true,opacity:.045,roughness:1,metalness:0,wireframe:false,depthWrite:false}));
  cloud.name='earth-cloud-layer'; explorerModel.add(cloud);
  const atmosphere=new THREE.Mesh(new THREE.SphereGeometry(radius*1.075,64,48),new THREE.MeshBasicMaterial({color:0x35aaff,transparent:true,opacity:.105,side:THREE.BackSide,blending:THREE.AdditiveBlending}));
  atmosphere.name='earth-atmosphere-glow'; explorerModel.add(atmosphere);
  const nightGlow=new THREE.PointLight(0x168bff,.45,8); nightGlow.position.set(-1.8,.2,-1.8); explorerModel.add(nightGlow);
}explorerScene.add(explorerModel);if(!moon&&EXPLORER_MOONS[key]){EXPLORER_MOONS[key].slice(0,4).forEach((m,i)=>{const md=EXPLORER_OBJECTS[m];const mg=new THREE.Mesh(new THREE.SphereGeometry(.13+(i%2)*.035,20,16),new THREE.MeshStandardMaterial({color:md?.color||0xb7b7b7,roughness:1}));const a=i*Math.PI/2;mg.position.set(Math.cos(a)*radius*2.4,Math.sin(a*.7)*.25,Math.sin(a)*radius*2.4);explorerModel.add(mg);});}const narratorText=`${title}. ${subtitle}. ${moon?moon.fact:(data.desc||'')}. ${metrics.map(x=>x[0]+': '+x[1]).join('. ')}.`;document.getElementById('ce-listen').dataset.narration=narratorText;}
function renderExplorerCraft(key){const craft=EXPLORER_CRAFT[key]||EXPLORER_CRAFT.hohmann;document.getElementById('ce-category').textContent='MISSION SPACECRAFT';document.getElementById('ce-title').textContent=craft.title;document.getElementById('ce-subtitle').textContent=craft.subtitle;document.getElementById('ce-info-body').innerHTML=`<p class="ce-description">${craft.fact}</p><div class="ce-metric-grid">${craft.details.map(x=>`<article><small>${x[0]}</small><b>${x[1]}</b></article>`).join('')}</div><div class="ce-fact-block"><h3><i class="fa-solid fa-circle-info"></i> About this model</h3><p class="ce-description">This is an educational 3D representation. The model is illustrative and not a scale-accurate engineering design.</p></div><p class="ce-accuracy-note">NASA mission reference: verify mission dates and status at the official NASA mission page.</p>`;document.getElementById('ce-source-link').href=key==='new_horizons'?'https://science.nasa.gov/mission/new-horizons/':key==='voyager'?'https://science.nasa.gov/mission/voyager/':'https://science.nasa.gov/solar-system/';document.getElementById('ce-listen').dataset.narration=`${craft.title}. ${craft.subtitle}. ${craft.fact} ${craft.details.map(x=>x[0]+': '+x[1]).join('. ')}.`;explorerStartRenderer();explorerModel=new THREE.Group();const c=craft.color;
 const metal=new THREE.MeshStandardMaterial({color:0xd9e2ec,metalness:.65,roughness:.3});
 const gold=new THREE.MeshStandardMaterial({color:0xd9a441,metalness:.55,roughness:.35});
 const solar=new THREE.MeshStandardMaterial({color:0x244e8a,metalness:.35,roughness:.4,emissive:0x10264a});
 const accent=new THREE.MeshStandardMaterial({color:c,metalness:.45,roughness:.3,emissive:c,emissiveIntensity:.12});
 if(key==='voyager'){
   const bus=new THREE.Mesh(new THREE.BoxGeometry(.42,.5,.42),metal);explorerModel.add(bus);
   const dish=new THREE.Mesh(new THREE.SphereGeometry(.48,28,14,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xf1f5f9,metalness:.45,roughness:.25,side:THREE.DoubleSide}));dish.position.set(-.15,.4,0);dish.rotation.z=-Math.PI/2;explorerModel.add(dish);
   [-1,1].forEach(side=>{const panel=new THREE.Mesh(new THREE.BoxGeometry(.72,.04,.38),solar);panel.position.set(.15,side*.58,0);explorerModel.add(panel);});
   const boom=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.95,8),gold);boom.rotation.z=Math.PI/2;boom.position.x=.5;explorerModel.add(boom);
 }else if(key==='new_horizons'){
   const body=new THREE.Mesh(new THREE.BoxGeometry(.62,.5,.58),gold);explorerModel.add(body);
   const dish=new THREE.Mesh(new THREE.ConeGeometry(.42,.28,32),metal);dish.rotation.z=-Math.PI/2;dish.position.x=-.42;explorerModel.add(dish);
   [-1,1].forEach(side=>{const panel=new THREE.Mesh(new THREE.BoxGeometry(.95,.035,.36),solar);panel.position.set(.12,side*.48,0);explorerModel.add(panel);});
   const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,.75,8),metal);antenna.position.set(.15,.72,0);explorerModel.add(antenna);
 }else if(key==='ion_drive'){
   const core=new THREE.Mesh(new THREE.CylinderGeometry(.24,.32,1.05,16),metal);core.rotation.z=Math.PI/2;explorerModel.add(core);
   const nozzle=new THREE.Mesh(new THREE.CylinderGeometry(.14,.34,.38,16),accent);nozzle.rotation.z=Math.PI/2;nozzle.position.x=.68;explorerModel.add(nozzle);
   const glow=new THREE.Mesh(new THREE.ConeGeometry(.22,.95,20),new THREE.MeshBasicMaterial({color:0x8b5cf6,transparent:true,opacity:.62}));glow.rotation.z=-Math.PI/2;glow.position.x=1.25;explorerModel.add(glow);
   [-1,1].forEach(side=>{const panel=new THREE.Mesh(new THREE.BoxGeometry(.75,.03,.34),solar);panel.position.set(-.08,side*.48,0);explorerModel.add(panel);});
 }else{
   // Distinct 3D solar-sail probe concept replaces the previous orbit diagram.
   const core=new THREE.Mesh(new THREE.OctahedronGeometry(.34,0),new THREE.MeshStandardMaterial({color:0x35d9ff,metalness:.65,roughness:.22,emissive:0x073c55,emissiveIntensity:.35}));
   explorerModel.add(core);
   const mastMat=new THREE.MeshStandardMaterial({color:0xd7e2ee,metalness:.75,roughness:.25});
   const mast=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,2.2,10),mastMat);mast.rotation.z=Math.PI/2;explorerModel.add(mast);
   const sailMat=new THREE.MeshStandardMaterial({color:0x9ee8ff,metalness:.35,roughness:.2,side:THREE.DoubleSide,transparent:true,opacity:.86,emissive:0x164e63,emissiveIntensity:.2});
   const sail=new THREE.Mesh(new THREE.PlaneGeometry(1.65,1.65),sailMat);sail.position.x=.75;sail.rotation.y=.18;explorerModel.add(sail);
   const sail2=new THREE.Mesh(new THREE.PlaneGeometry(1.2,1.2),new THREE.MeshStandardMaterial({color:0xc4b5fd,metalness:.25,roughness:.25,side:THREE.DoubleSide,transparent:true,opacity:.8}));sail2.position.x=-.72;sail2.rotation.y=-.2;explorerModel.add(sail2);
   const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,.85,8),gold);antenna.position.set(0,.62,0);explorerModel.add(antenna);
   const beacon=new THREE.Mesh(new THREE.SphereGeometry(.09,16,12),new THREE.MeshBasicMaterial({color:0x67e8f9}));beacon.position.set(0,.99,0);explorerModel.add(beacon);
 }
 explorerScene.add(explorerModel);}
let explorerUtterance=null;
let explorerSpeechChunks=[];
let explorerSpeechIndex=0;
let explorerSpeechSession=0;
let explorerVoiceState='idle';
function speakExplorerInfo(){
 if(!('speechSynthesis' in window)){alert('Text-to-speech is not supported by this browser.');return;}
 const synth=window.speechSynthesis;
 // Listen doubles as Resume when narration is paused.
 if(explorerVoiceState==='paused'){
   synth.resume();
   explorerVoiceState='playing';
   updateExplorerVoiceButtons('playing');
   return;
 }
 // Do not restart narration when Listen is clicked during playback.
 if(explorerVoiceState==='playing')return;
 const dashboardVisible=!document.getElementById('ce-dashboard')?.classList.contains('hidden');
 const narrationSource=dashboardVisible?document.getElementById('ce-dashboard-listen'):document.getElementById('ce-listen');
 const narration=(narrationSource?.dataset.narration||'').replace(/\s+/g,' ').trim();
 if(!narration)return;
 synth.cancel();
 const session=++explorerSpeechSession;
 // Sentence-sized utterances help avoid long-speech pause/resume issues in browsers.
 explorerSpeechChunks=narration.match(/[^.!?]+[.!?]*/g)?.map(part=>part.trim()).filter(Boolean)||[narration];
 explorerSpeechIndex=0;
 explorerVoiceState='playing';
 updateExplorerVoiceButtons('playing');
 speakNextExplorerChunk(session);
}
function speakNextExplorerChunk(session){
 if(session!==explorerSpeechSession || explorerVoiceState!=='playing')return;
 if(explorerSpeechIndex>=explorerSpeechChunks.length){
   explorerVoiceState='idle';explorerUtterance=null;updateExplorerVoiceButtons('idle');return;
 }
 const utterance=new SpeechSynthesisUtterance(explorerSpeechChunks[explorerSpeechIndex++]);
 explorerUtterance=utterance;
 utterance.rate=.92;utterance.pitch=1;utterance.lang='en-US';
 utterance.onend=()=>{
   if(session!==explorerSpeechSession)return;
   if(explorerVoiceState==='playing')speakNextExplorerChunk(session);
 };
 utterance.onerror=(event)=>{
   if(session!==explorerSpeechSession)return;
   if(event.error==='canceled'||event.error==='interrupted')return;
   explorerVoiceState='idle';explorerUtterance=null;updateExplorerVoiceButtons('idle');
 };
 window.speechSynthesis.speak(utterance);
}
function toggleExplorerVoicePause(){
 if(!('speechSynthesis' in window))return;
 const synth=window.speechSynthesis;
 if(explorerVoiceState==='playing'){
   synth.pause();
   explorerVoiceState='paused';
   updateExplorerVoiceButtons('paused');
 }else if(explorerVoiceState==='paused'){
   synth.resume();
   explorerVoiceState='playing';
   updateExplorerVoiceButtons('playing');
 }
}
function stopExplorerVoice(){
 explorerSpeechSession++;
 if('speechSynthesis' in window)window.speechSynthesis.cancel();
 explorerUtterance=null;explorerSpeechChunks=[];explorerSpeechIndex=0;explorerVoiceState='idle';
 updateExplorerVoiceButtons('idle');
}
function updateExplorerVoiceButtons(state){
 const listenButtons=[document.getElementById('ce-listen'),document.getElementById('ce-dashboard-listen')].filter(Boolean);
 const pauseButtons=[document.getElementById('ce-voice-pause'),document.getElementById('ce-dashboard-voice-pause')].filter(Boolean);
 listenButtons.forEach(listen=>{listen.innerHTML=state==='playing'?'<i class="fa-solid fa-volume-high"></i><span>Playing</span>':state==='paused'?'<i class="fa-solid fa-volume-high"></i><span>Paused</span>':(listen.id==='ce-dashboard-listen'?'<i class="fa-solid fa-volume-high"></i><span>Listen to Dashboard</span>':'<i class="fa-solid fa-volume-high"></i><span>Listen</span>');});
 pauseButtons.forEach(pause=>{pause.innerHTML=state==='paused'?'<i class="fa-solid fa-play"></i><span>Resume</span>':'<i class="fa-solid fa-pause"></i><span>Pause</span>';pause.disabled=state==='idle';pause.classList.toggle('is-paused',state==='paused');});
}
Object.assign(window, { openMissionModal, openTopMissionModal, openExplorerMissionSimulator, closeMissionModal, calculateMissionData, start3DMissionSimulation, openExplorer, closeExplorer, openExplorerDashboard, openExplorerObject, openMilkyWayGalaxy, openCreatorPortfolio, scrollCreatorTo, toggleExplorerNav, speakExplorerInfo, toggleExplorerVoicePause, stopExplorerVoice, openBlackHoleExplorer, toggleBlackHoleSidebar, selectBlackHoleObject, runBlackHoleSimulation, resetBlackHoleSimulation, narrateBlackHole, stopBlackHoleNarration });  