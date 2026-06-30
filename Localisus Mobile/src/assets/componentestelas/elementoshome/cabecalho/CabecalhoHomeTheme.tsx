import {View, StyleSheet} from 'react-native'
import {COLORS} from '../../../../presentation/theme/AppTheme'

export const styles = StyleSheet.create({ 
    cabecalho: {
        top: 0,
        backgroundColor: COLORS.darkBlue,
        width: "100%",
        height: 175,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: "white",
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold'
    },
    nomeUsuario: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
    }
})