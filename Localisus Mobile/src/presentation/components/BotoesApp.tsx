import React, { ReactNode } from "react";
import { View, Text } from 'react-native'
import { ImageSourcePropType } from "react-native";

export interface BotaoProps {
    id: number
    texto: string
    cor?: string
    children?: ReactNode
    img?: ImageSourcePropType
}

export function ComponenteBotao({
    texto,
    cor
}: BotaoProps) {
    return (
        <View style={[{ backgroundColor: cor }]}>
            <Text>{texto}</Text>
        </View>
    )
}

export const BotoesApp =({
    texto,
    cor
}: BotaoProps) => { 
    return(
        <View style={{ backgroundColor: cor}}>
            <Text>{texto}</Text>
        </View>
    )}