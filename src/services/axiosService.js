import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjUxYmY3NjZkMDZhNzllMzlkYjRjMzA5ZTE1NWRiZSIsInN1YiI6IjYzZjBiYmQ0YTI0Yz' +
        'UwMDA3OGM4ODc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzOWT3utsTU1GpvdlDaxR_3E-sT70AvFZpmAeps2vNk'

    config.headers.Authorization = `Bearer ${apiKey}`

    return config
})

export {
    axiosService
}
