import React from "react";
import Path from "./path/Path";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <svg width="100%" height={600}>
        <Path
          points={[
            {
              x: 50,
              y: 50
            },
            {
              x: 200,
              y: 87
            },
            {
              type: "quadratic",
              controlX: 180,
              controlY: 360,
              x: 90,
              y: 140
            },
            {
              x: 140,
              y: 180
            }
          ]}
          stroke="black"
          strokeWidth={1}
          fill="red"
          closePath
        />
      </svg>
    </div>
  );
}
