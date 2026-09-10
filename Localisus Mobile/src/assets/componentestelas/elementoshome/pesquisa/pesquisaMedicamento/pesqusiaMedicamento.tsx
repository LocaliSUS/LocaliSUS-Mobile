import { Medicamento } from "../../../../mocks/medicamento/medicamentosMock";
import { buscarMedicamentoInterface } from "../../../../services/medicamentos/buscarMedicamentoService";

export default function pesquisaMedicamento( 
    mockData: Medicamento[],
    delay: number = 400
): buscarMedicamentoInterface {
    return {
        async search(query: string): Promise<Medicamento[]> {
            await new Promise((resolve) => setTimeout(resolve, delay));

            const termo = query.toLowerCase().trim();
            if (!termo) return [];

            return mockData.filter(
                (med) => 
                    med.nomeComum.toLowerCase().includes(termo)
            )
        }
    }
}