import { Medicamento } from '@/services/medicamentos/types';
import { EstoqueRepository } from './estoqueRepository';
import { estoqueMock } from '@/assets/mocks/Medicamentos/estoque/estoqueMock'; // ajuste o caminho

// Cópia em memória: permite alterar quantidades em tempo de teste
let estoque: Medicamento[] = estoqueMock.map((m) => ({ ...m }));

export const definirQuantidadeMock = (
  hospitalId: number,
  nome: string,
  quantidade: number
) => {
  estoque = estoque.map((m) =>
    m.hospitalId === hospitalId && m.nomeMedicamento === nome
      ? { ...m, quantidade }
      : m
  );
};

export class EstoqueRepositoryMock implements EstoqueRepository {
  async listarPorHospital(hospitalId: number): Promise<Medicamento[]> {
    return estoque.filter((m) => m.hospitalId === hospitalId);
  }
}