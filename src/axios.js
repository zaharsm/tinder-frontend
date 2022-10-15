import axios from "axios";

const instance = axios.create({
    baseURL:"https://zahar-tinder.herokuapp.com/"
})

export default instance;
