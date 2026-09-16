import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from "react-native"
import { Href, useRouter } from "expo-router";
import { styles } from './labelMedicamentoTheme'

export type LabelMedicamentoProps = {
    nomeRemedio?: string;
    rotaRemedio?: Href;
    imagemRemedio?: ImageSourcePropType;
    descricaoRemedio?: string;
    categoria?: 'Analgésicos' | 'Antibioticos' | 'Diuréticos' | 'Estatinas';
    favoritado?: boolean;
};

export const LabelMedicamento = ({
    nomeRemedio,
    imagemRemedio,
    rotaRemedio,
}: LabelMedicamentoProps) => {
    const router = useRouter();

    const conteudo = (
        <View style={styles.labelMedicamentoStyle}>
            {imagemRemedio && (
                <Image source={imagemRemedio} style={styles.styleImg} resizeMode="contain" />
            )}
            {nomeRemedio && <Text>{nomeRemedio}</Text>}
        </View>
    );

    if (!rotaRemedio) return conteudo;

    return (
        <TouchableOpacity onPress={() => router.push(rotaRemedio)}>
            {conteudo}
        </TouchableOpacity>
    );
};