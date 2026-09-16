import { CardsSwipper, ComponenteCard } from "@/presentation/components/Card";
import { Text, View, FlatList, StyleProp, ViewStyle, ImageSourcePropType } from "react-native";
import { styles } from '@/presentation/theme/HomeScreenTheme'
import amegeraldopaulo from '@/assets/img/hospitaisImg/amegeraldopaulo.jpg'
import hospitalsorocabana from '@/assets/img/hospitaisImg/sorocab.png'
import ubsvilaromana from '@/assets/img/hospitaisImg/vilaromanaubs.jpg'
import { HorizontalDivider } from "@/presentation/components/Divider";
import { CabecalhoHome } from "@/assets/componentesgenericos/cabecalho/CabecalhoHome";
import { RodapeHome } from "@/assets/componentestelas/elementoshome/rodape/RodapeHome";
import { BotoesApp } from "@/presentation/components/BotoesApp";
import { Href, useRouter } from "expo-router";
import { BotaoMenu } from "@/assets/componentesgenericos/botaoMenu/botaoMenu";

type hospitalCard = {
    id: number,
    titulo: string,
    descricao: string,
    img?: ImageSourcePropType,
    style?: StyleProp<ViewStyle>;
    infoHospital?: Href
}

type BotaoHome = {
    botaoId: number,
    texto: string,
    cor: string,
    tela?: Href
}

    const cardsHospitais: hospitalCard[] = [
        { id: 1, titulo: "UBS Vila Romana", descricao: "Há 5 minutos de distância", img: ubsvilaromana, infoHospital: "/hospitais/vilaRomana" },
    { id: 2, titulo: "Hospital Municipal Sorocabana", descricao: "Há 10 minutos de distância", img: hospitalsorocabana, infoHospital: "VilaRomanaScreen" },
    { id: 3, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "Há 10 minutos de distância", img: amegeraldopaulo, infoHospital: "/hospitais/ameGeraldo" },
    { id: 4, titulo: "Por enquanto é só isso", descricao: "Deseja buscar por mais hospitais?" }
]


const botoesRodapeHome: BotaoHome[] = [
    { botaoId: 1, texto: "Remédios", cor: "#ffc4c4", tela: "/Medicamentos/TelaMedicamento" },
    { botaoId: 2, texto: "Localização", cor: "#d8ffc4ff", tela: "/Mapa/MapaSus" },
    { botaoId: 3, texto: "Lembretes", cor: "#fffdc4", tela: "/Lembretes/LembretesScreen" },
    { botaoId: 4, texto: "Ajuda", cor: "#ffffffff", tela: "Tela" },

]

const HomeScreen = () => {
    const router = useRouter()
    return (
        <>
            <CabecalhoHome>
                <BotaoMenu/>
            </CabecalhoHome>
            <View style={styles.visualizacaoTela}>
                <CardsSwipper></CardsSwipper>
                <HorizontalDivider></HorizontalDivider>
                <Text style={styles.txtTelaHome}> Unidades Próximas
                </Text>
                <View style={styles.unidadesProximasCard}>
                    <FlatList
                        style={styles.cardsImagemHospital}
                        data={cardsHospitais}
                        contentContainerStyle={{ gap: 96, marginLeft: 75, zIndex: 50 }} 
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <ComponenteCard
                                id={item.id}
                                titulo={item.titulo}
                                descricao={item.descricao}
                                style={item.style}
                                img={item.img}
                                onPress={() => router.push(item.infoHospital)}
                            />
                        )}
                    />
                </View>
            </View>
            <RodapeHome>
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
                            onPress={() => router.push(item.tela)}
                        />
                    )}
                />

            </RodapeHome>
        </>
    )
}

export default HomeScreen

