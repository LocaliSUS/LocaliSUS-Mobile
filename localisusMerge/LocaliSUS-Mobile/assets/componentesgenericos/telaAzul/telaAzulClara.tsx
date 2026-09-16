import { PropsWithChildren } from "react"
import { View } from "react-native"
import {styles} from './telaAzulClaraTheme'

export const TelaAzulClara = ({children}: PropsWithChildren) => {
    return(
        <>
        <View style={styles.visualizacaoTela}>
            {children}
        </View>
        </>
    )
}

