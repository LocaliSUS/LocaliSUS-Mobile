import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../../theme/AppTheme";
import { RoundedButton } from "../../components/RoudedButton";
import { CustomTextInput } from "../../components/CustomTextInput";
//views models
import SenhaEsquecidaViewModel from './ViewModel';


export const SenhaEsquecidaScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const { userPhone, onChange, } = SenhaEsquecidaViewModel();

    const [form, setForm] = useState({ cpf: "", senha: "" });

    const handleChange = (property: string | undefined, value: any) => {
        if (!property) return;
        setForm({ ...form, [property]: value });
    };

    return (
        <View style={styles.container}>

            {/* FUNDO PRINCIPAL */}
            <Image
                source={require("../../../../assets/img/tela-fundo.png")}
                style={styles.FundoImage}
            />

            {/* Card/image */}
            <Image
                source={require("../../../../assets/img/curva-superior.png")}
                style={styles.Cardtop}
            />
            <Image
                source={require("../../../../assets/img/curva-inferior.png")}
                style={styles.cardDow}
            />

            {/* Header */}
            <View style={styles.header}>
                <Image
                    style={styles.imageLogo}
                    source={require("../../../../assets/img/LocaliSUS-Logo-Fundo.png")}
                />
                <Text style={styles.textlogo}>LOCALISUS</Text>
            </View>

            {/* Escrita */}
            <View style={styles.footer}>
                <Text style={styles.title}>Recuperar Senha</Text>

                <CustomTextInput

                    image={require('../../../../assets/img/icone-numero.png')}
                    placeholder="Insira seu Numero de Telefone..."
                    keyboardType="default"
                    secureTextEntry={false}
                    property="userPhone"
                    onChangeText={onChange}
                    value={userPhone}

                />

                <TouchableOpacity style={styles.cadastroButton}
                    onPress={() => navigation.navigate("InicioScreen")}
                >
                    <Text style={styles.CadastroText}>Enviar Codigo</Text>
                </TouchableOpacity>

                <View style={styles.bottomIcons}>

                    <TouchableOpacity onPress={() => navigation.navigate('InicioScreen')} style={styles.voltarButton}>
                        <Image
                            style={styles.voltarLogo}
                            source={require("../../../../assets/img/icon-voltar.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.help}>ⓘ Ajuda</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkBlue,
    },

    FundoImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    Cardtop: {
        position: "absolute",
        width: 500,
        height: 300,
        top: -20,
        left: -49,
        resizeMode: "contain",
    },

    cardDow: {
        position: "absolute",
        width: 750,
        height: 610,
        bottom: -200,
        left: -172,
        resizeMode: "contain",
    },

    header: {
        flex: 1.4,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 240,
    },

    imageLogo: {
        width: 110,
        height: 110,
        resizeMode: "contain",
    },

    textlogo: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
    },

    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -30,
        gap: 12,
    },

    title: {
        marginTop: -120,
        height: 45,
        color: "#FFFFFF",
        fontSize: 38,
        fontWeight: "bold",
        
    },

    cadastroButton: {
        backgroundColor: COLORS.mintGreen,
        width: 235,
        height: 30,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 80,
    },
    CadastroText:{
        height: 30,
        color: "#000000ff",
        fontSize: 21,
        fontWeight: "bold",
    },
    help: {
        color: "#FFFFFF",
        fontSize: 25,
        marginTop: 5,
        marginRight: 8,
    },
    forgotPassword: {

    },
    bottomIcons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingRight: 125,
    },
    voltarLogo: {
        width: 43,
        height: 47,

    },
    voltarButton: {
        marginLeft: 6,
        paddingRight: 70,
    },
});
