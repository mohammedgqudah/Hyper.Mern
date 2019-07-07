const SETTINGS = {
  // Url to Redirect after signup/login, here it's redirecting to home
  AuthRedirectUrl: '/',
  // Your application name
  AppName: '<%= appName %>',
  // After login/signup a fade animation will occur wait for it then redirect
  AfterAuthDelay: 1000,
  // Links displayed in the navbar
  links: [
    { name: 'Home', to: '/', exact: true },
    { name: 'App', to: '/app' },
    { name: 'Contact us', to: '/contact-us' },
    { name: 'About us', to: '/about-us' }
  ],
  // Navbar background color for each route.
  // Setting it to `primary` will add the `.default` class, see /components/navbar/navbar.module.scss
  // You can also set it any valid css `background` value: rgb/hsl...
  // If you didn't specify the route color it'll be transparent, like in home, the navbar is taking the bg color
  NAVBAR_COLORS: {
    // '/contact-us': 'primary',
    '/': 'transparent'
  },
  // Navbar color if u didn't specify it in `NAVBAR_COLORS`.
  // Rules for settign a color on `NAVBAR_COLORS` applys here too.
  // Don't leave this empty or the app will crash.
  NAVBAR_COLOR_FALLBACK: 'primary',
  // Server url
  // The API url is extended from it (settings.SERVER + '/api'), see `/src/axios/axios.base.js`
  SERVER: 'http://localhost:3000',
  // Social links
  SOCIAL: {
    GITHUB: 'https://github.com/mohammedgqudah/Hyper.Mern',
    TWITTER: 'https://twitter.com/',
    FACEBOOK: 'https://facebook.com/'
  }
};
export default SETTINGS;
