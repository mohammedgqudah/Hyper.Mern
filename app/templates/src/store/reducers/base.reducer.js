export default (state, { payload, type }) => {
  switch (type) {
    case 'ACTION_NAME':
      return { ...state };
      break;
    default:
      return { ...state };
      break;
  }
};
