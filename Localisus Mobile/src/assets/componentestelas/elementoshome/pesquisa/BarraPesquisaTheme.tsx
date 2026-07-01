import {View, StyleSheet} from 'react-native'
import {COLORS} from '../../../../presentation/theme/AppTheme'

export const styles = StyleSheet.create({ 
    barrapesquisa: {
        backgroundColor: "#cddee6ff",
        width: "85%",
        height: 35,
        borderRadius: 30,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 300,
        
    },
    placeholder: {
        marginLeft: 25 ,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#505050ff'
    }
})