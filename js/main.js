


//MAIN JS
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/// Configura la 


var planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
scene.add(sol);


for(let i = 0; i < planets.length; i++) {
    
    scene.add(planets[i]);
}


// Posicionar la cámara en el centro y alejarla un poco
camera.position.set(0, 0, 20);

// Configurar OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true; // Permitir zoom con la rueda del mouse
controls.enablePan = false; // Desactivar el movimiento de paneo (opcional)



let T_d = 2460587;

function equation(ini, p, T) {
    return ini + p * T;
}

function normalizeAngle(angle) {
    let modAngle = ((angle % 360) + 360) % 360;
    if (modAngle > 180) {
        modAngle -= 360;
    }
    return modAngle;
}

function kepler(M, e) {
    e = e * (Math.PI / 180);

    let E = M + e * Math.sin(M);
    let Mtri = M - (E - e * Math.sin(E));
    let Etri = Mtri / (1 - e * Math.cos(E));

    E = Etri + E;

    while (Math.abs(Etri) > 0.000001) {
        Mtri = M - (E - e * Math.sin(E));
        Etri = Mtri / (1 - e * Math.cos(E));
        E = Etri + E;
    }
    return E;
}

function orbit(a_0, e_0, i_0, L_0, B_0, alfa_0, ap, ep, ip, Lp, Bp, alfap, b, c, s, f, T_d) {
    var T = (T_d - 2451245.0) / 36525;
    var a = equation(a_0, ap, T);
    var e = equation(e_0, ep, T);
    var i = equation(i_0, ip, T);
    var L = equation(L_0, Lp, T);
    var B = equation(B_0, Bp, T);
    var alfa = equation(alfa_0, alfap, T);

    var w = B - alfa;
    var M = L - B + b*(T ** 2) + c*Math.cos(f*T) + s*Math.sin(f*T);
    M = normalizeAngle(M);
    var E = kepler(M, e);

    var xpri = a * (Math.cos(E) - e);
    var ypri = a * Math.sqrt(1 - e ** 2) * Math.sin(E);
    var zpri = 0;

    var x = xpri * (Math.cos(w) * Math.cos(alfa) - Math.sin(w) * Math.cos(i) * Math.sin(alfa)) +
        ypri * (-Math.sin(w) * Math.cos(alfa) - Math.cos(w) * Math.cos(i) * Math.sin(alfa));
    var y = xpri * (Math.cos(w) * Math.sin(alfa) + Math.sin(w) * Math.cos(i) * Math.cos(alfa)) +
        ypri * (-Math.sin(w) * Math.sin(alfa) + Math.cos(w) * Math.cos(i) * Math.cos(alfa));
    var z = xpri * (Math.sin(w) * Math.sin(i)) + ypri * (Math.cos(w) * Math.sin(i));

    return [x, y, z];
}




var xyz = [];
// Animación
// Añade estas variables globales al principio de tu script
const orbitLines = [];
const orbitPoints = [];
const maxOrbitPoints = 1000000; // Número máximo de puntos en la órbita

// Función para crear una línea de órbita
function createOrbitLine() {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);
    return line;
}

// En tu main.js, después de crear los planetas y antes del bucle de animación:
for (let i = 0; i < planets.length; i++) {
    const orbitLine = createOrbitLine();
    scene.add(orbitLine);
    orbitLines.push(orbitLine);
    orbitPoints.push([]);
}

// Modifica tu función animate para actualizar las líneas de órbita:
function animate() {
    
    requestAnimationFrame(animate);

    for (let i = 0; i < planets.length; i++) {
        xyz = orbit(
            planetData.planets[i].orbital_parameters.a.value, 
            planetData.planets[i].orbital_parameters.e.value, 
            planetData.planets[i].orbital_parameters.I.value, 
            planetData.planets[i].orbital_parameters.L.value, 
            planetData.planets[i].orbital_parameters.long_peri.value, 
            planetData.planets[i].orbital_parameters.long_node.value,
            planetData.planets[i].orbital_parameters.a.rate, 
            planetData.planets[i].orbital_parameters.e.rate, 
            planetData.planets[i].orbital_parameters.I.rate, 
            planetData.planets[i].orbital_parameters.L.rate,
            planetData.planets[i].orbital_parameters.long_peri.rate, 
            planetData.planets[i].orbital_parameters.long_node.rate,
            planetData.planets[i].orbital_parameters.b.value,
            planetData.planets[i].orbital_parameters.c.value,
            planetData.planets[i].orbital_parameters.s.value,
            planetData.planets[i].orbital_parameters.f.value, 
            T_d
        );
        
        const x = (100/(i+1)**1.2) * xyz[0];
        const y = (100/(i+1)**1.2) * xyz[1];
        const z = (100/(i+1)**1.2) * xyz[2];
        
        planets[i].position.set(x, y, z);
        planets[i].rotation.y += 0.1;

        // Actualizar la línea de órbita
        orbitPoints[i].push(new THREE.Vector3(x, y, z));
        if (orbitPoints[i].length > maxOrbitPoints) {
            orbitPoints[i].shift();
        }
        orbitLines[i].geometry.setFromPoints(orbitPoints[i]);

        planetLabels[i].position.set(x, y + 10, z);
    }
    
    sol.rotation.y += 0.01;
    T_d += 0.01;

    // Actualizar los controles (rotación y zoom)
    controls.update();

    renderer.render(scene, camera);
}

animate();

addClickEventsToPlanets();