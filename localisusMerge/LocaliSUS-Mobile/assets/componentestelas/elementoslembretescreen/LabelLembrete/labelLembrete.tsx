import { ImageSourcePropType, View, Image, Text } from 'react-native'
import { styles } from './labelLembreteTheme'

export type Lembrete = {
    id: number;
    nomeRemedio: string;
    horarioRemedio: string;
    imagemRemedio?: ImageSourcePropType;
    intervaloRemedio: string;
    tipoRemedio: string;
    descricaoRemedio?: string;
}

export const LabelLembrete = ({
    nomeRemedio,
    horarioRemedio,
    imagemRemedio
}: Lembrete) => {
    const conteudoLembrete = (

        <View style={styles.labelLembreteStyle}>
            {imagemRemedio && (
                <Image source={imagemRemedio}
                    style={styles.styleImg}
                    resizeMode="contain" />
            )}
            {horarioRemedio && <Text>{horarioRemedio}</Text>}
            {nomeRemedio && <Text>{nomeRemedio}</Text>}
        </View>
    )

    return (
        <>
            {conteudoLembrete}
        </>
    )
}

