
import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 7.5,
        marginTop: 15,
        width: 265,
        minHeight: 115,
        display: 'flex',
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    txtDescricao: {
        fontSize: 13,
        display: 'flex',
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})