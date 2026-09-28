import { getMedicamentos } from '@/services/medicamentos/medicamentoService';

export interface MedicamentoBusca {
  id: string;
  nomeComum: string;
}

export interface BuscarMedicamentoInterface {
  search(query: string): Promise<MedicamentoBusca[]>;
}

export default function buscarMedicamentoService(): BuscarMedicamentoInterface {
  return {
    async search(query: string) {
      const termo = query.toLowerCase().trim();
      if (!termo) return [];

      try {
        const reais = await getMedicamentos();
        return reais
          .filter((m) => m.nomeMedicamento.toLowerCase().includes(termo))
          .map((m) => ({ id: String(m.idMedicamento), nomeComum: m.nomeMedicamento }));
      } catch (err) {
        console.warn('Falha ao buscar medicamentos reais, usando mock:', err);
        const { mockMedicamentos } = await import(
          '@/assets/mocks/Medicamentos/medicamento/medicamentosMock'
        );
        return mockMedicamentos
          .filter((m) => m.nomeComum.toLowerCase().includes(termo))
          .map((m) => ({ id: m.id, nomeComum: m.nomeComum }));
      }
    },
  };
}

;