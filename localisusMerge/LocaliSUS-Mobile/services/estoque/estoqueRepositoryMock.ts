import { Medicamento } from '@/services/medicamentos/types';
import { EstoqueRepository } from '@/assets/services/estoque/estoqueRepository';
import { estoqueMock } from '@/assets/mocks/Medicamentos/estoque/estoqueMock';

export class EstoqueRepositoryMock implements EstoqueRepository {
  async listarPorHospital(hospitalId: number): Promise<Medicamento[]> {
    return estoqueMock.filter((m) => m.hospitalId === hospitalId);
  }
}