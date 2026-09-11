import { BarraPesquisa } from '../pesquisa/BarraPesquisa'
import {styles} from './CabecalhoHomeTheme'
import {View, Text} from 'react-native'
import BuscaMedicamento from '../../../../presentation/views/testeBuscaMedicamento/testeBuscaMedicamento'
import { buscarMedicamentosService } from '../../../services/medicamentos/buscarMedicamentoService'
import { PropsWithChildren } from 'react'

export const CabecalhoHome = ({children}: PropsWithChildren) => {
     return(
            <>
                <View style={styles.cabecalho}> 
                    {children}</View>
            </>
        )
}
