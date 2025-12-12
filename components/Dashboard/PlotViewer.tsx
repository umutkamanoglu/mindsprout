"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Plus, Minus, Maximize2, Minimize2, Home, Info } from "lucide-react";

interface PlotViewerProps {
  groundSize?: number;
  plantsEarned?: number;
}

export default function PlotViewer({
  groundSize: initialGroundSize = 15,
  plantsEarned = 34,
}: PlotViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const groundRef = useRef<THREE.Mesh | null>(null);
  const gridRef = useRef<THREE.GridHelper | null>(null);

  const [groundSize, setGroundSize] = useState(initialGroundSize);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // THREE.JS KURULUM
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
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
    scene.add(directionalLight);

    function create3DGround(size: number) {
      const thickness = 1.5;
      const groundGeometry = new THREE.BoxGeometry(size, thickness, size);

      const materials = [
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x7cb342,
          roughness: 0.8,
          metalness: 0.2,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x6b4423,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
      ];

      const ground = new THREE.Mesh(groundGeometry, materials);
      ground.position.y = -thickness / 2;
      ground.receiveShadow = true;
      ground.castShadow = true;

      return ground;
    }

    function createTree(x: number, z: number, scale: number = 1) {
      const tree = new THREE.Group();

      const trunkGeometry = new THREE.CylinderGeometry(
        0.2 * scale,
        0.3 * scale,
        2 * scale,
        8,
      );
      const trunkMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 1,
      });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 1 * scale;
      trunk.castShadow = true;
      trunk.receiveShadow = true;

      const leavesGeometry = new THREE.SphereGeometry(1 * scale, 8, 8);
      const leavesMaterial = new THREE.MeshStandardMaterial({
        color: 0x228b22,
        roughness: 0.8,
      });
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.y = 2.5 * scale;
      leaves.castShadow = true;
      leaves.receiveShadow = true;

      const leaves2 = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves2.position.y = 3 * scale;
      leaves2.scale.set(0.7, 0.7, 0.7);
      leaves2.castShadow = true;

      tree.add(trunk);
      tree.add(leaves);
      tree.add(leaves2);

      tree.position.set(x, 0, z);

      return tree;
    }

    const ground = create3DGround(groundSize);
    scene.add(ground);
    groundRef.current = ground;

    const gridHelper = new THREE.GridHelper(
      groundSize,
      groundSize,
      0x000000,
      0x000000,
    );
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);
    gridRef.current = gridHelper;

    // Örnek ağaçlar
    const tree1 = createTree(-3, -3, 1.2);
    const tree2 = createTree(4, 2, 0.8);
    const tree3 = createTree(-2, 4, 1);
    scene.add(tree1);
    scene.add(tree2);
    scene.add(tree3);

    // Kamera Kontrolleri
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const cameraAngle = { theta: Math.PI / 4, phi: Math.PI / 4 };
    let cameraDistance = 25;

    const updateCameraPosition = () => {
      const x =
        cameraDistance *
        Math.sin(cameraAngle.theta) *
        Math.cos(cameraAngle.phi);
      const y = cameraDistance * Math.sin(cameraAngle.phi);
      const z =
        cameraDistance *
        Math.cos(cameraAngle.theta) *
        Math.cos(cameraAngle.phi);
      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);
    };

    updateCameraPosition();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      cameraAngle.theta -= deltaX * 0.01;
      cameraAngle.phi -= deltaY * 0.01;
      cameraAngle.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.1, cameraAngle.phi),
      );

      updateCameraPosition();
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraDistance += e.deltaY * 0.05;
      cameraDistance = Math.max(5, Math.min(50, cameraDistance));
      updateCameraPosition();
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("mouseleave", onMouseUp);
    renderer.domElement.addEventListener("wheel", onWheel);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      if (!containerRef.current || !camera || !renderer) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("mouseleave", onMouseUp);
      renderer.domElement.removeEventListener("wheel", onWheel);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [groundSize]);

  // GROUND SIZE GÜNCELLEMESİ
  useEffect(() => {
    if (!sceneRef.current || !groundRef.current || !gridRef.current) return;

    const scene = sceneRef.current;
    const oldGround = groundRef.current;
    const oldGrid = gridRef.current;

    scene.remove(oldGround);
    oldGround.geometry.dispose();
    if (Array.isArray(oldGround.material)) {
      oldGround.material.forEach((material) => material.dispose());
    } else {
      oldGround.material.dispose();
    }

    scene.remove(oldGrid);
    oldGrid.geometry.dispose();
    if (!Array.isArray(oldGrid.material)) {
      oldGrid.material.dispose();
    }

    function create3DGround(size: number) {
      const thickness = 1.5;
      const groundGeometry = new THREE.BoxGeometry(size, thickness, size);
      const materials = [
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x7cb342,
          roughness: 0.8,
          metalness: 0.2,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x6b4423,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x5a3a1f,
          roughness: 1,
          metalness: 0,
        }),
      ];
      const ground = new THREE.Mesh(groundGeometry, materials);
      ground.position.y = -thickness / 2;
      ground.receiveShadow = true;
      ground.castShadow = true;
      return ground;
    }

    const newGround = create3DGround(groundSize);
    scene.add(newGround);
    groundRef.current = newGround;

    const newGridHelper = new THREE.GridHelper(
      groundSize,
      groundSize,
      0x000000,
      0x000000,
    );
    newGridHelper.material.opacity = 0.2;
    newGridHelper.material.transparent = true;
    newGridHelper.position.y = 0.01;
    scene.add(newGridHelper);
    gridRef.current = newGridHelper;
  }, [groundSize]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-emerald-100 bg-linear-to-r from-emerald-50 to-teal-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Benim Arsam
              </h3>
              <p className="text-sm text-gray-600">
                {groundSize}x{groundSize}m² · {plantsEarned} Nesne
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setGroundSize(Math.max(groundSize - 5, 10))}
              className="bg-white text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all shadow-sm border border-gray-200"
              title="Küçült"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-semibold text-gray-700 min-w-[60px] text-center">
              {groundSize}x{groundSize}
            </span>
            <button
              onClick={() => setGroundSize(Math.min(groundSize + 5, 50))}
              className="bg-white text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all shadow-sm border border-gray-200"
              title="Büyüt"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition-all shadow-sm ml-1"
              title={isFullscreen ? "Normal Boyut" : "Tam Ekran"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div
        ref={containerRef}
        className={`bg-sky-200 ${isFullscreen ? "h-[calc(100vh-250px)]" : "h-[400px]"}`}
      />

      {/* Footer */}
      <div className="p-3 bg-gray-50 border-t border-emerald-100">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="text-gray-600">
              🖱️ <span className="font-medium">Sürükle & Döndür</span>
            </span>
            <span className="text-gray-600">
              🔍 <span className="font-medium">Scroll = Zoom</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Info className="w-3 h-3" />
            <span>Kapasite: {Math.floor((groundSize * groundSize) / 10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
