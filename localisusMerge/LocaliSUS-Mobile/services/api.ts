import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@localisus:token";

const api = axios.create({
    baseURL: "https://localisus-backend.onrender.com/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Anexa o token JWT em toda requisição, se existir
api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Trata token expirado/inválido (401) e loga erros de forma útil
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response) {
            console.log("Erro da API:", error.response.status, error.response.data);

            if (error.response.status === 401) {
                await AsyncStorage.removeItem(TOKEN_KEY);
                // aqui depois dá pra disparar navegação pra tela de login,
                // ex: via um evento global ou contexto de auth
            }
        } else if (error.request) {
            console.log("Sem resposta do servidor:", error.message);
        } else {
            console.log("Erro ao montar a requisição:", error.message);
        }
        return Promise.reject(error);
    }
);

export default api;