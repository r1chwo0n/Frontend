import React from "react";

interface HexagonGridProps {
  width: number;
  height: number;
  size: number;
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ width, height, size }) => {
  const hexagons = [];

  const numRows = Math.floor(height / (size * Math.sqrt(3)));
  const numCols = Math.floor(width / (size * 1.5));

  for (let row = 0; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      const x = col * size * 1.5;
      const y =
        row * size * Math.sqrt(3) + (col % 2 ? (size * Math.sqrt(3)) / 2 : 0);

      hexagons.push(<Hexagon key={`${row}-${col}`} x={x} y={y} size={size} />);
    }
  }

  return (
    <svg width={width} height={height}>
      {hexagons}
    </svg>
  );
};

interface HexagonProps {
  x: number;
  y: number;
  size: number;
}

const Hexagon: React.FC<HexagonProps> = ({ x, y, size }) => {
  const points = [
    [0, size / 2],
    [(size * Math.sqrt(3)) / 2, 0],
    [size * Math.sqrt(3), size / 2],
    [size * Math.sqrt(3), size * 1.5],
    [(size * Math.sqrt(3)) / 2, size * 2],
    [0, size * 1.5],
  ];

  const pathData =
    points
      .map((point, index) => {
        const [px, py] = point;
        const rotatedPoint = rotatePoint(px, py, size, size);
        return `${index === 0 ? "M" : "L"} ${rotatedPoint.x + x} ${
          rotatedPoint.y + y
        }`;
      })
      .join(" ") + " Z";

  return <path d={pathData} fill="#FFC47E" stroke="black" strokeWidth="1" />;
};

function rotatePoint(x: number, y: number, cx: number, cy: number) {
  const angle = Math.PI / 2; // 45 degrees in radians
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const nx = cos * (x - cx) + sin * (y - cy) + cx;
  const ny = cos * (y - cy) - sin * (x - cx) + cy;
  return { x: nx, y: ny };
}

export default HexagonGrid;
