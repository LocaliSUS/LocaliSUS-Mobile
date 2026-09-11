import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../theme/AppTheme";
import { TelaAzulClara } from "../../../assets/componentesgenericos/telaAzulClara";
import { CabecalhoHome } from "../../../assets/componentestelas/elementoshome/cabecalho/CabecalhoHome";
import BuscaMedicamento from "../testeBuscaMedicamento/testeBuscaMedicamento";
import { buscarMedicamentosService } from "../../../assets/services/medicamentos/buscarMedicamentoService";
import { BotoesRodape } from "../../../assets/componentestelas/elementoshome/botoesRodape/botoesRodapeHome";
import { RodapeHome } from "../../../assets/componentestelas/elementoshome/rodape/RodapeHome";

export const MedicamentoScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const serviceBusca = buscarMedicamentosService();

    return (
        <>
            <CabecalhoHome>
                <Text> Pesquisar por Remédios </Text>
                <BuscaMedicamento buscaService={serviceBusca} />
            </CabecalhoHome>
            <TelaAzulClara>
                <Text> Medicamentos Populares</Text>
                <RodapeHome>
                    <BotoesRodape/>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    frm: {
        width: '100%',
        height: '82.1%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        alignItems: 'center',
    },
    bntcont: {
        width: '100%',
        height: '19%',
        backgroundColor: COLORS.darkBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    bottomIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 450,
        paddingBottom: 750,
    },
    voltarLogo: {
        width: 50,
        height: 56,
    },
    voltarButton: {
        marginRight: 66,
        bottom: 75,
    },
    txtTitulo: {
        top: 30,
        height: 45,
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 22,
        top: 30,
    },
    textInput: {
        fontSize: 19,
        color: '#333',
        alignSelf: 'flex-start',
        paddingTop: 1,
        top: 8,
        left: 10,
        fontWeight: "bold",
    },
    imgLupa: {
        width: 21,
        height: 21,
        marginLeft: 46,
    },
    bntMenuCont: {
        marginRight: 336,
        top: 60,
    },
    bntMenu: {
        width: 75,
        height: 55,
    },
    txtAnalgesico: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    caixaDipirona: {
        width: '100%',
        height: '23%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 530,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        padding: 20,
        borderWidth: 1,
    },
    caixaIbuprofeno: {
        width: '100%',
        height: '23%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 358,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        padding: 20,
        borderWidth: 1,
    },
    caixaCaptopril: {
        width: '100%',
        height: '23%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 186,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        padding: 20,
        borderWidth: 1,
    },
    txtEncontrar: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        left: 15,
        bottom: 11,
    },
    imgcapsula: {
        width: 21,
        height: 21,
        marginRight: 74,
        top: 12,
    },
    imgStar: {
        width: 33,
        height: 38,
        top: 2,
    },
    txtDipirona: {
        width: 200,
        height: 50,
        bottom: 134,
        fontWeight: "bold",
        fontSize: 34,
        right: 13,
    },
    imgDipirona: {
        width: 170,
        height: 170,
        right: 30,
        bottom: 80,
        resizeMode: 'contain',
        opacity: 0.5, // Altere de 0.0 a 1.0 para ajustar o nível da transparência
    },
    txtinfor: {
        bottom: 280,
        width: 230,
        height: 100,
        left: 140,
        fontSize: 12.3,
    },
    txtIbuprofeno: {
        width: 200,
        height: 50,
        bottom: 134,
        fontWeight: "bold",
        fontSize: 28,
        right: 13,
    },
    bntRemedios: {
        bottom: 8,
        right: 11,
    },
    bntLembretes: {
        right: 11,
    },
    bntLocalizacao: {
        bottom: 114,
        left: 190,
    },
    bntAjuda: {
        bottom: 106,
        left: 190,
    },
    imgcapsularemedios: {
        width: 33,
        height: 33,
        right: 65,
    },
    imgMap: {
        width: 39,
        height: 35,
        right: 65,
    },
    imgRelogio: {
        width: 32,
        height: 35,
        right: 65,
    },
    imgponto: {
        width: 35,
        height: 35,
        right: 65,
    },
    txtRemedios: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 23,
        left: 60,
        bottom: 13,
        position: 'absolute'
    },
    txtLembretes: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22,
        left: 60,
        bottom: 13,
        position: 'absolute'
    },
    txtLocalizacao: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        left: 60,
        bottom: 13,
        position: 'absolute'
    },
    txtAjuda: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 23,
        left: 80,
        bottom: 12,
        position: 'absolute'
    },
    gradientOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
    },
});