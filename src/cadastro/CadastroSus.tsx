import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, Alert, Platform, Touchable, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../theme/AppTheme";
import { RoundedButton } from "../components/RoudedButton";
//views models
import cadastroViewModel from './ViewModel';

export const CadastroSusScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const { login } = cadastroViewModel();

    return (

        <View style={styles.container}>

            <View style={styles.containerTop}>
                <Image
                    style={styles.imageFundo}
                    source={require('../../assets/imags/imagem.png')}
                />
                <Text style={styles.logoTxt}>LOCALISUS</Text>

            </View>

            <Image
                style={styles.imageFundo}
                source={require('../../assets/imags/hal-gatewood-nhG5gix93es-unsplash-dithered.png')}
            />

            <View style={styles.frm}>

                <View style={styles.frmInput}>

                    <Image
                        style={styles.frmicon}
                        source={require('../../assets/imags/imagem.png')} />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite seu email / Usuário"
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.frmInput}>

                    <Image
                        style={styles.frmicon}
                        source={require('../../assets/imags/imagem.png')} />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite sua senha..."
                        keyboardType="default"
                        secureTextEntry={true}
                    />

                </View>

                <View style={styles.frmInput}>

                    <Image
                        style={styles.frmicon}
                        source={require('../../assets/imags/imagem.png')} />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite sua senha..."
                        keyboardType="default"
                        secureTextEntry={true}
                    />

                </View>

                <View style={styles.btnEntrar}>
                    <RoundedButton
                        text="Cadastrar"
                        onPress={() => login()}
                    />
                </View>

                <View style={styles.frmRecuperar}>

                    {/* <TouchableOpacity onPress={() => navigation.navigate('RecuperarScreen')}>
            <Image
            style={ styles.frmicon} 
        source = { require('../../../../assets/img/user.png') }/>

            <Text style={styles.txtRegister}> 
              Ajuda
            </Text>

          </TouchableOpacity> */}

                </View>


            </View>

        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.segunda,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop: {
        width: '100%',
        height: '35%',
        backgroundColor: COLORS.primeira,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
    imageFundo: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        bottom: '30%',
    },
    logoTxt: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    frm: {
        width: '100%',
        height: '45%',
        backgroundColor: COLORS.segunda,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
    frmTitle: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    btnEntrar: {
        alignSelf: 'center',
        width: 300,
        marginTop: 30,
        cursor: 'pointer',
    },
    frmRecuperar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    frmText: {
        fontSize: 17
    },
    frmInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    frmicon: {
        width: 25,
        height: 25,
        marginTop: 10,
    },
    txtInput: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#d40b0bff',
        marginLeft: 15,
    },
    txtRegister: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        borderBottomColor: COLORS.segunda,
        borderBottomWidth: 1,
        marginLeft: 5,
        color: COLORS.segunda,
        fontSize: 17,
    },
})