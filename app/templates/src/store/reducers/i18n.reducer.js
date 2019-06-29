import { CHANGE_LANGUAGE } from '../actions/constants';

export default (state, { type, payload }) => {
  switch (type) {
    case '@@INIT': {
      let browser_lang =
        localStorage.getItem('I18N_LANG') || navigator.language.split('-')[0];
      let current_lang = state.i18n.languages[browser_lang]
        ? browser_lang
        : state.i18n.fallback;
      return { ...state, i18n: { ...state.i18n, current_lang } };
      break;
    }
    case CHANGE_LANGUAGE: {
      let current_lang = state.i18n.languages[payload]
        ? payload
        : state.i18n.fallback;
      localStorage.setItem('I18N_LANG', current_lang);
      return { ...state, i18n: { ...state.i18n, current_lang } };
    }
    default:
      return { ...state };
  }
};
