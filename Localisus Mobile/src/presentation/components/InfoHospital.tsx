import {StyleSheet, ImageSourcePropType, View, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import vilaromana1 from "../../assets/img/vlromana.jpg"
import vilaromana2 from "../../assets/img/vlromana2.jpg"

const imagensHospital: ImageSourcePropType[] = [
        vilaromana1, vilaromana2
]


export const InfoHospitalScreen = () => {
    return(
        <>
            <View style={styles.backgroundInfo}>  
                <Swiper 
                    cards={imagensHospital}
                    infinite={true}
                    cardIndex={0}
                    renderCard={(imagem) => {
                       if(!imagem) {
                        return <View/>
                       }
                        return(
                            <Image
                                source={imagem}
                                style={{
                                    width: 300, 
                                    height: 200
                                }}
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