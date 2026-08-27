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
            width: '40%',
            borderRadius: 20,
            height: 45,
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