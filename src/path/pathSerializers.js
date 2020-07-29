export const moveTo = (x, y) => `M ${x} ${y}`;

export const closePath = (path = "") => `${path} Z`;

export const hLineTo = x => `H ${x}`;

export const vLineTo = y => `V ${y}`;

export const lineTo = (x, y) => `L ${x} ${y}`;

export const quadraticCurveTo = (controlX, controlY, x, y) =>
  `Q ${controlX} ${controlY} ${x} ${y}`;

export const bezierCurveTo = (
  controlX1,
  controlY1,
  controlX2,
  controlY2,
  x,
  y
) => `C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${x} ${y}`;

export const arcTo = (rx, ry, rotation, largeArcFlag, sweepFlag, x, y) =>
  `A ${rx} ${ry} ${rotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;

export const circArcTo = (r, rotation, largeArcFlag, sweepFlag, x, y) =>
  arcTo(r, r, rotation, largeArcFlag, sweepFlag, x, y);
