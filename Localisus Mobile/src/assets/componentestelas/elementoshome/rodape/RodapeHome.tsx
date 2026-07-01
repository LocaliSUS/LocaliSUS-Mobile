import React, { Children, PropsWithChildren } from "react";
import { styles } from './RodapeHomeTheme'
import { View, Text } from "react-native";
import { BotoesApp } from "../../../../presentation/components/BotoesApp";

export const RodapeHome = ({children}: PropsWithChildren) => {
    return (
        <View style={styles.rodape}>
            {children}
        </View>
    )

}