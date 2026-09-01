import React from "react";
import { FlatList, Text } from "react-native";
import { BotaoInfoHospital, InfoHospitalScreen,  } from "../../components/InfoHospital";
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

    return(
       <>    <FlatList
                data={vilaRomanaButtons}
                keyExtractor={(item) => item.botaoId.toString()}
                renderItem={({item}) => (
                    <ComponenteCard
                        id={item.botaoId}
                        titulo={item.texto}
                        cor={item.cor}
                    />
                )}
            />
            <InfoHospitalScreen/>
        
       </>
       
    )
    
}