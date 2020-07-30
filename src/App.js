import React, { useState } from "react";
import Path from "./path/Path";
import { Box, Flex } from "rebass";
import Form from "./form/Form";
import { getElOffset, getSvgEl } from "./utils";
import "./styles.css";

export default function App() {
  const [points, setPoints] = useState([]);

  const addPoint = newPoint => {
    setPoints([...points, newPoint]);
  };

  const onSvgClick = e => {
    const svgEl = getSvgEl(e.target);
    if (svgEl) {
      const offset = getElOffset(svgEl);
      addPoint({
        x: e.pageX - offset.x,
        y: e.pageY - offset.y
      });
    }
  };

  return (
    <div className="App">
      <Flex>
        <Form addPoint={addPoint} />
        <Box>
          <svg width={600} height={600} onClick={onSvgClick}>
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
