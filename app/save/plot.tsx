"use client"
import React, { useEffect, useState, useRef } from "react"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createTree } from "@/lib/createTree";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const groundRef = useRef<THREE.Mesh | null>(null);
  const gridRef = useRef<THREE.GridHelper | null>(null);

  const [groundSize, setGroundSize] = useState<number>(10)

  useEffect(() => {
    if (!containerRef.current) return;

    if (rendererRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
      containerRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
    }


    if (sceneRef.current) {
      sceneRef.current.traverse((object: any) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x75bedc);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;

    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;

    scene.add(directionalLight);


    function create3DGround(size: number) {
      const thickness = 1.5;
      const groundGeometry = new THREE.BoxGeometry(size, thickness, size);
      const materials = [
        new THREE.MeshStandardMaterial({ color: 0x5a3a1f, roughness: 1, metalness: 0 }),
        new THREE.MeshStandardMaterial({ color: 0x5a3a1f, roughness: 1, metalness: 0 }),
        new THREE.MeshStandardMaterial({ color: 0x7cb342, roughness: 0.8, metalness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 1, metalness: 0 }),
        new THREE.MeshStandardMaterial({ color: 0x5a3a1f, roughness: 1, metalness: 0 }),
        new THREE.MeshStandardMaterial({ color: 0x5a3a1f, roughness: 1, metalness: 0 }),
      ];

      const ground = new THREE.Mesh(groundGeometry, materials);
      ground.position.y = -thickness / 2;
      ground.receiveShadow = true;
      ground.castShadow = true;

      return ground;
    }


    const ground = create3DGround(groundSize);
    scene.add(ground);
    groundRef.current = ground;


    const gridHelper = new THREE.GridHelper(groundSize, groundSize, 0x000000, 0x000000);
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);
    gridRef.current = gridHelper;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controls.target.set(0, 0, 0);

    const three1 = createTree(4.5, 0, 1)

    scene.add(three1)


    function animate() {
      requestAnimationFrame(animate);


      controls.update();


      renderer.render(scene, camera);
    }


    animate();
  }, [groundSize])

  return (
    <div className="w-full h-screen bg-gray-900 relative">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
