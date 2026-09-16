import { Image } from "react-native";
import { styles } from './botaoMenuTheme'
import { PropsWithChildren } from "react";

export const BotaoMenu = ({children}: PropsWithChildren) => {
    return (
        <>
            <Image
                style={styles.bntMenu}
                source={require("@/assets/img/Menu.png")}
            />
            {children}
        </>
    )

}