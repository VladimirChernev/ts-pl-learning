
/**
  Selects a string based on the provided language code
    @param lang - Language code ('en' for English, 'bg' for Bulgarian)
    @param text - An object containing the text in different languages
    @returns The string corresponding to the specified language
*/
export default function selectStringByLang(lang: string, text: { en: string; bg: string }): string {
    return text[lang];
}