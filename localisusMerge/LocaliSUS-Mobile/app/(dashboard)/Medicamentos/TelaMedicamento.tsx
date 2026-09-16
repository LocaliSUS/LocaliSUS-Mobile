
import { StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

//componentes
import { COLORS } from "@/presentation/theme/AppTheme";
import { BotaoMenu } from "@/assets/componentesgenericos/botaoMenu/botaoMenu";

const MedicamentoScreen = () => {
    const router = useRouter();

    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/medicamentos')} style={styles.bntMenuCont}>
            </TouchableOpacity>            
            <BotaoMenu/>
        </View>
        </>
    )
}
export default MedicamentoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bntMenuCont: {
        marginRight: 336,
        top: 60,
    }
});