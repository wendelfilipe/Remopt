import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    containerItens: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 50
    },
    text: {
        fontSize: 20,
        color: "#FF0000"
    },
    containerButton: {
        backgroundColor: "#192056",
        borderRadius: 8
    }
})

export default styles