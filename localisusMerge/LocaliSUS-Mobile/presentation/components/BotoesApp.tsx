import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { ImageSourcePropType } from "react-native";
import { TouchableOpacityProps } from "react-native";

export interface BotaoProps extends TouchableOpacityProps {
    botaoId?: number
    texto: string
    cor?: string
    onPress?: () => void
    children?: ReactNode
    img?: ImageSourcePropType
}

export function ComponenteBotao({
    texto,
    cor,
}: BotaoProps) {
    return (
        <View style={[{ backgroundColor: cor }]}>
            <Text>{texto}</Text>
        </View>
    )
}

export const BotoesApp = ({
    texto,
    cor,
    ...rest
}: BotaoProps) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: cor,
            width: '45%',
            borderRadius: 18,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',

        }}
            {...rest}
            activeOpacity={0.6}

        >
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}