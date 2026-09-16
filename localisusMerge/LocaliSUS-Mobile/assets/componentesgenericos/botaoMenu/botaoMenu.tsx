import { Image, TouchableOpacity } from "react-native";
import { styles } from './botaoMenuTheme'
import { PropsWithChildren } from "react";

export const BotaoMenu = ({children}: PropsWithChildren) => {
    return (
        <>
            {children}
        </>
    )

}