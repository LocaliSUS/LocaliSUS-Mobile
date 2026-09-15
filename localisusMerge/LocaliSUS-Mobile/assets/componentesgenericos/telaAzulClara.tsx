import { PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

export const TelaAzulClara = ({children}: PropsWithChildren) => {
    return(
        <>
        <View style={styles.visualizacaoTela}>
            {children}
        </View>
        </>
    )
}

export const styles = StyleSheet.create({
     visualizacaoTela: {
    zIndex: 2,
    flex: 1,
    marginTop: -25,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#EBF9FF'
  },
})