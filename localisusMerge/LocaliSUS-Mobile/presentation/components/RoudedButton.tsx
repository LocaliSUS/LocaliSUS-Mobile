//Cria um arquivo para componente de botões
//local: src/components/RoundedButton.tsx
import React from "react";
import { StyleSheet, Pressable, ViewStyle, StyleProp } from "react-native";
import { COLORS } from "../theme/AppTheme";

interface Props {
    children: React.ReactNode;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}

export const RoundedButton = ({
    children,
    onPress,
    backgroundColor = COLORS.darkBlue,
    textColor = COLORS.lightBlue,
    width = 200,
    height = 50,
    style
}: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.btn, { backgroundColor, width, height }, style]}
        >
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 25,
        alignItems: "center",
        fontWeight: "bold",
        justifyContent: "center",
    },
    txtBnt: {
        color: COLORS.lightBlue,
        fontWeight: 'bold',
        fontSize: 16,
    },
});