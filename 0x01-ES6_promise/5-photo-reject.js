/**
 * Returns a promise rejecting with an Error indicating that the file cannot be processed.
 * @param {string} filename - The name of the file.
 * @returns {Promise} A promise rejecting with an Error and the message .
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
