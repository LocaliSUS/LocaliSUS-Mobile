//Cria um arquivo para componente de botões
//local: src/components/RoundedButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/AppTheme";

interface Props {
    children: React.ReactNode;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
    icon?: string;
}

export const RoundedButton = ({
    children,
    onPress,
    backgroundColor = COLORS.darkBlue,
    textColor = COLORS.lightBlue,
    width = 200,
    height = 50,
    icon
}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, { backgroundColor, width, height, icon }]}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 25,
        alignItems: "center",
        fontWeight: "bold",
        justifyContent: "center",

    },
    txtBnt:{
        color: COLORS.lightBlue,
        fontWeight: 'bold',
        fontSize: 16,
    },
});