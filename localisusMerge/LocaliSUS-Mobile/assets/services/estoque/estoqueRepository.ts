
import { Medicamento } from '@/services/medicamentos/types';

export interface EstoqueRepository {
  listarPorHospital(hospitalId: number): Promise<Medicamento[]>;
}