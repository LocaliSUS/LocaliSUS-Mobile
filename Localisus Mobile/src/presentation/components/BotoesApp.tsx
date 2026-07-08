import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { ImageSourcePropType } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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

export const BotoesApp = ({
    texto,
    cor
}: BotaoProps) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: cor,
            width: '40%',
            borderRadius: 20,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}