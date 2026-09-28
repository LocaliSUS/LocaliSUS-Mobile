import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import VideoEmbedAjuda from "@/presentation/components/VideoEmbedAjuda";
import { COLORS } from "@/presentation/theme/AppTheme";
import { CabecalhoCustomizavel } from "@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel";

const AjudaScreen = () => {
    return (
        <>
            <CabecalhoCustomizavel
                title="Ajuda"
                showBackButton={true}
            />

            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    Video Tutoriais
                </Text>
            </View>

            <View style={styles.embedsContainer}>
                <VideoEmbedAjuda />
            </View>
        </>

    )
}

export default AjudaScreen;

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 8,
        borderBottomColor: COLORS.deepPurple,
        borderBottomWidth: 2,
    },
    headerContainer: {
        margin: 18,
    },
    embedsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
})