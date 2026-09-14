import { PropsWithChildren } from "react"
import { View, Text, ImageSourcePropType, Image } from "react-native"
import {styles} from './labelMedicamentoTheme'
import { BotoesApp } from "../../../../presentation/components/BotoesApp"
import { RootStackParamList } from "../../../../../App"

export type LabelMedicamentoProps = {
    nomeRemedio: string,
    rotaRemedio?: keyof RootStackParamList,
    imagemRemedio?: ImageSourcePropType
}


export const LabelMedicamento = ({
    nomeRemedio,
    rotaRemedio,
    imagemRemedio
}: LabelMedicamentoProps) => {

    
    return(
        <>
            <View style={styles.labelMedicamentoStyle}>
                {
                    imagemRemedio && (
                        <Image
                            source={imagemRemedio}
                        />
                    )
                }
                <Text>{nomeRemedio}</Text>
                <BotoesApp style={styles.tamanhoBotaoLabel}
                    cor="#f9af"
                    texto="Encontrar"
                    />
            </View>
        </>
    )
}