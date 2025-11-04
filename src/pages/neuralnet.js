import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

function Neuron(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? "#DE3412" : "#4C9AFF"} />
    </mesh>
  );
}

// Layer returns an array of neuron positions
const getLayerPositions = (x, neurons, spacing = 3) => {
  const startY = -((neurons - 1) * spacing) / 2;
  return Array.from({ length: neurons }).map((_, i) => [x, startY + i * spacing, 0]);
};

// Connection (line) between two points
function Connection({ start, end }) {
  const points = [start, end];
  return (
    <line>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' count={2} array={new Float32Array(points.flat())} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial attach='material' color='#CCCCCC' linewidth={2} />
    </line>
  );
}

const layers = [7, 4, 3, 1];
const layerSpacing = 4; // Distance between layers

const NeuralNet = () => {
  // Compute all neuron positions for each layer
  const layerPositions = layers.map((neurons, i) => getLayerPositions(i * layerSpacing, neurons));

  // Compute all connections between adjacent layers
  const connections = [];
  for (let l = 0; l < layerPositions.length - 1; l++) {
    for (let from of layerPositions[l]) {
      for (let to of layerPositions[l + 1]) {
        connections.push({ start: from, end: to });
      }
    }
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 30], fov: 50 }}>
        <color attach='background' args={["#F5F5F5"]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* Render all boxes */}
        {layerPositions.map((positions, layerIdx) =>
          positions.map((pos, i) => <Neuron key={`${layerIdx}-${i}`} position={pos} />)
        )}
        {/* Render all connections */}
        {connections.map((conn, i) => (
          <Connection key={i} start={conn.start} end={conn.end} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default NeuralNet;
