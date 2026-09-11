import { BarraPesquisa } from '../pesquisa/BarraPesquisa'
import {styles} from './CabecalhoHomeTheme'
import {View, Text} from 'react-native'
import BuscaMedicamento from '../../../../presentation/views/testeBuscaMedicamento/testeBuscaMedicamento'
import { buscarMedicamentosService } from '../../../services/medicamentos/buscarMedicamentoService'

const serviceBusca = buscarMedicamentosService();

export const CabecalhoHome = () => {
     return(
            <>
                <View style={styles.cabecalho}> 
                    <Text style={styles.titulo}> BOAS - VINDAS</Text>
                    <Text style={styles.nomeUsuario}>Senhor Maurício dos Santos</Text>
                    {/* <BarraPesquisa></BarraPesquisa> */}
                    <BuscaMedicamento buscaService={serviceBusca}/>
                </View>
            </>
        )
}
