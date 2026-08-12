import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
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

            <View style={styles.bottomIcons}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.voltarButton}>
                    <Image
                        style={styles.voltarLogo}
                        source={require("../../../../assets/img/icon-voltar.png")}
                    />
                </TouchableOpacity>
                <View style={styles.txtTitulo}>
                    <Text style={styles.help}>Pesqusar por Remedios</Text>
                </View>
            </View>
                
{/* 
            <View style={styles.frm}>

            </View>

            <View style={styles.bntcont}>

            </View> */}

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
        height: '85%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    bntcont:{
        width: '100%',
        height: '18%',
        backgroundColor: COLORS.darkBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    bottomIcons: {
        marginTop: 0,
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
        marginLeft: 6,
        paddingRight: 70,
    },
    help: {
        color: "#FFFFFF",
        fontSize: 25,
        marginTop: 5,
        margin: 10,
    },
    txtTitulo:{
        
    },
})