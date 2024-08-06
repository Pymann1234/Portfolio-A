import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Ball component that displays a textured 3D ball
const Ball = (props) => {
  // Load the texture for the decal
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lighting setup */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* 3D Ball Mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component that sets up the 3D scene and renders the Ball component
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows user to rotate and zoom the camera */}
        <OrbitControls enableZoom={false} />
        {/* Render the Ball component with the icon as texture */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload all assets to ensure they are loaded before rendering */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
