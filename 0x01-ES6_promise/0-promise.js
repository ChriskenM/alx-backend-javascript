export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('succesful data fetching');
    }, 1000);
  });
}
