export interface Medicamento {
  idMedicamento: number;
  nomeMedicamento: string;
  dosagem: string;
  quantidade: number;
  hospitalId?: number;
}

export interface CriarMedicamentoPayload {
  nomeMedicamento: string;
  dosagem: string;
  quantidade: number;
  hospitalId: number;
}