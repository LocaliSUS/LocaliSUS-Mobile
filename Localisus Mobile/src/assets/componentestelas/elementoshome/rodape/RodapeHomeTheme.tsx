import { View, StyleSheet} from 'react-native'
import { COLORS } from '../../../../presentation/theme/AppTheme'


export const styles = StyleSheet.create({
    rodape: {
        zIndex: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 135,
        width: "100%",
        backgroundColor: COLORS.darkBlue,
    }
}   
)