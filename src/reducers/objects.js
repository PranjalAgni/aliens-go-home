import createReducer from '../utils/createReducer';
import { MOVE_OBJECTS } from '../actions/objects';
import { calculateAngle } from '../utils/formulas';

const initialState = {
  angle: 45,
};

const objects = createReducer(initialState, {
  [MOVE_OBJECTS]: (state, action) => {
    const { mousePosition } = action.data;
    if (!mousePosition) return state;
    const { x, y } = mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
      ...state,
      angle,
    };
  },
});

export default objects;
