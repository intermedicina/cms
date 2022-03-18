import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/icon.svg';
import favicon from './extensions/favicon.ico';

const siteName = "Intermedicina"

export default {
  config: {
    locales: ['pt-BR'],
    translations: {
      'pt-BR': {
        "app.components.LeftMenu.navbrand.title": siteName,
        "app.components.LeftMenu.navbrand.workplace": "",
        "Auth.form.welcome.subtitle": "",
      },
      en:{
        "app.components.LeftMenu.navbrand.title": siteName,
        "app.components.LeftMenu.navbrand.workplace": "",
        "Auth.form.welcome.subtitle": "",
      }
    },
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

        primary100: '#DAF0FC',
        primary200: '#A2DAF6',
        primary500: '#57BDEF',
        primary600: '#1FA6EA',
        primary700: '#138FCE',

        danger700: '#E2202C'
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
