import React from 'react';
import App from '../App';
import { useSelector, useDispatch } from 'react-redux';

import { moveObjects } from '../actions/objects';

const Game = () => {
  const angle = useSelector((state) => state.objects.angle);
  const dispatch = useDispatch();
  return (
    <App angle={angle} moveObjects={(data) => dispatch(moveObjects(data))} />
  );
};

export default Game;
