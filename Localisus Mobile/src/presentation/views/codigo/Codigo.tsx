import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Button, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../../../../../src/presentation/theme/AppTheme";
import { RoundedButton } from "../../../../../src/presentation/components/RoudedButton";
import { CustomTextInput } from "../../../../../src/presentation/components/CustomTextInput";
//views models
import CodigoViewModel from './ViewModel';


export const CodigoScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const { userPhone, onChange, } = CodigoViewModel();

    const [form, setForm] = useState({ cpf: "", senha: "" });

    // código de verificação: 6 dígitos
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputsRef = useRef<Array<TextInput | null>>([]);

    const handleCodeChange = (text: string, index: number) => {
        const digit = text.replace(/[^0-9]/g, "").slice(-1);
        const newCode = [...code];
        newCode[index] = digit;
        setCode(newCode);
        if (digit && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

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
                <Text style={styles.title}>Confirme o Código Enviado</Text>

                {/* Entrada do código: 6 campos */}
                <View style={styles.codeContainer}>
                    {code.map((c, i) => (
                        <TextInput
                            key={i}
                            ref={ref => { inputsRef.current[i] = ref }}
                            value={c}
                            onChangeText={(text) => handleCodeChange(text, i)}
                            onKeyPress={(e) => handleKeyPress(e, i)}
                            keyboardType="number-pad"
                            maxLength={1}
                            autoFocus={i === 0}
                            style={styles.codeBox}
                            returnKeyType="done"
                            textAlign="center"
                        />
                    ))}
                </View>

                <Text style={styles.Codigo}>Reenviando Código? (1:00)</Text>

                <TouchableOpacity style={styles.confirmarButton}
                    onPress={() => navigation.navigate("InicioScreen")}
                >
                    <Text style={styles.CadastroText}>Confirmar</Text>
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
        top: 430,
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
        marginBottom: 60,
        height: 45,
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        bottom:0
        
    },

    confirmarButton: {
        backgroundColor: COLORS.vibrantPink,
        width: 150,
        height: 30,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop:130,
        bottom:80
    },
    Codigo:{    
            color: "#FFFFFF",
            fontSize: 17,
            margin: 5,
            marginRight: 8,
        },
    CadastroText:{
        height: 30,
        color: "#ffffffff",
        fontSize: 21,
        fontWeight: "bold",
        
    },
    help: {
        color: "#FFFFFF",
        fontSize: 25,
        margin: 5,
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
        bottom:80
    },
    voltarLogo: {
        width: 43,
        height: 47,
        

    },
    voltarButton: {
        marginLeft: 6,
        paddingRight: 70,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12,
    },
    codeBox: {
        width: 48,
        height: 56,
        backgroundColor: '#e9f3fb',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        color: COLORS.darkBlue,
    },
});
