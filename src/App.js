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
        <Box
          display="inline-block"
          minWidth={240}
          width={240}
          overflow="hidden"
        >
          <Box bg="primary" p={2} color="white">
            Path
          </Box>
          <Box p={2}>
            {points.map((p, i) => (
              <Box key={i} flexWrap="wrap" m={1}>
                {JSON.stringify(p)}
              </Box>
            ))}
          </Box>
          <Form addPoint={addPoint} />
        </Box>
        <Box minWidth={600} width={600} height={600} minHeight={600}>
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
