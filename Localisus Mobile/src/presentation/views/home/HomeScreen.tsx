import React from "react";
import { CardProps, Cards, ComponenteCard } from "../../components/Card";
import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from "react-native";
import { styles } from './HomeScreenTheme'
import amegeraldopaulo from '../../imagens/amegeraldopaulo.jpg'
import hospitalsorocabana from '../../imagens/sorocab.png'
import { HorizontalDivider } from "../../components/Divider";

const { width: screenWidth } = Dimensions.get('window')

const cardsHospitais: CardProps[] = [
    { id: 1, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "R. Martins Fontes, 208 - Centro Histórico de São Paulo", style: { width: 520, height: 250 }, img: amegeraldopaulo },
    { id: 2, titulo: "Hospital Municipal Sorocabana", descricao: "R. Faustolo, 1633 - Lapa", style: { width: 520, height: 250 }, img: hospitalsorocabana }
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
                    <View style={styles.unidadesProximasCard}>
                        <FlatList
                            data={cardsHospitais}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{}}
                            renderItem={({ item }) => (
                                <ComponenteCard
                                    id={item.id}
                                    titulo={item.titulo}
                                    descricao={item.descricao}
                                    style={item.style}
                                    img={item.img}
                                />
                            )}
                        />

                    </View>
                </View>
            </ScrollView>

        </>
    )
}

