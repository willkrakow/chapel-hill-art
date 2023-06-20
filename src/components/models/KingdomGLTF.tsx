/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/williamkrakow/Desktop/Renders/GOURMET KINGDOM.glb --types --transform --shadows
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
  }
  materials: {}
}

export function KingdomModel(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/GOURMET KINGDOM-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.9} castShadow position={[10, -10, 5]} />
      <mesh
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/GOURMET KINGDOM-transformed.glb')
