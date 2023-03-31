import React from 'react';
import { View, Text, StyleSheet, Share, Button} from 'react-native';

const MenuDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const shareData = async () => {
        await Share.share({
            message: 'Sharing Dish',
            url: './screens/MenuDetailsScreen'
        });
      }

  return (
    <View style={styles.container}>
      <Button onPress={shareData} title="Share"/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.ingredients}>{item.ingredients}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginVertical: 10,
  },
  ingredients: {
    fontSize: 16,
  },
});

export default MenuDetailsScreen;
