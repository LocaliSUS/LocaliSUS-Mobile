
import { StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

//componentes
import { COLORS } from "@/presentation/theme/AppTheme";

export default function MedicamentoScreen(){
    const router = useRouter();

    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/medicamentos')} style={styles.bntMenuCont}>
                <Image
                    style={styles.bntMenu}
                    source={require("@/assets/img/Menu.png")}
                />
            </TouchableOpacity>
        </View>
        </>
    )
}

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
    },
    bntMenu: {
        width: 75,
        height: 55,
    },
});