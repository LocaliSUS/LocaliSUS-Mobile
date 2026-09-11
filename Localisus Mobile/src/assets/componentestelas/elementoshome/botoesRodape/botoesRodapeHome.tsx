import { FlatList } from "react-native"
import { RootStackParamList } from "../../../../../App"
import { BotoesApp } from "../../../../presentation/components/BotoesApp"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { styles } from './botoesRodapeHomeTheme'


type BotaoHome = {
    botaoId: number,
    texto: string,
    cor: string,
    tela?: keyof RootStackParamList
}

const botoesRodapeHome: BotaoHome[] = [
    { botaoId: 1, texto: "Remédios", cor: "#ffc4c4", tela: "MedicamentoScreen" },
    { botaoId: 2, texto: "Localização", cor: "#d8ffc4ff", tela: "LocalizacaoScreen" },
    { botaoId: 3, texto: "Lembretes", cor: "#fffdc4", tela: "PasswordForget" },
    { botaoId: 4, texto: "Ajuda", cor: "#ffffffff", tela: "Tela" },

]


export const BotoesRodape = () => {

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <FlatList
            data={botoesRodapeHome}
            keyExtractor={(item) => item.botaoId.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            columnWrapperStyle={{ justifyContent: 'space-evenly', width: '100%', marginBottom: 15 }}
            contentContainerStyle={styles.botoesRodapeHome}
            renderItem={({ item }) => (
                <BotoesApp
                    botaoId={item.botaoId}
                    texto={item.texto}
                    cor={item.cor}
                    onPress={() => navigation.navigate(item.tela)}
                />
            )}
        />

    )
}

