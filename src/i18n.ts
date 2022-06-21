/* eslint-disable global-require */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require("@/assets/locales/en/common.json")
  },
  ar: {
    translation: require("@/assets/locales/ar/common.json")
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
