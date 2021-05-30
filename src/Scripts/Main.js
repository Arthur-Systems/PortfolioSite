//Start General Scripts

function openNav() {
    var x = document.getElementById("Spotify");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function closeNav() {
    document.getElementById("Spotify").style.width = "0";
}

function arrowmove() {
    var x = document.getElementById("Arrows");
    x.style.transform;
}

function showsocial() {
    var x = document.getElementById("social");
    if (x.style.display == "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

function arrowturn() {}

function NavBar() {}

addEventListener('resize', function() {
    location.reload();
});

//Start AOS.js

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

//start Three.js
import '/src/Css/style.css'
import * as THREE from 'three'

//debugging
function reportWindowSize() {
    var heightOutput = size.innerHeight;
    var widthOutput = size.innerWidth;
}

const scene = new THREE.Scene();
var size = document.querySelector('#splash');
var w = size.offsetWidth;
var h = size.offsetHeight;
var value = window.devicePixelRatio;
const camera = new THREE.PerspectiveCamera(75, w / h, 2, 1000);
camera.position.setZ(40);
camera.position.setX(0);
camera.position.setY(0);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(w, h);
size.appendChild(renderer.domElement);
const geomenty = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geomenty, material);
scene.add(torus);


function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.1;
    renderer.render(scene, camera);
}
animate();