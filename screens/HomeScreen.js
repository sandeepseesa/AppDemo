import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const menuItems = [
    { name: 'Chicken Biryani', price: 'Rs. 180/-', ingredients: 'Ingredients: Basmati Rice, Chicken' },
    { name: 'Irani Chai', price: 'Rs. 10/-', ingredients: 'Ingredients: Buffalo Milk, Sugar, Tea Powder' },
    { name: 'Masala Dosa', price: 'Rs. 35/-', ingredients: 'Ingredients: Dough, Ground Nuts, Potato' },
    { name: 'Pasta', price: 'Rs. 50/-', ingredients: 'Ingredients: Dough, Masala' },
    { name: 'Roti', price: 'Rs. 20/-', ingredients: 'Ingredients: Dough' },
  ];

  return (
    <View style={styles.container}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('MenuDetails', {
                item: item,
              })
            }
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
  },
});

export default HomeScreen;
