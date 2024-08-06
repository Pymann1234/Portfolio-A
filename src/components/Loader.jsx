// Importing Html and useProgress from @react-three/drei for displaying a loading indicator
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  // useProgress provides information about the loading progress of assets
  const { progress } = useProgress();

  return (
    <Html>
      {/* Container for the loading text */}
      <span className="canvas-load">
        {/* Displaying the loading percentage */}
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
          {/* Displaying the progress as a percentage with 2 decimal places */}
        </p>
      </span>
    </Html>
  );
};

export default Loader;
