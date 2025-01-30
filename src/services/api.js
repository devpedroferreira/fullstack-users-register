import axios from "axios";

// control barra para dar as opcoes
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api