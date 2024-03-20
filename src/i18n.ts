import { createI18n } from "vue-i18n";
import enLang from "@locales/en.json";
import siLang from "@locales/si.json";

const numberFormats = {
    'sl': {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
      decimal: {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true
      },
      percent: {
        style: 'percent', useGrouping: false
      }
    }
}

const messages = {
    en: {
        ...enLang,
    },
    sl: {
        ...siLang,        
    },    
};

export const i18n = createI18n({
    numberFormats,
    locale: "sl",
    messages,
})