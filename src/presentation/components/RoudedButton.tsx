//Cria um arquivo para componente de botões
//local: src/components/RoundedButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/AppTheme";

interface Props{
    text: string;

    //1. adiciona a tipagem do onpress com retorno Void (vazil)
    onPress?: () => void;
}

//2. Extraimos o onPress das propriedades (Props)
export const RoundedButton = ({text, onPress}: Props) => {
    return(
        <TouchableOpacity
        //3. Passamos a função recebida para o botão nativo
        onPress={onPress}
        style={styles.btn}>
            <Text style={ styles.txtBnt }>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primeira,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    txtBnt:{
        color: COLORS.segunda,
        fontWeight: 'bold',
        fontSize: 16,
    },
});