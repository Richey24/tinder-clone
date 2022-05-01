import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend233.herokuapp.com'
})

export default instance