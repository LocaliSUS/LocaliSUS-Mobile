import { useMemo } from "react";
import buscarMedicamentoService from "@/assets/services/medicamentos/buscarMedicamentoService";
import {BuscarMedicamento} from "@/assets/componentestelas/elementosmedicamentoscreen/BuscarMedicamento/buscarMedicamento"; 
import { ListaMedicamentos } from "@/assets/componentestelas/elementosmedicamentoscreen/ListaMedicamento/listaMedicamentos";
import { medicamentosPopulares } from "@/assets/mocks/Medicamentos/telaMedicamento/telaMedicamentoMocks";
import { CabecalhoCustomizavel } from "@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel";
import { TelaAzulClara } from "@/assets/componentesgenericos/telaAzul/telaAzulClara";

const MedicamentoScreen = () => {
  const serviceBusca = useMemo(() => buscarMedicamentoService(), []);

  return (
    <>
      <CabecalhoCustomizavel title="Pesquisar por Remédios" showBackButton>
        <BuscarMedicamento buscaService={serviceBusca} />
      </CabecalhoCustomizavel>
      <TelaAzulClara>
        <ListaMedicamentos medicamentos={medicamentosPopulares} />
      </TelaAzulClara>
    </>
  );
};

export default MedicamentoScreen;