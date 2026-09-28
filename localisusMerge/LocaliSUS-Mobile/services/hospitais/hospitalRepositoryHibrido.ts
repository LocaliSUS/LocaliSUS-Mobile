import { hospitaisMock } from '@/assets/mocks/Hospitais/hospitaisMock';
import { criarEstoqueRepository } from '@/assets/services/estoque/estoqueRepositoryFactory';
import { calcularStatusEstoque } from './calcularStatusEstoque';
import { HospitalRepository } from './hospitalRepository';
import { HospitalSus } from './types';

const normalizar = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export class HospitalRepositoryHibrido implements HospitalRepository {
  async listarTodos(medicamento?: string): Promise<HospitalSus[]> {
    // Criado aqui (e não no topo do arquivo) para respeitar a flag da factory
    const estoqueRepository = criarEstoqueRepository();

    return Promise.all(
      hospitaisMock.map(async (h) => {
        let itens = await estoqueRepository.listarPorHospital(h.id);

        if (medicamento) {
          const alvo = normalizar(medicamento);
          itens = itens.filter((m) => normalizar(m.nomeMedicamento) === alvo);
        }

        return { ...h, status: calcularStatusEstoque(itens) };
      })
    );
  }
}