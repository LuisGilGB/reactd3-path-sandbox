import React from "react";
import Path from "./path/Path";
import { EXAMPLE_POINTS } from "./data";
import { Box, Flex } from "rebass";
import { Label, Input } from "@rebass/forms";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Flex>
        <Box as="form" width={240} p={1}>
          <Flex m={2}>
            <Label
              flex={1}
              px={3}
              justifyContent="flex-end"
              alignItems="center"
              htmlFor="x"
            >
              x
            </Label>
            <Input
              width={120}
              name="x"
              type="number"
              min={0}
              defaultValue={0}
            />
          </Flex>
          <Flex m={2}>
            <Label
              flex={1}
              px={3}
              justifyContent="flex-end"
              alignItems="center"
              htmlFor="y"
            >
              y
            </Label>
            <Input
              width={120}
              name="y"
              type="number"
              min={0}
              defaultValue={0}
            />
          </Flex>
        </Box>
        <Box>
          <svg width={600} height={600}>
            <Path
              points={EXAMPLE_POINTS}
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
