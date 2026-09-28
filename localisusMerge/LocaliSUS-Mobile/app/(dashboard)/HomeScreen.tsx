import { CardsSwipper, ComponenteCard } from "@/presentation/components/Card";
import {
  Text,
  View,
  FlatList,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "@/presentation/theme/HomeScreenTheme";
import amegeraldopaulo from "@/assets/img/hospitaisImg/amegeraldopaulo.jpg";
import hospitalsorocabana from "@/assets/img/hospitaisImg/sorocab.png";
import ubsvilaromana from "@/assets/img/hospitaisImg/vilaromanaubs.jpg";
import { HorizontalDivider } from "@/presentation/components/Divider";
import { Href, useRouter } from "expo-router";
import { BotaoMenu } from "@/assets/componentesgenericos/botaoMenu/botaoMenu";
import { CabecalhoCustomizavel } from "@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel";
import { getUsuario } from "@/services/auth/authService";

type hospitalCard = {
  id: number;
  titulo: string;
  descricao: string;
  img?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  infoHospital?: Href;
};

const cardsHospitais: hospitalCard[] = [
  {
    id: 1,
    titulo: "UBS Vila Romana",
    descricao: "Há 5 minutos de distância",
    img: ubsvilaromana,
    infoHospital: "/hospitais/vilaRomana",
  },
  {
    id: 2,
    titulo: "Hospital Municipal Sorocabana",
    descricao: "Há 10 minutos de distância",
    img: hospitalsorocabana,
    infoHospital: "VilaRomanaScreen",
  },
  {
    id: 3,
    titulo: "AME - Dr. Geraldo Paulo Bourrol",
    descricao: "Há 10 minutos de distância",
    img: amegeraldopaulo,
    infoHospital: "/hospitais/ameGeraldo",
  },
  {
    id: 4,
    titulo: "Por enquanto é só isso",
    descricao: "Deseja buscar por mais hospitais?",
  },
];

const HomeScreen = () => {
  const router = useRouter();
  const [nomeUsuario, setNomeUsuario] = useState<string>("");

  useEffect(() => {
    getUsuario().then((usuario) => {
      if (usuario) {
        setNomeUsuario(usuario.usuarioNome);
      }
    });
  }, []);

  return (
    <>
      <CabecalhoCustomizavel
        title={nomeUsuario ? `Seja bem-vindo, ${nomeUsuario}!` : "Seja bem-vindo!"}
      />
      <BotaoMenu />
      <View style={styles.visualizacaoTela}>
        <CardsSwipper></CardsSwipper>
        <HorizontalDivider></HorizontalDivider>
        <Text style={styles.txtTelaHome}> Unidades Próximas</Text>
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
    </>
  );
};

export default HomeScreen;
