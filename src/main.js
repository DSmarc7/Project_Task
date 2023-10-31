import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css'

import { createAuth0 } from '@auth0/auth0-vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router

// Import your Vue components for the routes
import Home from './components/HomePage.vue';
import Task from './components/TaskM.vue';

// Create the Vue Router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }, // Define a route for the Home component
    { path: '/task', component: Task }, // Define a route for the Task component
  ],
});

// Create the Auth0 instance
const auth0 = createAuth0({
  domain: 'dev-iq3l7x3ruapqf6n0.eu.auth0.com',
  clientId: '8HzMpeVgymUICiwvhQFzACESWmpf2Ekx',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});

const app = createApp(App);

// Use both Vue Router and Auth0 in the app
app.use(router); // Use Vue Router
app.use(auth0); // Use Auth0

app.mount('#app');
