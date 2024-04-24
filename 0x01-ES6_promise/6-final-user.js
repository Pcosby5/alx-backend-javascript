import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles signing up a user and uploading a photo.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise} A promise that resolves to an array of objects representing
 *  the status and value of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
