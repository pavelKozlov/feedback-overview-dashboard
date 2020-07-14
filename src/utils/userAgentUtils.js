/**
 * Get device type based on user agent.
 *
 * @param {String} userAgent
 * @returns {string}
 */
const getDeviceType = (userAgent) => {
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};

export { getDeviceType };
