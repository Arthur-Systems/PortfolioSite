import '/src/Css/style.css'
import * as THREE from 'three';
import { Material, RedFormat } from 'three';

const scene = new THREE.Scene();
var size = document.querySelector('#splash');
var w = size.offsetWidth;
var h = size.offsetHeight;
const camera = new THREE.PerspectiveCamera(75, w / h, 2, 1000);
camera.position.setZ(40);
camera.position.setX(30);
camera.position.setY(20);
const renderer = new THREE.WebGLRenderer({

    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(500, 500);
renderer.setSize(w, h);
size.appendChild(renderer.domElement);
const geomenty = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: false });
const torus = new THREE.Mesh(geomenty, material);
scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();