import '/src/Css/style.css'
import * as THREE from 'three';

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