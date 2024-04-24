export default function returnHowManyArguments(...args) {
  let result = 0;
  for (let n in args) {
    result++;
  }
  return result;
}
