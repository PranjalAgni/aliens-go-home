import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

function App(props) {
  const { moveObjects } = props;

  const trackMouse = useCallback(
    ({ clientX, clientY }) => {
      const canvasMousePos = getCanvasPosition(clientX, clientY);
      moveObjects(canvasMousePos);
    },
    [moveObjects]
  );

  return (
    <div>
      <Canvas angle={props.angle} trackMouse={trackMouse} />
    </div>
  );
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
