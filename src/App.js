import React, { useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

function App(props) {
  useEffect(() => {
    console.log('My app component is mounted...');
  }, []);

  const trackMouse = useCallback(({ clientX, clientY }) => {
    const canvasMousePos = getCanvasPosition(clientX, clientY);
    props.moveObjects(canvasMousePos);
  }, []);

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
