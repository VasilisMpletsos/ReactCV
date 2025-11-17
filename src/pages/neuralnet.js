import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState, useMemo, useEffect } from "react";

function Neuron(props) {
  const { activation = 0, ...otherProps } = props;
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Color based on activation value (0 to 1)
  const color = useMemo(() => {
    if (hovered) return "#DE3412";
    const intensity = Math.max(0, Math.min(1, activation));
    // Interpolate between blue (low) and red (high)
    const r = Math.floor(76 + intensity * (222 - 76));
    const g = Math.floor(154 + intensity * (52 - 154));
    const b = Math.floor(255 + intensity * (18 - 255));
    return `rgb(${r}, ${g}, ${b})`;
  }, [activation, hovered]);

  return (
    <mesh
      {...otherProps}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Layer returns an array of neuron positions
const getLayerPositions = (x, neurons, spacing = 3) => {
  const startY = -((neurons - 1) * spacing) / 2;
  return Array.from({ length: neurons }).map((_, i) => [x, startY + i * spacing, 0]);
};

// Connection (line) between two points with weight visualization
function Connection({ start, end, weight = 0.5 }) {
  const points = [start, end];
  
  // Color based on weight: positive = green, negative = red
  const color = useMemo(() => {
    if (weight > 0) {
      const intensity = Math.min(1, Math.abs(weight));
      return `rgba(50, ${Math.floor(200 * intensity)}, 50, ${0.3 + intensity * 0.7})`;
    } else {
      const intensity = Math.min(1, Math.abs(weight));
      return `rgba(${Math.floor(200 * intensity)}, 50, 50, ${0.3 + intensity * 0.7})`;
    }
  }, [weight]);
  
  return (
    <line>
      <bufferGeometry attach='geometry'>
        <bufferAttribute attach='attributes-position' count={2} array={new Float32Array(points.flat())} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial attach='material' color={color} transparent opacity={0.3 + Math.abs(weight) * 0.7} />
    </line>
  );
}

const layers = [7, 4, 3, 1];
const layerSpacing = 4; // Distance between layers

// Initialize random weights for the network
const initializeWeights = (layers) => {
  const weights = [];
  for (let l = 0; l < layers.length - 1; l++) {
    const layerWeights = [];
    for (let i = 0; i < layers[l]; i++) {
      const neuronWeights = [];
      for (let j = 0; j < layers[l + 1]; j++) {
        // Random weights between -1 and 1
        neuronWeights.push(Math.random() * 2 - 1);
      }
      layerWeights.push(neuronWeights);
    }
    weights.push(layerWeights);
  }
  return weights;
};

// Sigmoid activation function
const sigmoid = (x) => 1 / (1 + Math.exp(-x));

// Forward pass through the network
const forwardPass = (input, weights, layers) => {
  const activations = [input];
  
  for (let l = 0; l < weights.length; l++) {
    const prevActivations = activations[l];
    const nextActivations = [];
    
    for (let j = 0; j < layers[l + 1]; j++) {
      let sum = 0;
      for (let i = 0; i < layers[l]; i++) {
        sum += prevActivations[i] * weights[l][i][j];
      }
      nextActivations.push(sigmoid(sum));
    }
    activations.push(nextActivations);
  }
  
  return activations;
};

const NeuralNet = () => {
  // Initialize weights once
  const weights = useMemo(() => initializeWeights(layers), []);
  
  // State for activations
  const [activations, setActivations] = useState([]);
  
  // Initialize activations on mount
  useEffect(() => {
    const input = Array(layers[0]).fill(0).map(() => Math.random());
    const newActivations = forwardPass(input, weights, layers);
    setActivations(newActivations);
  }, [weights]);
  
  // Compute all neuron positions for each layer
  const layerPositions = layers.map((neurons, i) => getLayerPositions(i * layerSpacing, neurons));

  // Compute all connections with weights between adjacent layers
  const connections = [];
  for (let l = 0; l < layerPositions.length - 1; l++) {
    for (let i = 0; i < layerPositions[l].length; i++) {
      for (let j = 0; j < layerPositions[l + 1].length; j++) {
        connections.push({ 
          start: layerPositions[l][i], 
          end: layerPositions[l + 1][j],
          weight: weights[l][i][j]
        });
      }
    }
  }
  
  // Function to run prediction with new input
  const runPrediction = () => {
    const input = Array(layers[0]).fill(0).map(() => Math.random());
    const newActivations = forwardPass(input, weights, layers);
    setActivations(newActivations);
  };
  
  // Get final prediction
  const prediction = activations.length > 0 ? activations[activations.length - 1][0] : 0;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Control panel */}
      <div style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>Neural Network</h3>
        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
          Layers: {layers.join(" → ")}
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
          Prediction: <strong style={{ color: prediction > 0.5 ? "#32C832" : "#DE3412" }}>
            {(prediction * 100).toFixed(2)}%
          </strong>
        </p>
        <button 
          onClick={runPrediction}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#4C9AFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}
          onMouseOver={(e) => e.target.style.background = "#3A7DD9"}
          onMouseOut={(e) => e.target.style.background = "#4C9AFF"}
        >
          Run Prediction
        </button>
        <p style={{ margin: "10px 0 0 0", fontSize: "12px", color: "#999", maxWidth: "250px" }}>
          Click to run with random input. Neuron colors show activation (blue=low, red=high). 
          Line colors show weights (green=positive, red=negative).
        </p>
      </div>
      
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 30], fov: 50 }}>
        <color attach='background' args={["#F5F5F5"]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        
        {/* Render all neurons with activations */}
        {layerPositions.map((positions, layerIdx) =>
          positions.map((pos, i) => (
            <Neuron 
              key={`${layerIdx}-${i}`} 
              position={pos}
              activation={activations[layerIdx]?.[i] || 0}
            />
          ))
        )}
        
        {/* Render all connections with weights */}
        {connections.map((conn, i) => (
          <Connection key={i} start={conn.start} end={conn.end} weight={conn.weight} />
        ))}
        
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default NeuralNet;
