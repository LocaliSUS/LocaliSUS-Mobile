import React from "react";
import { TelaInicio } from '../../../assets/componentestelas/inicio/ComponenteInicio'
import { CardProps, CardsSwipper, ComponenteCard } from "../../components/Card";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, StyleProp, ViewStyle, ImageSourcePropType } from "react-native";
import { RootStackParamList } from "../../../../App";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from './HomeScreenTheme'
import amegeraldopaulo from '../../imagens/amegeraldopaulo.jpg'
import hospitalsorocabana from '../../imagens/sorocab.png'
import { HorizontalDivider } from "../../components/Divider";
import { CabecalhoHome } from "../../../assets/componentestelas/elementoshome/cabecalho/CabecalhoHome";
import { RodapeHome } from "../../../assets/componentestelas/elementoshome/rodape/RodapeHome";
import {  BotoesApp } from "../../components/BotoesApp";

type hospitalCard = {
    id: number,
    titulo: string,
    descricao: string,
    img?: ImageSourcePropType,
    style?: StyleProp<ViewStyle>;
    infoHospital: keyof RootStackParamList
}

type BotaoHome = {
    botaoId: number, 
    texto: string,
    cor: string,
    tela?: keyof RootStackParamList
}

const cardsHospitais: hospitalCard[] = [
    { id: 1, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "R. Martins Fontes, 208 - Centro Histórico de São Paulo",  img: amegeraldopaulo, infoHospital: "VilaRomanaScreen"  },
    { id: 2, titulo: "Hospital Municipal Sorocabana", descricao: "R. Faustolo, 1633 - Lapa", img: hospitalsorocabana, infoHospital: "VilaRomanaScreen" }
]


const botoesRodapeHome: BotaoHome[] = [
    { botaoId: 1, texto: "Remédios", cor: "#ffc4c4", tela: "MedicamentoScreen" },
    { botaoId: 2, texto: "Localização", cor: "#fffdc4", tela: "LocalizacaoScreen"},
    { botaoId: 3, texto: "Lembretes", cor: "#d8ffc4ff", tela: "PasswordForget" },
    { botaoId: 4, texto: "Ajuda", cor: "#ffffffff", tela: "Tela" },

]

export const HomeScreen = () => {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
                                onPress={() => navigation.navigate(item.infoHospital)}
                            />
                        )}
                    />
                </View>
            </View>
            <RodapeHome>
              <FlatList
                    data={botoesRodapeHome}
                    keyExtractor={(item) => item.botaoId.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    horizontal={false}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', width: '100%', marginBottom: 15}}
                    contentContainerStyle={styles.botoesRodapeHome}
                    renderItem={({ item }) => (
                        <BotoesApp
                            botaoId={item.botaoId}
                            texto={item.texto}
                            cor={item.cor}
                            onPress={() => navigation.navigate(item.tela)}
                        />
                    )}  
              />
              
            </RodapeHome>
        </>
    )
}

