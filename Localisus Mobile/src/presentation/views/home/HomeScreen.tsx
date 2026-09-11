import {  CardsSwipper, ComponenteCard } from "../../components/Card";
import {  Text, View, FlatList, StyleProp, ViewStyle, ImageSourcePropType } from "react-native";
import { RootStackParamList } from "../../../../App";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from './HomeScreenTheme'
import amegeraldopaulo from '../../imagens/amegeraldopaulo.jpg'
import hospitalsorocabana from '../../imagens/sorocab.png'
import ubsvilaromana from '../../imagens/vilaromanaubs.jpg'
import { HorizontalDivider } from "../../components/Divider";
import { CabecalhoHome } from "../../../assets/componentestelas/elementoshome/cabecalho/CabecalhoHome";
import { RodapeHome } from "../../../assets/componentestelas/elementoshome/rodape/RodapeHome";
import { BotoesRodape } from "../../../assets/componentestelas/elementoshome/botoesRodape/botoesRodapeHome";

type hospitalCard = {
    id: number,
    titulo: string,
    descricao: string,
    img?: ImageSourcePropType,
    style?: StyleProp<ViewStyle>;
    infoHospital?: keyof RootStackParamList
}


const cardsHospitais: hospitalCard[] = [
    { id: 1, titulo: "UBS Vila Romana", descricao: "Há 5 minutos de distância", img: ubsvilaromana, infoHospital: "VilaRomanaScreen" },
    { id: 2, titulo: "Hospital Municipal Sorocabana", descricao: "Há 10 minutos de distância", img: hospitalsorocabana, infoHospital: "VilaRomanaScreen" },
    { id: 3, titulo: "AME - Dr. Geraldo Paulo Bourrol", descricao: "Há 10 minutos de distância", img: amegeraldopaulo, infoHospital: "VilaRomanaScreen" },
    { id: 4, titulo: "Por enquanto é só isso", descricao: "Deseja buscar por mais hospitais?" }
 ]
 
export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <>
            <CabecalhoHome></CabecalhoHome>
            <View style={styles.visualizacaoTela}>
                <CardsSwipper></CardsSwipper>
                <HorizontalDivider></HorizontalDivider>
                <Text style={styles.txtTelaHome}> Unidades Próximas
                </Text>
                <View style={styles.unidadesProximasCard}>
                    <FlatList
                        style={styles.cardsImagemHospital}
                        data={cardsHospitais}
                        contentContainerStyle={{ gap: 96, marginLeft: 75, zIndex: 50 }} //as alterações de estilo dentro de contentcontainerstyle realiza modificações para os cards de unidades próximas, a distância entre o AME Geraldo Paul e o Hospital Sorocabana deve ser analisada 
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
                                onPress={() => navigation.navigate(item.infoHospital)}
                            />
                        )}
                    />
                </View>
            </View>
            <RodapeHome>    
                    <BotoesRodape></BotoesRodape>
            </RodapeHome>
        </>
    )
}

