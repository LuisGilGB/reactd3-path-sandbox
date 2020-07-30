import React, { useState } from "react";
import { Box, Button } from "rebass";
import NumberField from "./NumberField";

const Form = props => {
  const { addPoint } = props;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    addPoint({ x, y });
  };

  const onXChange = value => {
    setX(value);
  };

  const onYChange = value => {
    setY(value);
  };

  return (
    <Box
      as="form"
      display="inline-flex"
      flexDirection="column"
      alignItems="stretch"
      p={1}
      onSubmit={onSubmit}
    >
      <NumberField m={2} name="x" label="x" value={x} onChange={onXChange} />
      <NumberField m={2} name="y" label="y" value={y} onChange={onYChange} />
      <Button
        m={2}
        sx={{
          ":hover": {
            bg: "tomato",
            cursor: "pointer"
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default Form;
