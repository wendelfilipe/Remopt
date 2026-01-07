import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNameScreen } from "../types/NameRoutes/StackNameRoute";
import HomeScreen from "../screens/HomeScreen";
import ScanQRCodeScreen from "../screens/ScanQRCodeScreen";
import ExibitionScreen from "../screens/ExibitionScreen";


const Stack = createNativeStackNavigator<StackNameScreen>();

const StacksRoute: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                
            />
            <Stack.Screen
                name="ScanScreen"
                component={ScanQRCodeScreen}
            />
            <Stack.Screen
                name="ExibitionScreen"
                component={ExibitionScreen}
            />
        </Stack.Navigator>
    )
}

export default StacksRoute;