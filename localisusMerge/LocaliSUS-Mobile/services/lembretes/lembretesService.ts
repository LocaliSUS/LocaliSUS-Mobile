import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtualizarLembretePayload, CriarLembretePayload, Lembrete } from "./lembreteTypes";

const TOKEN_KEY = "@localisus:token";
const USUARIO_KEY = "@localisus:usuario";

export async function getLembretes(): Promise<Lembrete[]> {
    const { data } = await api.get<Lembrete[]>('/lembretes');
    return data;
}

export async function criarLembrete(payload: CriarLembretePayload): Promise<Lembrete>{
    const { data } = await api.post<Lembrete>('/lembretes/CriarLembrete', payload);
    return data;
}
export async function atualizarLembrete(
  id: number,
  payload: AtualizarLembretePayload
): Promise<Lembrete> {
  const { data } = await api.put<Lembrete>(`/lembretes/${id}`, payload);
  return data;
}
 
export async function excluirLembrete(id: number): Promise<void> {
  await api.delete(`/lembretes/${id}`);
}
 
