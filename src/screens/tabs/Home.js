/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addPorducts} from '../../redux/slices/ProductSlice';
import CommonProductList from '../../common/CommonProductList';
const Home = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductList();
  }, []);


  const getProductList = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductList(json);
        dispatch(addPorducts(json));
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
      <CommonProductList itemList={productList} />
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
