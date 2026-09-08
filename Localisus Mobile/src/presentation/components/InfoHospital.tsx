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
    height: DimensionValue,
    flex: number,
    tela?: keyof RootStackParamList
}



const infoHospitalButtons: BotaoInfoHospital[] = [
    {
        botaoId: 1,
        texto: "Ver Estoque",
        cor: "#fe9191ff",
        flex: 1,
        height: 150
    },
    {
        botaoId: 2,
        texto: "Ver Trajeto",
        cor: "#bbff99ff",
        flex: 2,
        height: 150
    }

]


const imagensHospital: ImageSourcePropType[] = [
    vilaromana1, vilaromana2
]


export const InfoHospitalScreen = () => {
     return (
         <><Swiper
             cards={imagensHospital}
             infinite={true}
             cardIndex={0}
             renderCard={(imagem) => {
                 if (!imagem) {
                     return <View />;
                 }
                 return (
                     <Image
                         source={imagem}
                         style={{
                             width: 300,
                             height: 200
                         }} />
                 );
             } } /><View style={styles.linhaBotoes}>
                 {infoHospitalButtons.map((item) => (
                     <ComponenteCard
                         key={item.botaoId}
                         style={{ flex: item.flex, height: item.height }}
                         id={item.botaoId}
                         titulo={item.texto}
                         cor={item.cor} />
                 ))}
             </View></>
    )
}

const styles = StyleSheet.create({
    linhaBotoes: {
        flexDirection: 'row',
        width: '100%',
        zIndex: 20,
        backgroundColor: "rgba(255, 255, 0, 1)"
    },
});
// const styles = StyleSheet.create({
//     cardHospitalImagemInfo: {
//         width: 285,
//         height: 200,
//         borderRadius: 15,
//         marginLeft: 35,
//         marginTop: 15
//     },
//     botoesInfoHospital: {
//         marginTop: 100,
//     }


// })