import {StyleSheet, ImageSourcePropType, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import vilaromana1 from "../../assets/img/vlromana.jpg"
import vilaromana2 from "../../assets/img/vlromana2.jpg"
import { ComponenteCard } from "./Card";

export interface hospitalImagemProps {
    id: number,
    img: ImageSourcePropType
}

const imagensHospital: hospitalImagemProps[] = [
    {
        id: 1,
        img: vilaromana1
    },

 
]


export const InfoHospitalScreen = () => {
    return(
        <>
            <View style={styles.backgroundInfo}>  
                <Swiper 
                    cards={imagensHospital}
                    cardIndex={0}
                    renderCard={(card) => {
                       if(!card) {
                        return "Não há nada aqui por enquanto"
                       }
                        return(
                            <ComponenteCard
                                id={card.id}
                                img={card.img}
                            />
                        )
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundInfo: {
        display: 'flex',
        alignItems: 'center',
        width: 10,
        height: 200,
        backgroundColor: "#ff0000ff"
    }
})