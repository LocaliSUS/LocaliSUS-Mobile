import { PropsWithChildren } from "react"
import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from "react-native"
import { Href } from "expo-router";
import { styles } from './labelMedicamentoTheme'


export type LabelMedicamentoProps = PropsWithChildren<{
    nomeRemedio?: string;
    rotaRemedio?: Href;
    imagemRemedio?: ImageSourcePropType;
}>;

export const LabelMedicamento = ({
    nomeRemedio,
    imagemRemedio,
    children
}: LabelMedicamentoProps) => {

    return (
        <>
            <View style={styles.labelMedicamentoStyle}>
                <Image
                style={styles.styleImg}
                    source={imagemRemedio}
                />
                <Text>{nomeRemedio}</Text>
            </View>
        </>
    )
}