import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/icon.svg';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    locales: ['pt-BR'],
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: favicon,
    },
    theme: {
      colors: {
        alternative100: '#B4E1F8',
        alternative200: '#6AC4F1',
        alternative500: '#138FCE',
        alternative600: '#1182BB',
        alternative700: '#0E6895',

        primary100: '#B4E1F8',
        primary200: '#6AC4F1',
        primary500: '#138FCE',
        primary600: '#1182BB',
        primary700: '#0E6895',

        danger700: '#b72b1a'
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap() {

    document.addEventListener("DOMContentLoaded", function (e) {
      setTimeout(() => {
        document.querySelector("#onboarding").remove()
        document.querySelector("[href='/admin/list-plugins']").parentElement.remove()
        document.querySelector("[href='/admin/marketplace']").parentElement.remove()
        document.querySelector("[href='/admin/plugins/content-type-builder']").parentElement.remove()
      }, 1000);
    });

  },
};
