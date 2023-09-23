import {ref, reactive} from 'vue'

const authStore = reactive({
    isAuthenticate: false,
    authenticate(){
        authStore.isAuthenticate = true
    },
    logout(){
        authStore.isAuthenticate = false
    }

})

export {authStore}