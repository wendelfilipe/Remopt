import { ActivityIndicator, StyleSheet, View } from "react-native"

const LoadingComponent = () => {
    return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size="large" color="Blue" />
        </View>
    )
}

export default LoadingComponent;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})