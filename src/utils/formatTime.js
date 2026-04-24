/**
 * Formats a Date object into a readable time string (e.g., "10:34 PM").
 * @param {Date} date - The date to format.
 * @returns {string} Formatted time string.
 */
export const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
};
