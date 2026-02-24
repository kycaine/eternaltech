import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, , lang] = url.pathname.split('/');
    // handle base path if exists
    const parts = url.pathname.split('/');
    // With base /eternaltech, parts would be ['', 'eternaltech', 'id', ...]
    // So lang is at index 2
    if (parts[2] in ui) return parts[2] as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
