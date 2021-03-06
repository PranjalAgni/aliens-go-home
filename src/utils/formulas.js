export const radianToDegrees = (radians) => (radians * 180) / Math.PI;

export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) return 90;
  if (x2 < 0 && y2 >= 0) return -90;
  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radianToDegrees(Math.atan(quotient)) * -1;
};

export const pathFromBezierCurve = (cubicBezierCurve) => {
  const {
    initialAxis,
    initialControlPoint,
    endingControlPoint,
    endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const getCanvasPosition = (clientX, clientY) => {
  const svg = document.getElementById('aliens-go-home-canvas');
  const point = svg.createSVGPoint();

  point.x = clientX;
  point.y = clientY;

  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};
