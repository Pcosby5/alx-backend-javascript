/**
 * Returns a promise based on the success parameter.
 * @param {boolean} success - Indicates if the response should be successful.
 * @returns {Promise} A promise.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
