import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})

axiosClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem('ACCESS_TOKEN')
    // config.headers.Authorization = Bearer `${token}`
    if(token) {
        config.headers.Authorization = Bearer `${token}`
    }
    return config;
})

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        
        try {

            const {reponse} = error;
            if (reponse.status === 401) {
                localStorage.removeItem('ACCESS_TOKEN')
            }
            
        } catch (e) {
            console.log(e);
        }

        throw error;
    }
)


export default axiosClient;