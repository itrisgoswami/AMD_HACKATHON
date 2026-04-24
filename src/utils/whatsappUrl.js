/**
 * Generates a WhatsApp share URL with the provided craving, swap, and benefit.
 * @param {string} craving - The original craving.
 * @param {string} swap - The suggested healthy swap.
 * @param {string} benefit - The benefit of the swap.
 * @returns {string} The encoded WhatsApp URL.
 */
export const buildWhatsAppUrl = (craving, swap, benefit) => {
  if (typeof craving === 'undefined' || typeof swap === 'undefined' || typeof benefit === 'undefined') {
    return `https://wa.me/?text=`;
  }
  const text = `Instead of ${craving}, try ${swap} tonight! ${benefit} 🌙 #After8App`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};
