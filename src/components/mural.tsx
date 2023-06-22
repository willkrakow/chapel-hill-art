import { useRef, useState } from "react";
import { IMuralJoined } from "../types/murals";
import styled from '@emotion/styled';
import Button from "./common/button";
import { createSrcSet } from "../utils/images";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

const Image = styled.img`
width: 100%;
min-height: 60vh;
object-fit: cover;
`;


interface Props {
    mural: IMuralJoined & {ThreeDModel?: React.FC};
}

const Mural = ({mural}: Props) => {
    const [currentDimension, setCurrentDimension] = useState(2);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <div ref={containerRef}>
        {mural.ThreeDModel && (
          <div>
            <Button
              style={{ width: "inherit" }}
              active={currentDimension === 2}
              onClick={() => setCurrentDimension(2)}
            >
              2D
            </Button>
            <Button
              style={{ width: "inherit" }}
              active={currentDimension === 3}
              onClick={() => setCurrentDimension(3)}
            >
              3D
            </Button>
          </div>
        )}
        {currentDimension === 2 && (
          <Image
            srcSet={createSrcSet(mural.image_url)}
            src={`${mural.image_url}`}
            alt={mural.title}
          />
        )}
        {currentDimension === 3 && mural.ThreeDModel && (
          <Canvas
            style={{
              width: "100%",
              height: "70svh",
            }}
          >
            <CameraControls />
            <mural.ThreeDModel />
          </Canvas>
        )}
      </div>
    );
}

export default Mural;