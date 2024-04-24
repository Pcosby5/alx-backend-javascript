/**
 * Appends handlers to the provided promise.
 * @param {Promise} promise - The promise to handle.
 */
// export default function handleResponseFromAPI(promise) {
//   promise
//     .then(() => {
//       console.log('Got a response from the API');
//       return { status: 200, body: 'success' };
//     })
//     .catch(() => {
//       console.log('Got a response from the API');
//       return new Error();
//     });
// }
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
