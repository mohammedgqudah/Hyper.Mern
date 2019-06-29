export default {
  AuthRedirectUrl: '/',
  AppName: '<%= appName %>',
  AfterAuthDelay: 1000,
  links: [
    { name: 'Home', to: '/', exact: true },
    { name: 'App', to: '/app' },
    { name: 'Contact us', to: '/contact-us' },
    { name: 'About us', to: '/about-us' }
  ],
  SERVER: 'http://localhost:3000',
  SOCIAL: {
    GITHUB: 'https://github.com/mohammedgqudah/Hyper.Mern',
    TWITTER: 'https://twitter.com/',
    FACEBOOK: 'https://facebook.com/'
  }
};
