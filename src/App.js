import React from "react";
import Path from "./path/Path";
import { EXAMPLE_POINTS } from "./data";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <svg width="100%" height={600}>
        <Path
          points={EXAMPLE_POINTS}
          stroke="black"
          strokeWidth={1}
          fill="red"
          closePath
        />
      </svg>
    </div>
  );
}
