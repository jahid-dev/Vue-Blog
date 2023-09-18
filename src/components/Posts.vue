<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const posts = ref([]);
onBeforeMount(()=>{
    let url = "https://dummyjson.com/posts?limit=20";
    axios.get(url).then(res=>{
        posts.value = res.data.posts
    })
})

</script>

<template>
    <article class="mb-10" v-for="post in posts" :key="post.id">
        <router-Link :to="{name: 'post', params: {id: post.id}}">
            <h1 class="text-xl mb-2">{{ post.title }}</h1>
        </router-Link>
        <p>
        <router-Link :to="{name: 'post', params: {id: post.id}}">
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
        </router-Link>
        {{ post.body }}
        </p>
    </article>
</template>

<style scoped>

</style>