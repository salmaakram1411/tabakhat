import axios from "axios";

let token = localStorage.getItem("token");
export function setToken(value) {
    token = value;
}

function getToken() {
    return token
}

let axiosConfig = axios.create({
    baseURL: "http://localhost:4000/api/",
    headers: {
        authorization: getToken()
    }
});

export function updateAxiosConfig() {
    axiosConfig = axios.create({
        baseURL: "http://localhost:4000/api/",
        headers: {
            authorization: token
        }
    })
}

export default axiosConfig;