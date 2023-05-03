import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProductsScreen from './src/screens/ProductScreens';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShopingCardScreen from './src/screens/ShopingCardScreen';


export default function App() {
  return (
    <View 
    //style={styles.container}
    >

      {//<ProductsScreen/>  <ProductDetailsScreen />
      }

      <ShopingCardScreen />
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  itemContainer:{
    width: "50%", 
    padding: 1
  }
});

