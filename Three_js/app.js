import * as THREE from 'three';

//create a scene
const scene = new THREE.Scene();
scene.background = new Three.Color('blue');

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);

//add the renderer to the DOM
document.body.appendChild( renderer.domElement);

//add items

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true});
let cube = new THREE.Mesh( geometry, material);
scene.add( cube );

let rotateX = 0.1;
let rotateY = 0.1;

//animation 
function animate(){

renderer.render(scene, camera);

requestAnimationFrame(animate);
}

animate();