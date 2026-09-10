import { Medicamento, mockMedicamentos } from "../../mocks/medicamento/medicamentosMock";

export function buscarMedicamentosService() {
    return {
        async search(query) {
            await new Promise((resolve) => setTimeout(resolve, 500)); //implementando o tempo de busca assíncrono para intercalar com a conexão do backend

            const termo = query.toLowerCase().trim();
            if (!termo) return []; 

            return mockMedicamentos.filter((med) => 
                med.nomeComum.toLowerCase().includes(termo) ||
                med.receitaMedicamento?.toLowerCase().includes(termo)
            );
        },
    };
}


export interface buscarMedicamentoInterface {
    search(query: string): Promise<Medicamento[]>
}