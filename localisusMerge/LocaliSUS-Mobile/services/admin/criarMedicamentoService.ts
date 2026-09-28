import api from "../api";

export interface Medicamento {
  idMedicamento: number;
  nomeMedicamento: string;
  dosagem: number;
  quantidade: number;
  tipo: string;
}

export type CriarMedicamentoPayload = Omit<Medicamento, "idMedicamento">;

export async function criarMedicamento(
  payload: CriarMedicamentoPayload
): Promise<Medicamento> {
  const { data } = await api.post<Medicamento>(
    "/medicamentos/CriarMedicamento",
    payload
  );
  return data;
}