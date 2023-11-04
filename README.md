
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

## Dependencies to install
### Install Vue Router (for routing):
```
npm install vue-router
```
### Install Auth0 (for authentication):
```
npm install @auth0/auth0-vue
```
### Install Font Awesome Icons (for icons):
```
npm install @fortawesome/fontawesome-free

```


# Project_task

The app consists of the following main components:

MainPage: Wrapper component that includes HeaderPage and Footer.
HeaderPage: Displays the app's navigation, including links to home, task, login, and logout based on authentication status.
HomePage: Dashboard to display greetings and information based on user authentication.
TaskM: Allows users to create and manage tasks. Shows user profile details if authenticated.
Footer: Simple footer 

## Task Management Application

This is a task management application built using Vue.js, designed to help you stay organized and boost your productivity. Below are some of its key features:

Task Creation: Easily create new tasks with titles and categories.

Category Selection: Categorize tasks as "Business" or "Personal" for better organization.

Filtering: Filter tasks based on their status (All, To Do, Completed) to focus on what matters most.

Sorting: Sort tasks by date (Earliest, Oldest) or by category (Business, Personal) to suit your workflow.

Task History: Keep track of task history, including when tasks were started and completed.

User Profile: Personalize your experience by providing your name and viewing your user profile.

Persistent Data: Your tasks and user preferences are saved locally, so you won't lose your data when you close the app.

Beautiful UI: Enjoy an intuitive and visually appealing user interface for an enhanced user experience.

Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.

Authentication: Securely log in with authentication provided by Auth0 for a safe and private user experience.


### Routes

Home (/): Displays the HomePage component.
Task (/task): Displays the TaskM component.

### Authentication with Auth0

Authentication in this app is handled using Auth0. The app integrates with Auth0 using the @auth0/auth0-vue plugin.

To integrate your Auth0 account:

1.Sign up for an Auth0 account.

2.Create an application on the Auth0 dashboard.

3.Update the domain and clientId in main.js with your Auth0 application details.
Styling

The application uses scoped CSS for each component. External styles such as Google Fonts and FontAwesome are imported directly into the components or the main CSS file.

### Contribution

Feel free to fork this repository, add your features or improvements and create a pull request. We love to see community contributions!

