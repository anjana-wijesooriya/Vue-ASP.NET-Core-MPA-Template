import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  fr: {
    message: {
      hello: 'Bonjour le monde'
    }
  },
  nl: {
    message: {
      hello: 'Hallo Wereld'
    }
  }
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})
