import {ref, reactive} from 'vue'

const authStore = reactive({
    isAuthenticate: localStorage.getItem('auth'),
    authenticate(){
        authStore.isAuthenticate = localStorage.setItem('auth',1)
    },
    logout(){
        authStore.isAuthenticate = localStorage.setItem('auth',0)
    }

})

export {authStore}