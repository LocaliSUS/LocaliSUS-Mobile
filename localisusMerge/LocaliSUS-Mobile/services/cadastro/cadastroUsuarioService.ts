import api from '../api';
import { Usuario, CriarUsuarioPayload } from './types';

export async function getUsuarios(): Promise<Usuario[]> {
  const { data } = await api.get<Usuario[]>('/usuarios');
  return data;
}

export async function getUsuarioById(id: number): Promise<Usuario> {
  const { data } = await api.get<Usuario>(`/usuarios/${id}`);
  return data;
}

export async function criarUsuario(payload: CriarUsuarioPayload): Promise<Usuario> {
  const { data } = await api.post<Usuario>('/usuarios/CriarUsuario', payload);
  return data;
}