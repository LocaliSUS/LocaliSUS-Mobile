export function buscarMedicamentosService() {
    return {
        async search(query) {
            await new Promise((resolve) => setTimeout(resolve, 500)); //implementando o tempo de busca assíncrono para intercalar com a conexão do backend

            const termo = query.toLowerCase().trim();
            if (!termo) return []; 

            return mockMedicamentosData.filter((med) => 
                med.naome.toLowerCase().includes(termo) ||
                med.receitaMedicamento?.toLowerCase().includes(termo)
            );
        },
    };
}

