<template>
    <div class="home-page">
        <h2 class="title">
            <template v-if="isAuthenticated">
                Greetings, {{ user.name }}! Here's your Tasks Dashboard.
            </template>
            <template v-else>
                Welcome to your Tasks Dashboard
            </template>
		</h2>
        <br>
        <br>
        <p>
            <template v-if="isAuthenticated">
                Dive in and manage your daily tasks.
            </template>
            <template v-else>
                You will be able to handle your daily tasks. Just Login or Register to access the Task Page.
            </template>
        </p>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
    name: 'HomePage',
    setup() {
        const { isAuthenticated, user } = useAuth0();

        return {
            isAuthenticated,
            user
        };
    }
}
</script>

<style>
.home-page {
    max-width: 800px;
    margin: 150px auto;
    padding: 20px;
    text-align: center;
}
</style>
