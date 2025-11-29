import * as THREE from "three";

export function createTree(x: number, z: number, scale: number = 1) {

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


    const leavesGeometry = new THREE.SphereGeometry(
        1 * scale,
        8,
        8,
    );
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