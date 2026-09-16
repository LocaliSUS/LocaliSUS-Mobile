
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { CabecalhoHome } from "@/assets/componentesgenericos/cabecalho/CabecalhoHome";
import { TelaAzulClara } from "@/assets/componentesgenericos/telaAzul/telaAzulClara";
import BuscaMedicamento, { buscarMedicamentoService } from "@/assets/services/medicamentos/buscarMedicamentoService";

const MedicamentoScreen = () => {
    const router = useRouter();
    const serviceBusca = buscarMedicamentoService();

    return (
        <>
            <CabecalhoHome>
                <BuscaMedicamento buscaService={serviceBusca} />
            </CabecalhoHome>
            <TelaAzulClara></TelaAzulClara>
            <TouchableOpacity onPress={() => router.push('/medicamentos')}>
            </TouchableOpacity>

        </>
    )
}
export default MedicamentoScreen;
