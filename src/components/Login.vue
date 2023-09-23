<script setup>
import {authStore} from '../store/store';
</script>

<template>
    <h1 class="text-xl mb-2">Login Page</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat molestias numquam rerum necessitatibus cumque debitis exercitationem reprehenderit, aperiam aliquid quibusdam consectetur, quas tenetur distinctio, reiciendis error repellendus vel enim?</p>

    <button @click="authStore.authenticate()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <span v-if="authStore.isAuthenticate">You're already logged in</span>
        <span v-else>Click to Login</span>
    </button>
    <button @click="authStore.logout()" v-if="authStore.isAuthenticate" class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log out
    </button>
</template>

<style scoped>

</style>