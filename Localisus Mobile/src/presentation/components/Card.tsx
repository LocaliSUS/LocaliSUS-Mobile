import React, { ReactNode } from "react";
import { View, Text, ViewStyle, StyleProp, ImageSourcePropType, Image} from "react-native";
import {styles} from "../theme/CardTheme"
import Swiper from "react-native-deck-swiper";

export interface CardProps {
    id: number,
    titulo: string,
    descricao: string,
    cor?: string,
    style?: StyleProp<ViewStyle>,
    children?: ReactNode,
    img?: ImageSourcePropType
}

const elementosCard: CardProps[] = [
    { id: 1, titulo: "Descarte impróprio de remédios", descricao: "Aprenda a descartar corretamente seus medicamentos os levando a unidade de saúde próxima.", cor: "#74BF8A" },
    { id: 2, titulo: "Verifique a validade dos medicamentos", descricao: "Antes de usar, confira sempre a data de validade e descarte seus medicamentos vencidos de forma segura.", cor: "#5b8cdbff" },
    { id: 3, titulo: "Remova rótulos e dados pessoais", descricao: "Antes de descartar, retire rótulos com seus dados pessoais das embalagens para proteger a sua privacidade.", cor: "#F0C55A" },
    { id: 4, titulo: "Mantenha fora do alcance de crianças", descricao: "Guarde os medicamentos em locais seguros e altos, longe do alcance de crianças e animais de estimação.", cor: "#9577c5ff" },
    { id: 5, titulo: "Contribua para o meio ambiente", descricao: "O descarte correto evita a contaminação do solo e da água, protegendo o meio ambiente e a saúde da comunidade.", cor: "#12d3d3ff" }
]

export function ComponenteCard({
    titulo,
    cor,
    style,
    img,
    descricao,
    children
}: CardProps) {
    return (
        <View style={[styles.cardsContainer, {backgroundColor: cor}, style]}>
            <Text style={styles.txtTitulo}>{titulo}</Text>
             {img && (
                <Image 
                    source={img}
                    style={{ width: 275, height: 150, borderRadius: 5, position: 'absolute', zIndex: -1}} 
                    resizeMode="cover"
                />
            )}
            <Text style={styles.txtDescricao}>{descricao} </Text>
            {children}
        </View>
    )
}


export const Cards = () => {
    return (
        <>
        <View style={styles.swiperWrapper}>
            <Swiper
                cards={elementosCard}
                cardIndex={0}
                renderCard={( card ) => {
                    {card ? card : <View/>}
                return (
                    <ComponenteCard 
                        id={card.id}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        cor={card.cor}
                    />
                )
                }}
                   onSwiped={(cardIndex) => console.log("Card arrastado:", cardIndex)}
            onSwipedAll={() => console.log("Todos cards visualizados")}
            backgroundColor="transparent"
            stackSize={3}
            stackSeparation={10}
            animateCardOpacity
            cardVerticalMargin={20}
            cardHorizontalMargin={20}
            containerStyle={styles.containerSwiper}
      />
        </View>
        {/* <View style={{height: 10}}>   
            <Swiper
                cards={elementosCard}
                renderCard={(card) => {
                    return (
                        <ComponenteCard
                            id={card.id}
                            titulo={card.titulo}
                            descricao={card.descricao}
                            cor={card.cor}                        />
                    )
                }}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                containerStyle={{ flex: 0, height: 10}}
                onSwiped={(cardIndex) => { console.log("Card: ", cardIndex, " arrastado")}}
                onSwipedAll={() => {console.log("Todos cards visualizados")}}
                cardIndex={0}
                backgroundColor="transparent"
                stackSize={3}
                stackSeparation={10}
                infinite={true}
                animateCardOpacity={true}
            />
        </View> */}
             <View style={styles.card}>
                {
                    elementosCard.map(e =>
                        <ComponenteCard
                            key={e.id}
                            id={e.id}
                            titulo={e.titulo}
                            descricao={e.descricao}
                            cor={e.cor}
                        />
                    )
                }
            </View> 
        </>
    )
}