import { StyleSheet, ImageSourcePropType, View, Image, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import { router, Href } from "expo-router";
import { ComponenteCard } from "./Card";
import { COLORS } from "../theme/AppTheme";

export type BotaoInfoHospital = {
    botaoId: number;
    texto: string;
    cor: string;
    tela?: Href;
};

interface InfoHospitalScreenProps {
    nomeHospital: string;
    hospitalId: number;
    descricao?: string;
    imagens: ImageSourcePropType[];
}

export const InfoHospitalScreen = ({
    nomeHospital,
    hospitalId,
    descricao,
    imagens,
}: InfoHospitalScreenProps) => {

    const listaImagens = imagens ?? [];

    const infoHospitalButtons: BotaoInfoHospital[] = [
        {
            botaoId: 1,
            texto: "Ver Estoque",
            cor: "#fe9191ff",
            tela: {
                pathname: "/hospitais/EstoqueHospitalScreen",
                params: { hospitalId: String(hospitalId), hospital: nomeHospital },
            } as Href,
        },
        {
            botaoId: 2,
            texto: "Ver Trajeto",
            cor: "#bbff99ff",
            tela: {
                pathname: "/MapaSus",
                params: { hospitalId: String(hospitalId), hospital: nomeHospital },
            } as Href,
        },
    ];

    return (
        <View style={{ height: "100%", backgroundColor: COLORS.darkBlue}}>
            <View style={styles.containerSwiper}>
                <Swiper
                    backgroundColor="transparent"
                    cardStyle={styles.estiloImagens}
                    cards={listaImagens}
                    infinite={true}
                    cardIndex={0}
                    renderCard={(imagem) => {
                        if (!imagem) return <View />;
                        return (
                            <Image
                                source={imagem}
                                style={{ width: 300, height: 225, borderRadius: 10 }}
                            />
                        );
                    }}
                />
            </View>

            {descricao && <Text style={styles.descricao}>{descricao}</Text>}

            <View style={styles.linhaBotoes}>
                {infoHospitalButtons.map((item) => (
                    <ComponenteCard
                        style={{ width: "100%", height: 35, alignItems: 'center', justifyContent: 'center' }}
                        key={item.botaoId}
                        id={item.botaoId}
                        titulo={item.texto}
                        cor={item.cor}
                        onPress={() => item.tela && router.push(item.tela)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerSwiper: { height: 250 },
    estiloImagens: {
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 20,
    },
    descricao: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 18,
    },
    linhaBotoes: {
        alignItems: 'center',
        padding: 10,
        gap: 20,
        width: "50%",
        flexDirection: 'row',
        flex: 1,
        zIndex: 20
    },
});