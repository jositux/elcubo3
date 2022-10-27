
/**
 * Set the screen mode for each cube mode
 * mode is string that could be chonological, labyrinth or reflexive
 * isFullScreen is a boolean that could be: true, false
 * 
 * @param {*} mode 
 * @param {*} screenMode 
 */
const setScreenMode = (mode, isFullScreen) => {
  localStorage.setItem(mode, isFullScreen);
};

/**
 * Returns the current fullscreen config for the given mode
 * mode is string that could be chonological, labyrinth or reflexive
 * 
 * @param {*} mode 
 * @returns 
 */
const getScreenMode = (mode) => {
  return localStorage.getItem(mode) || false;
};

export default {
  setScreenMode,
  getScreenMode,
};