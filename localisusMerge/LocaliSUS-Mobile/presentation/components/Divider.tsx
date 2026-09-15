import React from "react";
import { View, DimensionValue } from 'react-native'

interface DividerProps {
    cor?: string;
    espessura?: number;
    largura?: DimensionValue;
}

export const HorizontalDivider = ({
    cor = '#1b1b34ff',
    espessura=  1.5,
    largura = '95%',
}: DividerProps) => {
    return (
        <View 
            style={{
                height: espessura,
                backgroundColor: cor,
                width: largura,
                alignSelf: 'center',
                boxShadow:  '0px 4px 10px 1px rgba(4, 0, 255, 0.15)'
            }} 
        />
    );
}