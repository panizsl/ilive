/**
 * Convert number to Persian digits
 * @param {number|string} num - Number to convert
 * @returns {string} Number with Persian digits
 */
export function toPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
}
