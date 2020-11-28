// import decode from 'jwt-decode'
// import axios from 'axios'
// import router from '@/router'
import store from '@/store'

export function isLoggedIn() {
    let token = store.state.token || localStorage.getItem('token')
    return !!token
}