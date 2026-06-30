import { View, StyleSheet} from 'react-native'
import { COLORS } from '../../../../presentation/theme/AppTheme'


export const styles = StyleSheet.create({
    rodape: {
        bottom: 0,
        zIndex: 2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 150,
        width: "100%",
        backgroundColor: COLORS.darkBlue,
    }
}   
)