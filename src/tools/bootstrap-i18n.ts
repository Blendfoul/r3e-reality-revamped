import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../languages/en.json';

(async () => {
  await i18next.use(initReactI18next).init({
    resources: {
      en,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
})();
