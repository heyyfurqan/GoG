import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: '74ae0a28ce80465fac3ec7f219d7ac7d'
        }
    }
)