import { CameraControls, useGLTF } from '@react-three/drei'
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export function FloydCouncilModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    "/Floyd Council GLTF-transformed.glb"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <CameraControls />
      <ambientLight intensity={0.9} castShadow position={[10, -10, 5]} />
      <mesh
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/Floyd Council GLTF-transformed.glb')
