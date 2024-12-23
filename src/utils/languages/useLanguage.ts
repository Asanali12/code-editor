import { loadLanguage, type LanguageName } from '@uiw/codemirror-extensions-langs';

export const useLanguageExtensionArray = (language: LanguageName) => {
    const languageExtension = loadLanguage(language)
    if (languageExtension !== null) {
        return [languageExtension]
    }
    return []
}
