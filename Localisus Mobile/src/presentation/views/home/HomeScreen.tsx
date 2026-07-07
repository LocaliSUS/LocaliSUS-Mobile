import React from "react";
import { TelaInicio } from '../../../assets/componentestelas/inicio/ComponenteInicio'
import { CardProps, CardsSwipper, ComponenteCard } from "../../components/Card";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { styles } from './HomeScreenTheme'
import amegeraldopaulo from '../../imagens/amegeraldopaulo.jpg'
import hospitalsorocabana from '../../imagens/sorocab.png'
import { HorizontalDivider } from "../../components/Divider";
import { CabecalhoHome } from "../../../assets/componentestelas/elementoshome/cabecalho/CabecalhoHome";
import { RodapeHome } from "../../../assets/componentestelas/elementoshome/rodape/RodapeHome";
import { BotaoProps, BotoesApp } from "../../components/BotoesApp";

const cardsHospitais: CardProps[] = [
    { id: 1, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "R. Martins Fontes, 208 - Centro Histórico de São Paulo", style: { width: "40%", height: 200, }, img: amegeraldopaulo },
    { id: 2, titulo: "Hospital Municipal Sorocabana", descricao: "R. Faustolo, 1633 - Lapa", style: { width: "40%", height: 200, marginLeft: "25%" }, img: hospitalsorocabana }
]


const botoesRodapeHome: BotaoProps[] = [
    { id: 1, texto: "Remédios", cor: "#ffc4c4" },
    { id: 2, texto: "Localização", cor: "#fffdc4" },
    { id: 3, texto: "Lembretes", cor: "#d8ffc4ff" },
    { id: 4, texto: "Ajuda", cor: "#ffffffff" },

]

export const HomeScreen = () => {
    return (
        <>

            <CabecalhoHome></CabecalhoHome>
            <View style={styles.visualizacaoTela}>
                <CardsSwipper></CardsSwipper> 

                <HorizontalDivider></HorizontalDivider>
                <Text style={styles.txtTelaHome}> Unidades Próximas
                </Text>
                <View style={styles.unidadesProximasCard}>
                    <FlatList
                        data={cardsHospitais}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
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
            <RodapeHome>
              <FlatList
                    data={botoesRodapeHome}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={true}
                    numColumns={2}
                    horizontal={false}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', width: '100%', marginBottom: 15}}
                    contentContainerStyle={styles.botoesRodapeHome}
                    renderItem={({ item }) => (
                        <BotoesApp
                            id={item.id}
                            texto={item.texto}
                            cor={item.cor}
                        />
                    )}  
              />
            </RodapeHome>
        </>
    )
}

