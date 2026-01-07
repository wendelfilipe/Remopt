import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1
    },
    containerTop: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 80
    },
    containerBottom: {
        flex:1,
        gap: 20,
        paddingHorizontal: 40
    },
    text: {
        color: "yellow",
        fontSize: 25
    }
})