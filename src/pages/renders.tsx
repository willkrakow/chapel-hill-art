import { Canvas, Vector3 } from "@react-three/fiber";
import { AATraillBlazersModel } from "../components/models/aatrlblzrs";
import { FloydCouncilModel } from "../components/models/floydcouncil";
import { TOPOModel } from "../components/models/TOPO";
import { HopeModel } from "../components/models/HopeGLTF";
import styled from '@emotion/styled';


const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    gap: 40px;
    margin: auto;
`;

const RenderSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface I3DModel {
    id: number;
    Component: React.FC;
    camera: Vector3;
}

const models: I3DModel[] = [
  {
    id: 1,
    Component: FloydCouncilModel,
    camera: [ 15.0, -1.0, 0.0 ],
  },
  {
    id: 2,
    Component: AATraillBlazersModel,
    camera: [ 0.0, 0.0, 0.0 ],
  },
  {
    id: 3,
    Component: TOPOModel,
    camera: [ 0.0, 0.0, 0.0 ],
  },
  {
    id: 4,
    Component: HopeModel,
    camera: [ 0.0, 0.0, 0.0 ],
  },
];
export default function Renders(){
    return (
      <Layout>
        {models.map(
          (m) => (
            <RenderSection key={m.id}>
              <Canvas style={{ maxHeight: 500, width: 800 }}>
                <m.Component />
              </Canvas>
            </RenderSection>
          )
        )}
      </Layout>
    );
}