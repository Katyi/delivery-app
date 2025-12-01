/**
 * Helper function to transliterate Russian characters to English equivalents.
 * Note: This uses a basic mapping and may not cover all edge cases or modern standards.
 * @param str The input string (Russian text).
 * @returns The transliterated string.
 */
const translit = (str: string): string => {
  const ru = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя';

  const en =
    'ABVGDEZHZIYKLMNOPRSTUFHCCCSSHYYAEUYAabvgdezhziyklmnoprstufhccshshyeyua';

  let res = '';
  for (let i = 0, l = str.length; i < l; i++) {
    const s = str.charAt(i);
    const n = ru.indexOf(s);
    if (n >= 0) {
      res += en[n];
    } else {
      res += s;
    }
  }
  return res;
};

/**
 * Generates a URL-friendly slug from a string, including Russian transliteration.
 * @param str The input string (e.g., a title).
 * @returns The generated slug.
 */
export const generateSlug = (str: string): string => {
  let url: string = str.trim(); // Start by trimming leading/trailing whitespace
  url = translit(url); // Apply transliteration first

  // Use a single, efficient chain of replaces:
  url = url
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace all spaces and underscores with a single hyphen
    .replace(/[^a-z0-9-]+/g, '') // Remove all non-alphanumeric characters except hyphens
    .replace(/--+/g, '-') // Replace multiple consecutive hyphens with one
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  return url;
};
