import { StyleSheet, ImageSourcePropType, View, Image, Text, FlatList } from "react-native";
import Swiper from "react-native-deck-swiper";
import vilaromana1 from "../../assets/img/vlromana.jpg"
import vilaromana2 from "../../assets/img/vlromana2.jpg"
import { RootStackParamList } from "../../../App";

export type BotaoInfoHospital = {
        botaoId: number, 
        texto: string,
        cor: string,
        tela?: keyof RootStackParamList
}

const imagensHospital: ImageSourcePropType[] = [
    vilaromana1, vilaromana2
]


export const InfoHospitalScreen = () => {
    return (
        <>
            <View style={styles.backgroundInfoHospital}>
                <Swiper
                    cards={imagensHospital}
                    infinite={true}
                    cardIndex={0}
                    renderCard={(imagem) => {
                        if (!imagem) {
                            return <View />
                        }
                        return (
                            <Image
                                source={imagem}
                                style={styles.cardHospitalImagemInfo}
                            />
                        )
                    }}
                />
                 <Text style={styles.textosTelaInfoHospital}> UBS - Vila Romana </Text> {/* depois será necessário realizar uma modificação para o nome do hospital na tela em específico, fazer o mesmo para rua e também a descrição do hospital */}
                 <Text> Rua Vespasiano, 679 - Vila Romana</Text>
                 <Text> Descrição do hospital</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundInfoHospital: {
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: "#ff0000ff",
        borderRadius: 10
    },

    cardHospitalImagemInfo: {
        width: 285,
        height: 200,
        borderRadius: 15,
        marginLeft: 35,
        marginTop: 15
    },
    textosTelaInfoHospital: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 325, //realizar a centralização de forma correta
        zIndex: 2
    }
})