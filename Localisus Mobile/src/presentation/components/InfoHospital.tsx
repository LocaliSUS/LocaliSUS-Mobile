import { StyleSheet, ImageSourcePropType, View, Image, Text, FlatList } from "react-native";
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
        cor: "#ffc4c4"
    },
    {
        botaoId: 2,
        texto: "Ver Trajeto",
        cor: "#d8ffc4ff"
    }

]


const imagensHospital: ImageSourcePropType[] = [
    vilaromana1, vilaromana2
]


export const InfoHospitalScreen = () => {
    return (
        <>
        <View style={{ backgroundColor: "#ffff"}}>
            
                {/* <Swiper
                    cardStyle={styles.cardHospitalImagemInfo}
                    cards={imagensHospital}
                    infinite={true}
                    cardIndex={0}
                    renderCard={(imagem) => {
                        return (
                            <Image
                                source={imagem}
                                style={styles.cardHospitalImagemInfo}
                            />
                        )
                    }}
                /> */}
                {/*<Text> UBS - Vila Romana </Text>  depois será necessário realizar uma modificação para o nome do hospital na tela em específico, fazer o mesmo para rua e também a descrição do hospital 
            <Text> Rua Vespasiano, 679 - Vila Romana</Text>
            <Text> Descrição do hospital</Text>*/}

                <FlatList
                    data={infoHospitalButtons}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', width: 10 }}
                    keyExtractor={(item) => item.botaoId.toString()}
                    renderItem={({ item }) => (
                        <ComponenteCard
                            style={styles.botoesInfoHospital}
                            id={item.botaoId}
                            titulo={item.texto}
                            cor={item.cor}
                        />
                    )}
                />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardHospitalImagemInfo: {
        width: 285,
        height: 200,
        borderRadius: 15,
        marginLeft: 35,
        marginTop: 15
    },
    botoesInfoHospital: {
        marginTop: 725,
        height:120,
        width: 10
    }


})