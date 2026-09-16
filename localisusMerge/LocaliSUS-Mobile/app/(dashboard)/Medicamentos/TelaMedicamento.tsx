import { CabecalhoHome } from "@/assets/componentesgenericos/cabecalho/CabecalhoHome";
import { TelaAzulClara } from "@/assets/componentesgenericos/telaAzul/telaAzulClara";
import BuscaMedicamento, { buscarMedicamentoService } from "@/assets/services/medicamentos/buscarMedicamentoService";
import { ListaMedicamentos } from "@/assets/componentestelas/elementosmedicamentoscreen/ListaMedicamento/listaMedicamentos";
import { medicamentosPopulares } from "@/assets/mocks/telaMedicamento/telaMedicamentoMocks";

const MedicamentoScreen = () => {
    const serviceBusca = buscarMedicamentoService();

    return (
        <>
            <CabecalhoHome>
                <BuscaMedicamento buscaService={serviceBusca} />
            </CabecalhoHome>
            <TelaAzulClara>
                <ListaMedicamentos medicamentos={medicamentosPopulares} />
            </TelaAzulClara>
        </>
    );
};

export default MedicamentoScreen;