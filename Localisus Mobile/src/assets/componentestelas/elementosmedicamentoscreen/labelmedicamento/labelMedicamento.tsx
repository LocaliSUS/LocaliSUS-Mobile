import { PropsWithChildren } from "react"
import { View, Text, ImageSourcePropType } from "react-native"
import {styles} from './labelMedicamentoTheme'
import { BotoesApp } from "../../../../presentation/components/BotoesApp"
import { RootStackParamList } from "../../../../../App"

export interface LabelProps{
    nomeRemedio: string,
    rotaRemedio?: RootStackParamList,
    imagemRemedio?: ImageSourcePropType
}

export const LabelMedicamento = ({children}: PropsWithChildren) => {
    return(
        <>
            <View style={styles.labelMedicamentoStyle}>
                {children}
                <BotoesApp style={styles.tamanhoBotaoLabel}
                    cor="#f9af"
                    texto="Encontrar"
                    />
            </View>
        </>
    )
}