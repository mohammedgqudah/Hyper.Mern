# Hyper.Mern

## About
Hyper.Mern is a fork of permiere-mern-stack generator.

Simple enough to build on, complex enough to take you all the way.

This stack gets you up and running with dev absolutes. Webpack Dev Server for HMR integrated with an Express API server with authentication. Mongoose and MongoDB for your database, Code splitting at the route level for small bundle sizes, elegant linting with smart defaults for consistency and all the other goodies that come from a MERN stack using the latest and greatest. See the full feature list below

## prerequisite
- mongodb installed and in path.

## Features
- Beautiful User Interface + Kawaii 404 page. thanks to [react-kawaii](https://github.com/miukimiu/react-kawaii)
- I18n
- Jwt Authentication API + Login/Signup Routes & Forms
- A Project Structure That Makes Sense
- React Router Client Side Routing
- Auto Generated Identicon For Each User
- Redux + React Redux
- Lazy Loading/Dynamic Imports for Each Route
- SASS
- Babel 7 + Webpack 4
- Webpack Dev Server + Express API Server
- HMR for CSS/SASS/LESS
- Live Reload for HTML/JS/JSX changes
- ESLint
- Stylelint
- PostCSS + Autoprefixer

## Getting Started
1. Run `npm i -g yo generator-hyper-mern`
2. Make your project directory and cd into it `mkdir my_proj && cd my_proj`
3. Run `yo hyper-mern`
4. To connect to MongoDB simply add to the `.env` file  `DB_URI=<YOUR_URI_HERE>`
5. Run `npm start:dev:all` to begin your premiere developer experience

## Docker Support
`npm run docker` will create and run the site inside a docker container. Port 3000 is mapped so you can continue to view the running container locally.

## Folder Structure
Below is the folder structure for projects made with this generator with an explanation of what each folder contains or what the file is for. Some

```
.
├── db                                     # Folder for mongodb to store the data -- git ignored
├── server                                 # server
│   ├── api.js                             # api router
│   ├── apps                               # api apps -- eg /api/auth
│   │   ├── auth                           # authentication app
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.router.js
│   │   │   ├── auth.service.js
│   │   │   └── auth.validators.js
│   │   └── template                       # template for apps -- copy paste & edit
│   │       ├── index.js
│   │       ├── template.controller.js
│   │       ├── template.services.js
│   │       └── template.validators.js
│   ├── clientSideRoutes.js                # client side routes config
│   ├── db                                 # servre database -- models
│   │   ├── index.js
│   │   └── models
│   │       ├── index.js
│   │       └── user.js
│   ├── index.js                           # server entry point
│   ├── settings.js                        # server public settings -- use .env for private ones
│   └── setup                              # server configeration
│       ├── auth
│       │   └── passport.js
│       ├── auth.js
│       ├── cookies.js
│       ├── cors.js
│       ├── logs.js
│       ├── routes.js
│       ├── sessions.js
│       ├── socketio.js
│       ├── start.js
│       └── static.js
├── src                                    # client code -- react
│   ├── axios                              # axios instance
│   │   └── axios.base.js
│   ├── components                         # react components
│   │   ├── Avatar                         # Avatar component -- in the navbar
│   │   │   ├── Avatar.jsx
│   │   │   └── Avatar.scss
│   │   ├── Button                         # Button component
│   │   │   └── Button.jsx
│   │   ├── DelayedRedirect.jsx            # React Router Redirect with delay
│   │   ├── Input                          # Input Component
│   │   │   ├── Input.jsx
│   │   │   └── Input.scss
│   │   └── Navbar                         # Navbar Component
│   │       ├── Navbar.jsx
│   │       └── Navbar.scss
│   ├── helpers                            # Helpers used across app
│   │   ├── getAvatar.js
│   │   └── wave.js
│   ├── index.jsx                          # src entry point
│   ├── Routes                             # React Router Pages
│   │   ├── 404
│   │   │   ├── 404.jsx
│   │   │   └── 404.scss
│   │   ├── Home
│   │   │   ├── Home.jsx
│   │   │   └── home.scss
│   │   ├── index.jsx
│   │   ├── LazyLoadRoutes.jsx
│   │   └── login-signup
│   │       ├── auth.scss
│   │       ├── login.jsx
│   │       └── signup.jsx
│   ├── settings.js                        # client settings
│   ├── store                              # redux configuration
│   │   ├── actions                        # async actions
│   │   │   ├── auth.actions.js
│   │   │   ├── base.actions.js
│   │   │   └── constants.js               # action types/names
│   │   ├── configStore.js                 # initialize redux
│   │   └── reducers                       # reducers
│   │       ├── auth.reducer.js
│   │       └── base.reducer.js
│   └── styles                             # styles
│       ├── animate.scss
│       ├── Button.scss                    # Useful Button mixin
│       ├── linear-channel-values.scss     # Used by the Button
│       ├── main.scss                      # Main scss file
│       ├── reset.css                      # Global reset -- edit it to your liking
│       ├── settings.scss                  # Variables etc..
│       └── shared.scss                    # reuseable mixins function cross the app
├── public                                 # Public Folder -- static assets
│   └── assets
│       ├── img
│       │   ├── 404.gif                    # Nice 404 gif
│       │   └── avatars                    # User avatars are stored here
│       └── js                             # JS libs/files
├── imports                                # Shared code between server/client like schemas
│   └── schemas
├── docker-compose.yml
├── Dockerfile
├── entrypoint.sh
├── HTMLTemplate.js
├── jsconfig.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── webpack.config.js
```

## Configuration
There are many ways you can configure this stack to suit your specific needs

### Babel
- You can configure all your babel plugins via the `.babelrc`

### Stylelint
- Set your preferred order for styles in `.stylelintrc` (achieved via stylelint-order package)
- Whitelist or blacklist units that are allowed
- Control if tabs should be done with spaces or tabs
- [And many more](https://stylelint.io/user-guide/plugins/)

### ESLint
- ESLint lets you customize and enforce certain rules for your JS code like
- Enforcing `===` always instead of `==`
- Disallowing use of `var` keyword
- [And many more](https://eslint.org/docs/rules/)
