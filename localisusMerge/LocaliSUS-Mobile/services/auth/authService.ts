import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@localisus:token";
const USUARIO_KEY = "@localisus:usuario";

export type TipoUsuario = 
| "Administrador"
| "Funcionario"
| "Usuario";

export interface LoginPayload {
  cpf: string;
  senha: string;
}

export interface UsuarioLogado {
  usuarioNome: string;
  tipo: TipoUsuario;
  hospitalId: number | null;
}

export interface LoginResponse extends UsuarioLogado {
  message: string;
  token: string;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", payload);

  await AsyncStorage.setItem(TOKEN_KEY, data.token);
  await AsyncStorage.setItem(
    USUARIO_KEY,
    JSON.stringify({
      usuarioNome: data.usuarioNome,
      tipo: data.tipo,
      hospitalId: data.hospitalId,
    })
  );

  return data;
}

export async function logout(): Promise<void> {
  await AsyncStorage.multiRemove([TOKEN_KEY, USUARIO_KEY]);
}

export async function getToken(): Promise<string | null> {
  return AsyncStorage.getItem(TOKEN_KEY);
}

export async function getUsuario(): Promise<UsuarioLogado | null> {
  const raw = await AsyncStorage.getItem(USUARIO_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getToken();
  return !!token;
}