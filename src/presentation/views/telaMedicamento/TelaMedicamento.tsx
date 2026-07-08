import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

//componentes
import { COLORS } from "../../theme/AppTheme";
import { RoundedButton } from "../../components/RoudedButton";

export const MedicamentoScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('InicioScreen')} style={styles.bntMenuCont}>
                <Image
                    style={styles.bntMenu}
                    source={require("../../../../assets/img/Menu.png")}
                />
            </TouchableOpacity>

            <Text style={styles.txtTitulo}>Pesquisar por Remedios</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Buscar por algum medicamento..."
                    style={styles.textInput}
                />
                <Image
                    source={require("../../../../assets/img/icon-lupa.png")}
                    style={styles.imgLupa}
                />
            </View>

            <View style={styles.bottomIcons}>
                <TouchableOpacity onPress={() => navigation.navigate('InicioScreen')} style={styles.voltarButton}>
                    <Image
                        style={styles.voltarLogo}
                        source={require("../../../../assets/img/icon-voltar.png")}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.frm}>
                <View style={{ right: 150 }}>
                    <View style={{ flexDirection: 'row', left: 10, gap: 10, bottom: 4 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#7be6b4ff">
                            <Text style={styles.txtAnalgesico}> Analgesico </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 105, gap: 10, bottom: 26 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={87} height={22} backgroundColor="#FFFDC4">
                            <Text style={styles.txtAnalgesico}> Antibioticos </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 200, gap: 10, bottom: 48 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#D9D9D9">
                            <Text style={styles.txtAnalgesico}> Diuréticos </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 290, gap: 10, bottom: 70 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#FFC4C4">
                            <Text style={styles.txtAnalgesico}> Estatinas </Text>
                        </RoundedButton>
                    </View>
                </View>

                {/* CAIXA DIPIRONA - Imagem alterada aqui */}
                <View style={styles.caixaDipirona}>
                    <View style={{ left: 228, top: 100 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                            <Image source={require("../../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ left: 187, top: 70 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                            <Image source={require("../../../../assets/img/star.png")} style={styles.imgStar} />
                        </RoundedButton>
                    </View>

                    {/* Mudado de styles.imgDipirona para styles.imgDipironaComTransparencia */}
                    <Image 
                        source={require("../../../../assets/img/Dipirona.png")}
                        style={styles.imgDipirona} 
                    />

                    <Text style={styles.txtDipirona}> Dipirona </Text>

                    <Text style={styles.txtinfor}>
                        dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
                    </Text>
                </View>

                {/* CAIXA IBUPROFENO */}
                <View style={styles.caixaIbuprofeno}>
                    <View style={{ left: 228, top: 100 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                            <Image source={require("../../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ left: 187, top: 70 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                            <Image source={require("../../../../assets/img/star.png")} style={styles.imgStar} />
                        </RoundedButton>
                    </View>

                    <Image source={require("../../../../assets/img/Dipirona.png")} style={styles.imgDipirona} />
                    <Text style={styles.txtIbuprofeno}> Ibuprofeno </Text>
                    <Text style={styles.txtinfor}>
                        dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
                    </Text>
                </View>

                {/* CAIXA CAPTOPRIL */}
                <View style={styles.caixaCaptopril}>
                    <View style={{ left: 228, top: 100 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                            <Image source={require("../../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ left: 187, top: 70 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                            <Image source={require("../../../../assets/img/star.png")} style={styles.imgStar} />
                        </RoundedButton>
                    </View>
                    
                    <View>
                        <Image source={require("../../../../assets/img/Dipirona.png")} style={styles.imgDipirona} />
                        <LinearGradient
                            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                            style={styles.gradientOverlay}
                        />
                    </View>

                    <Text style={styles.txtDipirona}> Captopril </Text>
                    <Text style={styles.txtinfor}>
                        dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
                    </Text>
                </View>
            </View>

            {/* BOTÕES DE NAVEGAÇÃO INFERIOR */}
            <View style={styles.bntcont}>
                <View style={styles.bntRemedios}>
                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#FFC4C4">
                        <Image source={require("../../../../assets/img/capsula.png")} style={styles.imgcapsularemedios} />
                        <Text style={styles.txtRemedios}> Remédios </Text>
                    </RoundedButton>
                </View>

                <View style={styles.bntLembretes}>
                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#FFFDC4">
                        <Image source={require("../../../../assets/img/Relogio.png")} style={styles.imgRelogio} />
                        <Text style={styles.txtLembretes}> Lembretes </Text>
                    </RoundedButton>
                </View>

                <View style={styles.bntLocalizacao}>
                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#C4FFE3">
                        <Image source={require("../../../../assets/img/Mapa.png")} style={styles.imgMap} />
                        <Text style={styles.txtLocalizacao}> Localização </Text>
                    </RoundedButton>
                </View>

                <View style={styles.bntAjuda}>
                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#EBF9FF">
                        <Image source={require("../../../../assets/img/Ajuda.png")} style={styles.imgponto} />
                        <Text style={styles.txtAjuda}> Ajuda </Text>
                    </RoundedButton>
                </View>
            </View>
        </View>
    );
};

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