import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
  }
  materials: {}
}

export function TOPOModel(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/TOPO GLTF-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/TOPO GLTF-transformed.glb')
