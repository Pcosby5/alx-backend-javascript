/**
 * Load balancer function to determine the faster download between two sources.
 * @param {Promise} chinaDownload - The promise representing the download from China.
 * @param {Promise} USDownload - The promise representing the download from the US.
 * @returns {Promise} - A promise that resolves with the faster download source.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value) // Directly return the resolved value
    .catch((error) => {
      // Re-throw to ensure the error can be handled by the caller
      console.error('Error:', error);
      throw error;
    });
}
