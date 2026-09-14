import { PropsWithChildren } from "react"
import { View } from "react-native"
import {styles} from './labelMedicamentoTheme'

export const LabelMedicamento = ({children}: PropsWithChildren) => {
    return(
        <>
            <View style={styles.labelMedicamentoStyle}>
                {children}
            </View>
        </>
    )
}