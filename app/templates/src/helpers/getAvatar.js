import settings from '../settings';

export default avID => {
  return `${settings.SERVER}/assets/img/avatars/${avID}.png`;
};
