import React from "react";
import { ImageSourcePropType, View } from "react-native";
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

    { id: 2, img: vilaromana2 }
]


export const InfoHospitalScreen = () => {
    return(
        <>
            <View>  
                <Swiper 
                    cards={imagensHospital}
                    cardIndex={0}
                    renderCard={(card) => {
                        {
                            card ? card : <View />;
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