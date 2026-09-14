import { View, StyleSheet} from 'react-native'
import { COLORS } from '../../../../presentation/theme/AppTheme'


export const styles = StyleSheet.create({
    rodape: {
        height: 150,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        width: "100%",
        backgroundColor: COLORS.darkBlue,
        color: COLORS.coralRed,
        zIndex: 200
    }
}   
)