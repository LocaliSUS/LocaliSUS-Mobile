import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../../theme/AppTheme";
import { RoundedButton } from "../../components/RoudedButton";
import { CustomTextInput } from "../../components/CustomTextInput";
//views models
import cadastroViewModel from './ViewModel';

export const CadastroSusScreen = () => {

    const { userPassword, onChange,} = cadastroViewModel();

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
                    <Text style={styles.title}>cadastro</Text>

                    <CustomTextInput

                        image={require()}
                        placeholder="Digite sua senha..."
                        KeyboardType="default"
                        secureTextEntry={true}
                        property="userPassword"
                        onChangeText={onChange}
                        value={userPassword}
                    
                    />
    
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.cadastroText}>Cadastrar</Text>
                    </TouchableOpacity>
    
                    <View style={styles.bottomIcons}>
    
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
            top: 0,
            left: -49,
            resizeMode: "contain",
        },
    
        cardDow: {
            position: "absolute",
            width: 750,
            height: 630,
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
            marginTop: 8,
        },
    
        footer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           
            paddingTop: -10,
            gap: 12,
        },
    
        title: {
            marginTop:-375,
            height: 50,
            color: "#FFFFFF",
            fontSize: 40,
            fontWeight: "bold",
            
        },
    
        cadastroButton: {
            backgroundColor: COLORS.goldenYellow,
            width: 150,
            height: 25,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
    
        cadastroText: {
            color: COLORS.darkBlue,
            fontWeight: "bold",
            fontSize: 15,
        },
    
        help: {
            color: "#FFFFFF",
            fontSize: 18,
            marginTop: 5,
        },
        forgotPassword:{
    
        },
        bottomIcons:{
            
        },
    });
    