
# Task Manager Vue App

This application allows users to manage tasks. It has authentication using Auth0, which makes it secure for individual users.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Project_task

The app consists of the following main components:

MainPage: Wrapper component that includes HeaderPage and Footer.
HeaderPage: Displays the app's navigation, including links to home, task, login, and logout based on authentication status.
HomePage: Dashboard to display greetings and information based on user authentication.
TaskM: Allows users to create and manage tasks. Shows user profile details if authenticated.
Footer: Simple footer 


# Routes

Home (/): Displays the HomePage component.
Task (/task): Displays the TaskM component.

# Authentication with Auth0

Authentication in this app is handled using Auth0. The app integrates with Auth0 using the @auth0/auth0-vue plugin.

To integrate your Auth0 account:

1.Sign up for an Auth0 account.

2.Create an application on the Auth0 dashboard.

3.Update the domain and clientId in main.js with your Auth0 application details.
Styling

The application uses scoped CSS for each component. External styles such as Google Fonts and FontAwesome are imported directly into the components or the main CSS file.

# Contribution

Feel free to fork this repository, add your features or improvements and create a pull request. We love to see community contributions!

