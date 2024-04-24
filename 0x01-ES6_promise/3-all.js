// Importing the required functions from utils.js
import { uploadPhoto, createUser } from './utils';

/**
 * Collectively resolves promises from uploadPhoto and createUser functions.
 * Logs firstName and lastName to the console on successful resolution.
 * Logs 'Signup system offline' in case of an error.
 */
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
