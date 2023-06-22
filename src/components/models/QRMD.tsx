import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
  }
  materials: {}
}

export function QueeramidModel(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF("/QUEERAMID.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <ambientLight intensity={0.9} castShadow position={[10, -10, 5]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/QUEERAMID.glb");
