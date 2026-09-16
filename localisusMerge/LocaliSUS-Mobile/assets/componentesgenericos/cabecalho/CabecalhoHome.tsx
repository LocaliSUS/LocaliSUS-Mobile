
import {styles} from './CabecalhoHomeTheme'
import {View, Text} from 'react-native'
import { PropsWithChildren } from 'react'

export const CabecalhoHome = ({children}: PropsWithChildren) => {
     return(
            <>
                <View style={styles.cabecalho}> 
                    {children}</View>
            </>
        )
}