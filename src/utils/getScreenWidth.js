export const isScreenWidth = (width) => {
  if (window.innerWidth > width) {
    return false;
  } else {
    return true;
  }
};
