import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen=({navigation})=>{
 // const navigation = useNavigation();
    return(
        <View style={styles.container}>

        <FlatList
           data={products}
           renderItem={({ item }) => (
              <Pressable onPress={()=> navigation.navigate('Product Details')} 
                         style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </Pressable>
          )}
          numColumns={2}
        />
  
      </View>
    )
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

  export default ProductsScreen