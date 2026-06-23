import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { COLORS } from "../../theme/AppTheme";
import { RootStackParamList } from "../../../../App";
import { CustomTextInput } from "../../components/CustomTextInput";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
    const [form, setForm] = useState({
        cpf: "",
        senha: "",
    });

    const navigation = useNavigation<NavigationProp>();

    const handleChange = (property: string | undefined, value: any) => {
        if (!property) return;

        setForm({
            ...form,
            [property]: value,
        });
    };

    return (
        <View style={styles.container}>
            {/* Fundo */}
            <Image
                source={require("../../../../assets/img/tela-fundo.png")}
                style={styles.backgroundImage}
            />

            {/* Curvas */}
            <Image
                source={require("../../../../assets/img/curva-superior.png")}
                style={styles.topDetail}
            />

            <Image
                source={require("../../../../assets/img/curva-inferior.png")}
                style={styles.bottomDetail}
            />

            {/* Header */}
            <View style={styles.header}>
                <Image
                    style={styles.imageLogo}
                    source={require("../../../../assets/img/LocaliSUS-Logo-Fundo.png")}
                />

                <Text style={styles.logo}>
                    LOCALISUS
                </Text>
            </View>

            {/* Formulário */}
            <View style={styles.footer}>
                <Text style={styles.title}>
                    Entrar
                </Text>

                <CustomTextInput
                    image={require("../../../../assets/img/icon-cpf.png")}
                    placeholder="Insira seu CPF..."
                    value={form.cpf}
                    keyboardType="numeric"
                    property="cpf"
                    onChangeText={handleChange}
                />

                <CustomTextInput
                    image={require("../../../../assets/img/icon-senha.png")}
                    placeholder="Insira sua Senha..."
                    value={form.senha}
                    secureTextEntry={true}
                    property="senha"
                    onChangeText={handleChange}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                {/* Voltar + Ajuda */}
                <View style={styles.bottomIcons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Inicio")}
                    >
                        <Image
                            source={require("../../../../assets/img/icon-voltar.png")}
                            style={styles.bottomBack}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.help}>
                            ⓘ Ajuda
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkBlue
    },

    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },

    topDetail: {
        position: "absolute",
        width: 500,
        height: 279,
        top: -5, left: -49,
        resizeMode: "contain",


    },

    bottomDetail: {
        position: "absolute",
        width: 750,
        height: 590,
        bottom: -200,
        left: -172,
        resizeMode: "contain"
    },
    header: {
        flex: 1.4,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 300
    },
    imageLogo:
    {
        width: 110,
        height: 110,
        resizeMode: "contain"
    },
    logo: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 8
    },
    footer:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 90,
        gap: 5
    },
    title: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 29
    },

    loginButton: {
        backgroundColor: COLORS.mintGreen,
        width: 150,
        height: 25,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },

    loginText: {
        color: COLORS.darkBlue,
        fontWeight: "bold",
        fontSize: 15
    },

    help: {
        color: "#FFFFFF",
        fontSize: 18,
        marginTop: 5,
    },

    forgotPassword: {
        color: "#FFF",
        fontSize: 14,
        borderBottomColor: "#FFF",
        borderBottomWidth: 1
    },

    bottomIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingRight: 140,
    },
    bottomBack: {
        height: 55,
        paddingTop: 30,
        resizeMode: "contain"
    },
});