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
        ctx.fillStyle = '#1b4d2e';
        for (let i = 0; i < 45; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 90 + 30, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        for (let i = 0; i < 90; i++) {
          ctx.fillRect(Math.random() * 1024, Math.random() * 512, Math.random() * 140 + 20, Math.random() * 16 + 4);
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

      const coreMesh = new THREE.Mesh(
        new THREE.SphereGeometry(32, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffddaa, transparent: true, opacity: 0.6 })
      );
      galaxyGroup.add(coreMesh);

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

        new TWEEN.Tween(controls.target).to({ x: 0, y: 0, z: 0 }, 1200).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(camera.position).to({ x: 0, y: 450, z: 750 }, 1200).easing(TWEEN.Easing.Cubic.Out).start();

        updateInfoPanel('MilkyWay');
        openInfoPanel();
      }
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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

function openMissionModal() {
  document.getElementById('mission-modal').classList.remove('hidden');
  calculateMissionData();
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
Object.assign(window, { openMissionModal, closeMissionModal, calculateMissionData, start3DMissionSimulation });