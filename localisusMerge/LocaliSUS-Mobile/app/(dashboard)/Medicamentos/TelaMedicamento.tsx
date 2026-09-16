
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

import { CabecalhoHome } from "@/assets/componentesgenericos/cabecalho/CabecalhoHome";
import { TelaAzulClara } from "@/assets/componentesgenericos/telaAzul/telaAzulClara";
import BuscaMedicamento, { buscarMedicamentoService } from "@/assets/services/medicamentos/buscarMedicamentoService";
import { LabelMedicamento } from "@/assets/componentestelas/elementosmedicamentoscreen/labelMedicamento";
import { medicamentosPopulares } from "@/assets/mocks/telaMedicamento/telaMedicamentoMocks";

const MedicamentoScreen = () => {
    const router = useRouter();
    const serviceBusca = buscarMedicamentoService();

    return (
        <>
            <CabecalhoHome>
                <BuscaMedicamento buscaService={serviceBusca} />
            </CabecalhoHome>
            <TelaAzulClara>
                <LabelMedicamento >
                    <FlatList
                        data={medicamentosPopulares}
                        keyExtractor={(item) => item.nomeRemedio}
                        renderItem={({ item }) => (
                            <LabelMedicamento
                                nomeRemedio={item.nomeRemedio}
                                imagemRemedio={item.imagemRemedio}
                                rotaRemedio={item.rotaRemedio}
                            />
                        )}
                    />
                </LabelMedicamento>

            </TelaAzulClara>

        </>
    )
}
export default MedicamentoScreen;
