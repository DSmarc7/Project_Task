<template>
  <header>
    <nav>
      <div class="logo">
        <h2>Task Manager</h2>
      </div>
      <ul>
        <li>
          <router-link class="nav-button" to="/">Home</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link class="nav-button" to="/task">Task</router-link>
        </li>
        <li v-if="isAuthenticated">
          <BaseButton @click="logout">Logout</BaseButton>
        </li>
        <li v-else>
          <BaseButton @click="login">Login</BaseButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import BaseButton from './BaseButton.vue';


export default {
  name: 'HeaderPage',
  components: {
    BaseButton,
  },
  setup() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return {
      isAuthenticated,
      user,
      login: async () => {
        try {
          await loginWithRedirect();
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
      logout: async () => {
        try {
          await logout({ returnTo: window.location.origin });
        } catch (error) {
          console.error('Error logging out:', error);
        }
      },
    };
  },
};
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono&family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
nav {
  background-color: #bdeeda;
  color: #FFF; /* changed font color for better readability */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* vertically center items in nav */
}

.nav-logo {
  font-size: 1.8em;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 10px;
}
.nav-button {
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s, transform 0.1s;
    text-decoration: none; /* Remove underline for links */
    background-color: #007BFF;
    font-size: 15px;
    
  }
  .nav-button:hover {
    transform: scale(1.05);
    background-color: #0056b3; 
  }
.user-info{
  display: flex;
  justify-content: center;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  gap: 10px;
}
</style>
