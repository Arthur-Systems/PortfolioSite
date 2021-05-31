import '/src/Css/style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AmbientLight, PointLight, TextGeometry } from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



//!Canvas Setup
const scene = new THREE.Scene();
const loader = new GLTFLoader();
var size = document.querySelector('#splash');
var w = size.offsetWidth;
var h = size.offsetHeight;
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

//!lightings

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//!debugging

/*function reportWindowSize() {
    var size = document.querySelector('#splash');
    var heightOutput = size.innerHeight;
    var widthOutput = size.innerWidth;
}
const report = new THREE.TextGeometry(reportWindowSize())*/

const lightpos = new THREE.PointLightHelper(pointLight)
const gridpos = new THREE.GridHelper(200, 50);
scene.add(lightpos, gridpos)

const control = new OrbitControls(camera, renderer.domElement);

//!Models

/*const geomenty = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geomenty, material);
scene.add(torus);*/


loader.load('/src/Models/Monitor.glb', function(gltf) {
    scene.add(gltf.scene);
    gltf.scene.rotation.y = -90;

});

function animate() {
    requestAnimationFrame(animate);
    /*torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.1;*/
    control.update();
    renderer.render(scene, camera);
}
animate();