/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductList(json);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/bag.png')}
        title={'Grocery App'}
        OnClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />

      <FlatList
        data={productList}
        renderItem={({item, index}) => {
          return (
            <View key={item.id} style={styles.productItem}>
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },
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
