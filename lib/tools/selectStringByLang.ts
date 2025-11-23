
/**
  Selects a string based on the provided language code
    @type {string} lang - Language code ('en' for English, 'bg' for Bulgarian)
    @type { en: string; bg: string } text - An object containing the text in different languages
    @returns The string corresponding to the specified language
*/
export default function selectStringByLang(lang: string, text: { en: string; bg: string }): string {
    return text[lang];
}