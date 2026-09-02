import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { BotaoInfoHospital, InfoHospitalScreen, } from "../../components/InfoHospital";
import { RootStackParamList } from "../../../../App";
import { ComponenteCard } from "../../components/Card";

const vilaRomanaButtons: BotaoInfoHospital[] = [
    {
        botaoId: 1,
        texto: "Ver Estoque",
        cor: "#ff0000ff"
    },
    {
        botaoId: 2,
        texto: "Ver Trajeto",
        cor: "#9dff00ff"
    }

]

export const VilaRomanaInfoScreen = () => {

    return (
        <>    <FlatList
            data={vilaRomanaButtons}
            keyExtractor={(item) => item.botaoId.toString()}
            renderItem={({ item }) => (
                <ComponenteCard
                    id={item.botaoId}
                    titulo={item.texto}
                    cor={item.cor}
                />
            )}
        />
            <InfoHospitalScreen />
          <View>
<Text style={styles.textosTelaInfoHospital}> UBS - Vila Romana </Text> {/* depois será necessário realizar uma modificação para o nome do hospital na tela em específico, fazer o mesmo para rua e também a descrição do hospital */}
                <Text> Rua Vespasiano, 679 - Vila Romana</Text>
                <Text> Descrição do hospital</Text>
          </View>
                
    

        </>

    )

}

const styles = StyleSheet.create({
    textosTelaInfoHospital: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 325, //realizar a centralização de forma correta
        zIndex: 2
    }
})