import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
  }
  materials: {}
}

export function KingdomModel(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/GRMTKNGDM.glb') as GLTFResult
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

useGLTF.preload("/GRMTKNGDM.glb");
