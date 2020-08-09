import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = () => {
  const style = {
    sky: {
      fill: '#30abef',
    },
  };

  const skyWidth = skyAndGroundWidth;
  const gameHeight = 1200;

  return (
    <rect
      style={style.sky}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
