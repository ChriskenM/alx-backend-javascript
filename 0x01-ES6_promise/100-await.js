import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('profile-photo.jpg');
    const user = await createUser('Guillaume', 'Salva');
    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
