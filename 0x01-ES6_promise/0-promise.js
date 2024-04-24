/**
 * Prototype function to return a Promise.
 * @returns {Promise} A Promise.
 */
export default function getResponseFromAPI() {
  return new Promise((reject) => {
    // Simulating API response after 1 second
    // setTimeout(() => {
    //   resolve('API response data');
    // }, 1000);
    reject(5);
  });
}
