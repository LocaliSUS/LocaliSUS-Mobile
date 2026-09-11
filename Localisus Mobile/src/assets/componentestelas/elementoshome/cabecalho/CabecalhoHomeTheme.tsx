import {View, StyleSheet} from 'react-native'
import {COLORS} from '../../../../presentation/theme/AppTheme'

export const styles = StyleSheet.create({ 
    cabecalho: {
        top: 0,
        backgroundColor: COLORS.darkBlue,
        width: "100%",
        height: 190,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})