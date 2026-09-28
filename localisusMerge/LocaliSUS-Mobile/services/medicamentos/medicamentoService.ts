  import api from '../api';
import { Medicamento, CriarMedicamentoPayload } from './types';

export async function getMedicamentos(): Promise<Medicamento[]> {
  const { data } = await api.get<Medicamento[]>('/medicamentos');
  return data;
}

export async function getMedicamentoById(id: number): Promise<Medicamento> {
  const { data } = await api.get<Medicamento>(`/medicamentos/${id}`);
  return data;
}

export async function criarMedicamento(payload: CriarMedicamentoPayload): Promise<Medicamento> {
  const { data } = await api.post<Medicamento>('/medicamentos/CriarMedicamento', payload);
  return data;
}