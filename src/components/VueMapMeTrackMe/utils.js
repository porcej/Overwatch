/**
 * Utility functions for VueMapMeTrackMe.
 * @module VueMapMeTrackMe/utils
 * @author joe@kt3i.com
 * @version 0.0.1
 * @license MIT
 */

/**
 * Utilities to handle fetching data
 *
 */
const utils = {
  /**
   * Retrieves data from API and unpacks it
   *
   * @params {Object} opts object representing API options
   * @returns {Object} object payload on success or empty object
   */
  fetchRoster(opts = {}) {
    return fetch(`${opts.url}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.debug("Raw staffing data rxed:", data);
        if (data.status_code !== 200) {
          throw new Error(
            `Error received from server. Error code ${data.status_code}\n ${opts.url}`
          );
        }
        console.debug(`${data.name} rxed from server.`, data.data);
        return data.data;
      })
      .catch((err) => {
          console.warn(err);
          return {};
        });
  },
};

export default utils;