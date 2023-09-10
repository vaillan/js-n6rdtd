// Import stylesheets
import './style.css';

import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const r = 800;
const container = document.getElementById('container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

const verticesOfCube = [
  -r,-r,-r,    r,-r,-r,    r, r,-r,    -r, r,-r,
  -r,-r, r,    r,-r, r,    r, r, r,    -r, r, r,
];

const indicesOfFaces = [
  2,1,0,    0,3,2,
  0,4,7,    7,3,0,
  0,1,5,    5,4,0,
  1,2,6,    6,5,1,
  2,3,7,    7,6,2,
  4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );

const material = new THREE.MeshBasicMaterial( { color: 0x474747, wireframe: true } );

const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 20;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.001;
	cube.rotation.y += 0.001;

	renderer.render( scene, camera );
}

animate();