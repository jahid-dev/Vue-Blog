<script setup>
import {authStore} from '../store/store'
</script>

<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/posts">Blog</router-link></li>
        <li><router-link to="/protected">Protected</router-link></li>
        <li><router-link to="/login">
            <span v-if="authStore.isAuthenticate">
                Profile
            </span>
            <span v-else>
                Login
            </span>
        </router-link></li>
        </ul>
    </section>
</template>

<style scoped>

</style>