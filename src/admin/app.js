export default {
  config: {
    locales: ['pt-BR'],
  },
  theme: {
    colors: {
      alternative100: '#f6ecfc',
      alternative200: '#e0c1f4',
      alternative500: '#ac73e6',
      alternative600: '#9736e8',
      alternative700: '#8312d1',
      danger700: '#b72b1a'
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
