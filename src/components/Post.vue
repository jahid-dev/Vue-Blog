<script setup>
import {useRoute} from 'vue-router'
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'
const post = reactive({})
const comments = ref("")
const route = useRoute()
const id = route.params.id
onBeforeMount(()=>{
    let single_url = "https://dummyjson.com/posts/"+id
    axios.get(single_url).then(res=>{
        post.id = res.data.id,
        post.title = res.data.title,
        post.body = res.data.body
    })

    let single_comment_url = "https://dummyjson.com/posts/"+id+"/comments?limit=5"
    axios.get(single_comment_url).then(res=>{
        comments.value= res.data.comments
    })
})
</script>

<template>
    <article class="mb-10">
        <h1 class="text-xl mb-2">{{ post.title }}</h1>
        <p>
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
            {{ post.body }}
        </p>
    </article>

    <h3 v-if="comments.length>0">Comments</h3>
    <hr>
    <br>

    <ul v-if="comments.length>0">
        <li v-for="comment in comments" :key="comment.id">
            <strong>{{ comment.user.username }}</strong> says {{comment.body}}
        </li>
    </ul>
</template>

<style scoped>

</style>