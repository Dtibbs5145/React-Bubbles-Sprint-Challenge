import axios from 'axios';

export const AxiosWAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            "Content-Type": 'application/json',
            "Authorization": token
        }
    })
}