import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { ImageSourcePropType } from "react-native";
import { TouchableOpacityProps } from "react-native";
import { VoidExpression } from "typescript";
import { RootStackParamList } from "../../../App";

export interface BotaoProps extends TouchableOpacityProps {
    botaoId?: number //nome foi alterado devido à um conflito existente entre a palavra reservada id para touchable opacity props;
    texto: string
    cor?: string
    onPress?: () => void
    children?: ReactNode
    img?: ImageSourcePropType
    tela?: keyof RootStackParamList
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
    onPress,
    ...rest //agora implementamos o rest permitindo que venham se espalhar as diferentes alterações que fizermos para os elementos do componente, permitindo que todo o componente tenha sua própria estilização
}: BotaoProps) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: cor,
            width: '40%',
            borderRadius: 20,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        activeOpacity={0.6}
         {...rest}
            onPress={onPress}
        
        >
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}