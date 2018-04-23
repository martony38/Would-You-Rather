// Inspired from Udacity Redux course
// (https://github.com/udacity/reactnd-chirper-app/blob/6176c497a95b10c101a0d9104a160d44645b40f2/src/utils/helpers.js)
export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return `${time.substring(0, time.length - 6)} ${time.slice(-2)} on ${d.toLocaleDateString()}`
}
