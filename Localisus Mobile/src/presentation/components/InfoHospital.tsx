import { StyleSheet, ImageSourcePropType, DimensionValue, View, Image, Text, FlatList } from "react-native";
import Swiper from "react-native-deck-swiper";
import vilaromana1 from "../../assets/img/vlromana.jpg"
import vilaromana2 from "../../assets/img/vlromana2.jpg"
import { RootStackParamList } from "../../../App";
import { ComponenteCard } from "./Card";
export type BotaoInfoHospital = {
    botaoId: number,
    texto: string,
    cor: string,
    tela?: keyof RootStackParamList
}



const infoHospitalButtons: BotaoInfoHospital[] = [
    {
        botaoId: 1,
        texto: "Ver Estoque",
        cor: "#fe9191ff"
    },
    {
        botaoId: 2,
        texto: "Ver Trajeto",
        cor: "#bbff99ff"
    }

]


const imagensHospital: ImageSourcePropType[] = [
    vilaromana1, vilaromana2
]


export const InfoHospitalScreen = () => {
    return (
        <View style={{ flex: 1 }}>
             <View style={styles.containerSwiper}>
                <Swiper
                    backgroundColor="transparent"
                    cardStyle={styles.estiloImagens}
                    cards={imagensHospital}
                    infinite={true}
                    cardIndex={0}
                    renderCard={(imagem) => {
                        if (!imagem) return <View />;
                        return (
                            <Image
                                source={imagem}
                                style={{ width: 300, height: 225 }}
                            />
                        );
                    }}
                /></View>

            <View style={styles.linhaBotoes}>
                {infoHospitalButtons.map((item) => (
                    <ComponenteCard
                    style={{width: "100%", height: 35}}
                        key={item.botaoId}
                        id={item.botaoId}
                        titulo={item.texto}
                        cor={item.cor}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerSwiper: { height: 250 },
    estiloImagens: {
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 20,
    },
    linhaBotoes: {
        alignItems: 'center',
        padding: 10,
        gap: 20,
        width: "50%",
        flexDirection: 'row',
        flex: 1,
        zIndex: 20
    },
});