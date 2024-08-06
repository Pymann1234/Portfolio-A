/*
Import React hooks for state management, referencing, and component loading.
Import Canvas component and useFrame hook from React Three Fiber for rendering 3D graphics and animations.
Import Points and PointMaterial components for rendering points in 3D space and Preload for preloading assets.
Import the random module for generating random positions in a sphere.
*/
import { useRef, Suspense } from "react";
// "Suspense" Lets you display a fallback until its children have finished loading.
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // Create a reference to the Points mesh for direct manipulation.
  // Generate random points within a sphere for the star field.

  const sphere = random.inSphere(new Float32Array(20000), { radius: 1.2 });

  // Rotate the star field mesh over time to create a dynamic effect.

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Group to apply rotation to the entire star field */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
       {/* Container for the canvas, positioned behind other content */}
      <Canvas
        camera={{
          position: [0, 0, 0.1],
        }}
      >
        <Suspense fallback={null}>
           {/* Suspense to handle lazy loading of the Stars component */} 
          <Stars />
        </Suspense>
        <Preload all />
        {/* Preload all assets to ensure smooth rendering */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
