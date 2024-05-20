export const map = (nr, in_min, in_max, out_min, out_max) => {
  let result = (nr-in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  return result
}
