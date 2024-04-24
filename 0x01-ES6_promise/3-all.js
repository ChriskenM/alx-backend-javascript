import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    // Concurrently executes uploadPhoto and createUser
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Extracts data from responses
    const photoName = photoResponse.body;
    const { firstName, lastName } = userResponse;

    // Logs the combined result
    console.log(`${photoName} ${firstName} ${lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
