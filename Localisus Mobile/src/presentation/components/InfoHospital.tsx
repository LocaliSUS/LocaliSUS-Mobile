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
    flex: number,
    tela?: keyof RootStackParamList
}



const infoHospitalButtons: BotaoInfoHospital[] = [
    {
        botaoId: 1,
        texto: "Ver Estoque",
        cor: "#fe9191ff",
        flex: 1,
    },
    {
        botaoId: 2,
        texto: "Ver Trajeto",
        cor: "#bbff99ff",
        flex: 1
    }

]


const imagensHospital: ImageSourcePropType[] = [
    vilaromana1, vilaromana2
]


// export const InfoHospitalScreen = () => {
//     return (
//         <>
//             <View style={{ flex: 1 }}>
//                 <Swiper
//                     backgroundColor="transparent"
//                     cardStyle={styles.estiloImagens}
//                     cards={imagensHospital}
//                     infinite={true}
//                     cardIndex={0}
//                     renderCard={(imagem) => {
//                         if (!imagem) {
//                             return <View />;
//                         }
//                         return (
//                             <Image
//                                 source={imagem}
//                                 style={{
//                                     width: 300,
//                                     height: 225
//                                 }} />
//                         );
//                     }} />
//                 <View style={styles.linhaBotoes}>
//                     {infoHospitalButtons.map((item) => (
//                         <ComponenteCard
//                             key={item.botaoId}
//                             style={{ flex: item.flex }}
//                             id={item.botaoId}
//                             titulo={item.texto}
//                             cor={item.cor} />
//                     ))}
//                 </View>
//             </View>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     estiloImagens: {
//         marginTop: 50,
//         display: 'flex',
//         alignItems: 'center',
//         borderRadius: 20
//     },
//     linhaBotoes: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         width: '100%',
//         height: '10%',
//         backgroundColor: '#ff0011ff',
//         zIndex: 2

//     },
// });

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
                        key={item.botaoId}
                        style={{ flex: item.flex }}
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 20,
        gap: 20, height: 75
    },
});