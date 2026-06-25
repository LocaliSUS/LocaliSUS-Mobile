import React from "react";
import { View } from "react-native";
import { CardProps, Cards, ComponenteCard } from "../../components/Card";
import { StyleSheet, Text } from "react-native";
import { styles } from './HomeScreenTheme'

const cardsHospitais: CardProps[] = [
    { id: 1, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "R. Martins Fontes, 208 - Centro Histórico de São Paulo", style: {width: 120}}
]

export const HomeScreen = () => {
    return(
        <>
        <View style={styles.visualizacaoTela}>
            <Cards></Cards>
            <Text style={styles.txtTelaHome}> Unidades Próximas
            </Text>
            {
                cardsHospitais.map(e => 
                    <ComponenteCard
                            key={e.id}
                            id={e.id}
                            titulo={e.titulo}
                            descricao={e.descricao}
                            style={e.style}
                    />
                )
            }
        </View>
        </>
    )
}

