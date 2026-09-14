import { View, StyleSheet, FlatList, Text } from "react-native";
import { BotaoInfoHospital, InfoHospitalScreen, } from "../../presentation/components/InfoHospital";
import { ComponenteCard } from "../../presentation/components/Card";

const VilaRomanaInfoScreen = () => {

    return (
        <>
            <InfoHospitalScreen />
        </>

    )
}

export default VilaRomanaInfoScreen

const styles = StyleSheet.create({
    textosTelaInfoHospital: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 325,
    },

})