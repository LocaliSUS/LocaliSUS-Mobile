import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { styles } from './telaMedicamentoTheme'
import { COLORS } from "../../theme/AppTheme";
import { TelaAzulClara } from "../../../assets/componentesgenericos/telaAzulClara";
import { CabecalhoHome } from "../../../assets/componentestelas/elementoshome/cabecalho/CabecalhoHome";
import BuscaMedicamento from "../testeBuscaMedicamento/testeBuscaMedicamento";
import { buscarMedicamentosService } from "../../../assets/services/medicamentos/buscarMedicamentoService";
import { BotoesRodape } from "../../../assets/componentestelas/elementoshome/botoesRodape/botoesRodapeHome";
import { RodapeHome } from "../../../assets/componentestelas/elementoshome/rodape/RodapeHome";
import { LabelMedicamento } from "../../../assets/componentestelas/elementosmedicamentoscreen/labelmedicamento/labelMedicamento";


export const MedicamentoScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const serviceBusca = buscarMedicamentosService();

    return (
        <>
            <CabecalhoHome>
                <Text style={styles.pesquisaMedicamentoText}> Pesquisar por Remédios </Text>
                <BuscaMedicamento buscaService={serviceBusca} />
            </CabecalhoHome>
            <TelaAzulClara>
                    <Text> Medicamentos Populares</Text>
                    <LabelMedicamento/>
                <RodapeHome>
                    <BotoesRodape />
                </RodapeHome>
            </TelaAzulClara>

        </>
    );
};




// <View style={styles.container}>
//     <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.bntMenuCont}>
//         <Image
//             style={styles.bntMenu}
//             source={require("../../../assets/img/Menu.png")}
//         />
//     </TouchableOpacity>

//     <Text style={styles.txtTitulo}>Pesquisar por Remedios</Text>

//     <View style={styles.inputContainer}>
//         <TextInput
//             placeholder="Buscar por algum medicamento..."
//             style={styles.textInput}
//         />
//         <Image
//             source={require("../../../assets/img/icon-lupa.png")}
//             style={styles.imgLupa}
//         />
//     </View>

//     <View style={styles.bottomIcons}>
//         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.voltarButton}>
//             <Image
//                 style={styles.voltarLogo}
//                 source={require("../../../assets/img/icon-voltar.png")}
//             />
//         </TouchableOpacity>
//     </View> <Image
//                 source={require("../../../assets/img/Dipirona.png")}
//                 style={styles.imgDipirona}
//             />

//             <Text style={styles.txtDipirona}> Dipirona </Text>

//             <Text style={styles.txtinfor}>
//                 dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
//             </Text>
//         </View>   

