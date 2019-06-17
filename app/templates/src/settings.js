export default {
  AuthRedirectUrl: "/",
  AppName: "<%= appName %>",
  description: "<%= description %>",
  AfterAuthDelay: 1000,
  links: [
    { name: "Home", to: "/", exact: true },
    { name: "App", to: "/app" },
    { name: "Contact us", to: "/contact-us" },
    { name: "About us", to: "/about-us" }
  ],
  SERVER: "http://localhost:3000"
};
