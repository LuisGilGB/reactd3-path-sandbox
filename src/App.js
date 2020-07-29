import React, { useState } from "react";
import Path from "./path/Path";
import { Box, Flex } from "rebass";
import Form from "./form/Form";
import "./styles.css";

export default function App() {
  const [points, setPoints] = useState([]);

  const addPoint = newPoint => {
    console.log(newPoint);
    setPoints([...points, newPoint]);
  };

  return (
    <div className="App">
      <Flex>
        <Form addPoint={addPoint} />
        <Box>
          <svg width={600} height={600}>
            <Path
              points={points}
              stroke="black"
              strokeWidth={1}
              fill="red"
              closePath
            />
          </svg>
        </Box>
      </Flex>
    </div>
  );
}
