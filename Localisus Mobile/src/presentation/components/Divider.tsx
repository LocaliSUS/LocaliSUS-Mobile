import React from "react";
import { View, DimensionValue } from 'react-native'

interface DividerProps {
    cor?: string;
    espessura?: number;
    largura?: DimensionValue;
}

export const HorizontalDivider = ({
    cor = '#05064bff',
    espessura=  1.5,
    largura = '80%'
}: DividerProps) => {
    return (
        <View 
            style={{
                height: espessura,
                backgroundColor: cor,
                width: largura,
                alignSelf: 'center'
            }} 
        />
    );
}