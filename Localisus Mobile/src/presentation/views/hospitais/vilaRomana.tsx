import React from "react";
import { FlatList, Text } from "react-native";
import { BotaoInfoHospital, InfoHospitalScreen,  } from "../../components/InfoHospital";
import { RootStackParamList } from "../../../../App";

const vilaRomanaButtons: BotaoInfoHospital = [
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

    return(
       <>
            <InfoHospitalScreen/>
            <FlatList
                data={vilaRomanaButtons}
            />
       </>
       
    )
    
}