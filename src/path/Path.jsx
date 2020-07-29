import React from "react";
import { moveTo, lineTo, closePath, quadraticCurveTo } from "./pathSerializers";

/*
M - moveto
L - lineto
Z - closepath
H - horizontal lineto
V - vertical lineto
C - curveto
S - smooth curveto
Q - quadratic curveto
T - smooth quadratic curveto
A - arcto
*/

const DEFAULT_POINTS = [];

const MOVE_TYPE = {
  serializer: moveTo,
  getParams: (item = {}) => [item.x || 0, item.y || 0]
};
const LINE_TYPE = {
  serializer: lineTo,
  getParams: (item = {}) => [item.x, item.y]
};
const QUADRATIC_TYPE = {
  serializer: quadraticCurveTo,
  getParams: (item = {}) => [item.controlX, item.controlY, item.x, item.y]
};

const SUBPATH_TYPE_MAP = {
  move: MOVE_TYPE,
  line: LINE_TYPE,
  l: LINE_TYPE,
  quadratic: QUADRATIC_TYPE,
  q: QUADRATIC_TYPE,
  default: LINE_TYPE
};

const Path = props => {
  const {
    points = DEFAULT_POINTS,
    fill,
    closePath: closePathProp,
    ...otherProps
  } = props;

  const fromPointsToD = (points = []) => {
    const tempPath = points.reduce((temp, p, i) => {
      const { serializer, getParams } = i
        ? (p.type && SUBPATH_TYPE_MAP[p.type.toLowerCase()]) ||
          SUBPATH_TYPE_MAP.default
        : SUBPATH_TYPE_MAP.move;
      return `${temp} ${serializer(...getParams(p))}`;
    }, "");
    return closePathProp ? closePath(tempPath) : tempPath;
  };

  return (
    <path
      {...otherProps}
      d={fromPointsToD(points)}
      fill={fill || "transparent"}
    />
  );
};

export default Path;
