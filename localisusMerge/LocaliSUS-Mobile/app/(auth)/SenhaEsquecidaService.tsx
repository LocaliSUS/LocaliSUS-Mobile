import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

//componentes
import { COLORS } from "../../presentation/theme/AppTheme";
import { CustomTextInput } from "../../presentation/components/CustomTextInput";
//views models
import SenhaEsquecidaViewModel from '../../assets/services/senha/SenhaViewModel';


const SenhaEsquecidaScreen = () => {
    const router = useRouter();

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
                source={require("@/assets/img/tela-fundo.png")}
                style={styles.FundoImage}
            />

            {/* Card/image */}
            <Image
                source={require("@/assets/img/curva-superior.png")}
                style={styles.Cardtop}
            />
            <Image
                source={require("@/assets/img/curva-inferior.png")}
                style={styles.cardDow}
            />

            {/* Header */}
            <View style={styles.header}>
                <Image
                    style={styles.imageLogo}
                    source={require("@/assets/img/LocaliSUS-Logo-Fundo.png")}
                />
                <Text style={styles.textlogo}>LOCALISUS</Text>
            </View>

            {/* Escrita */}
            <View style={styles.footer}>
                <Text style={styles.title}>Recuperar Senha</Text>

                <CustomTextInput
                    style={{ position: 'absolute', top: -1 }}
                    image={require("@/assets/img/icone-numero.png")}
                    placeholder="Insira seu Numero de Telefone"
                    keyboardType="default"
                    secureTextEntry={false}
                    property="userPhone"
                    onChangeText={onChange}
                    value={userPhone}
                />

                <Pressable style={styles.cadastroButton}
                    onPress={() => router.push("CodigoVerificacao")}
                >
                    <Text style={styles.CadastroText}>Enviar Codigo</Text>
                </Pressable>

                <View style={styles.bottomIcons}>

                    <Pressable onPress={() => router.push('/')} style={styles.voltarButton}>
                        <Image
                            style={styles.voltarLogo}
                            source={require("@/assets/img/icon-voltar.png")}
                        />
                    </Pressable>

                    <Pressable>
                        <Text style={styles.help}>ⓘ Ajuda</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    );
};

export default SenhaEsquecidaScreen

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
        top: 530,
        right: -170,
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
        marginBottom: 125
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        gap: 1,
    },
    title: {
        marginBottom: 40,
        height: 45,
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
    },
    cadastroButton: {
        backgroundColor: COLORS.mintGreen,
        width: 235,
        height: 45,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 180,
        bottom: 80
    },
    CadastroText: {
        height: 30,
        color: "#000000ff",
        fontSize: 21,
        fontWeight: "bold",
    },
    help: {
        color: "#FFFFFF",
        fontSize: 25,
        margin: 5,
        marginRight: 8,
    },
    bottomIcons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingRight: 125,
        bottom: 80
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
