import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput,  } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../../theme/AppTheme";
//views models


export const MedicamentoScreen= () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        // quando componentizar adicionar atributos de: tamanho, ícone e cor
        <View style={styles.container}>
                
                 <TouchableOpacity onPress={() => navigation.navigate('InicioScreen')} style={styles.bntMenuCont}>

                    <Image
                        style={styles.bntMenu}
                        source={require("../../../../assets/img/Menu.png")}
                    />

                 </TouchableOpacity>

                    <Text style={styles.txtTitulo}>Pesquisar por Remedios</Text>

            <View style={styles.inputContainer} >
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

            </View>

            <View style={styles.bntcont}>

            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    frm:{
        width: '100%',
        height: '82.1%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    bntcont:{
        width: '100%',
        height: '16%',
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
        paddingBottom:750,
    },
    voltarLogo: {
        width: 50,
        height: 56,
    },
    voltarButton: {
        marginRight:66,
        bottom:75,
    },
    txtTitulo: {
        top:30,
        height: 45,
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    inputContainer: {
        flexDirection:'row',
        alignItems: 'center',
        width: 370,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 22,
        top:30,
    },
    textInput:{
        fontSize: 19,
        color: '#333',
        alignSelf: 'flex-start',
        paddingTop:1,
        top:8,
        left:10,
        fontWeight:"bold",
    },
    imgLupa:{ 
        width: 21,
        height: 21, 
        marginLeft: 46, 
    },
    bntMenuCont:{      
        marginRight: 336,
        top:60,
    },
    bntMenu:{
        width: 75,
        height: 55,
    },
    
    
    
})