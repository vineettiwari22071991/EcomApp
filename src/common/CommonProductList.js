/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CommonProductList = ({itemList}) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({item}) => {
          return (
            <View key={item.id}>
              <TouchableOpacity
                style={styles.productItem}
                onPress={() => {
                  navigation.navigate('Product Detail', {
                    data: item,
                  });
                }}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View style={styles.itemDetail}>
                  <Text style={styles.name}>
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + '...'
                      : item.tile}
                  </Text>
                  <Text style={styles.desc}>
                    {item.description.length > 30
                      ? item.description.substring(0, 30) + '...'
                      : item.description}
                  </Text>
                  <Text style={styles.price}>{'$' + item.price}</Text>
                  <Text style={styles.category}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CommonProductList;

const styles = StyleSheet.create({
  productItem: {
    width: Dimensions.get('window').width,
    height: 120,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#D3D3D3',
    margin: 5,
  },
  itemDetail: {
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 4,
  },
  category: {
    marginLeft: 20,
  },
});
