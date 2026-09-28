
import api from '@/services/api';
import { Medicamento } from '@/services/medicamentos/types';
import { EstoqueRepository } from './estoqueRepository';

export class EstoqueRepositoryApi implements EstoqueRepository {
  async listarPorHospital(hospitalId: number): Promise<Medicamento[]> {
    const { data } = await api.get<Medicamento[]>('/medicamentos', {
      params: { hospitalId },
    });
    return data;
  }
}