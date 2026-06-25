import React from "react";
import { CardProps, Cards, ComponenteCard } from "../../components/Card";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { styles } from './HomeScreenTheme'
import amegeraldopaulo from '../../imagens/amegeraldopaulo.jpg'
import { HorizontalDivider } from "../../components/Divider";

const { width: screenWidth } = Dimensions.get('window')

const cardsHospitais: CardProps[] = [
    { id: 1, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "R. Martins Fontes, 208 - Centro Histórico de São Paulo", style: { width: 520, height: 250 }, img: amegeraldopaulo }
]

export const HomeScreen = () => {
    return (
        <>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.visualizacaoTela}>
                    <Cards></Cards>
                    
                    <HorizontalDivider></HorizontalDivider>
                    
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
                                img={e.img}
                            />
                        )
                    }
                </View>
            </ScrollView>

        </>
    )
}

