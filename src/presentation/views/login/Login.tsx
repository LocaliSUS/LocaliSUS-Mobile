import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { COLORS } from "../../theme/AppTheme";
import { CustomTextInput } from "../../components/CustomTextInput";
import { RoundedButton } from "../../components/RoudedButton";

export const LoginScreen = () => {
    const [form, setForm] = useState({ cpf: "", senha: "" });
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleChange = (property: string | undefined, value: any) => {
        if (!property) return;
        setForm({ ...form, [property]: value });
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
                <Text style={styles.logo}>LOCALISUS</Text>
            </View>

            {/* Formulário */}
            <View style={styles.footer}>
                <Text style={styles.title}>Entrar</Text>

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
                    secureTextEntry
                    property="senha"
                    onChangeText={handleChange}
                />

                {/* Esqueci minha senha */}
                <RoundedButton
                    onPress={() => navigation.navigate('SenhaEsquecidaScreen')}
                    backgroundColor="transparent" width={200} height={30}>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </RoundedButton>

                {/* Entrar */}
                <RoundedButton
                    onPress={() => navigation.navigate("InicioScreen")}
                    backgroundColor={COLORS.mintGreen} width={90} height={25}>
                    <Text style={styles.loginText}>Entrar</Text>
                </RoundedButton>

                {/* Voltar + Ajuda */}
                <View style={styles.bottomIcons}>
                    <RoundedButton
                        onPress={() => navigation.goBack()}
                        backgroundColor="COLORS.darkBlue" width={90} height={60}>
                        <Image
                            source={require("../../../../assets/img/icon-voltar.png")}
                            style={styles.bottomBack}
                        />
                    </RoundedButton>

                    <RoundedButton onPress={() => console.log("Ajuda")}
                        backgroundColor="transparent"
                        width={100} height={50}>
                        <Text style={styles.help}>ⓘ Ajuda</Text>
                    </RoundedButton>
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
    loginText: {
        color: COLORS.darkBlue,
        fontWeight: "bold",
        fontSize: 15
    },
    forgotPassword: {
        color: "#FFF",
        fontSize: 14,
        borderBottomColor: "#FFF",
        borderBottomWidth: 1
    },
    help: {
        color: "#FFF",
        fontSize: 18,
        marginTop: 5
    },
    bottomIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 155,
        alignItems: "center",
        width: "100%"
    },
    bottomBack: {
        height: 55,
        paddingTop: 30,
        resizeMode: "contain"
    },
});
