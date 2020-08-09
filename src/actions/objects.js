export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const moveObjects = (cordinate) => ({
  type: MOVE_OBJECTS,
  data: {
    mousePosition: cordinate,
  },
});
