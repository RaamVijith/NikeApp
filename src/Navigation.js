import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopingCardScreen from "./screens/ShopingCardScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductScreens from "./screens/ProductScreens";

const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductScreens} />
            <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
            <Stack.Screen name="Cart" component={ShopingCardScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;