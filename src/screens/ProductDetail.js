/* eslint-disable prettier/prettier */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../common/CommonButton';
import {addItemToWishList} from '../redux/slices/WishlistSlice';
import {addItemToCart} from '../redux/slices/CartSlice';
const {width} = Dimensions.get('window');
const ProductDeatail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [fav, setfav] = useState(0);
  const dispatch = useDispatch();
  const setWhisList = () => {
    if (fav === 0) {
      setfav(1);
    } else {
      setfav(0);
    }
  };
  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <Header
          leftIcon={require('../images/left-arrow.png')}
          rightIcon={require('../images/bag.png')}
          title={'Product Detail'}
          OnClickLeftIcon={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: route.params.data.image,
            }}
            style={styles.itemImage}
          />
        </View>
        <View>
          <Text style={styles.itemName}>{route.params.data.title}</Text>
          <Text style={styles.itemDesc}>{route.params.data.description}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.itemPrice}>Price: </Text>
          <Text style={styles.itemPriceAmount}>
            {'$' + route.params.data.price}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.whisListBtn}
          onPress={() => {
            setWhisList();
            dispatch(addItemToWishList(route.params.data));
          }}>
          <Image
            source={
              fav === 1
                ? require('../images/heart_fill.png')
                : require('../images/heart.png')
            }
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        <CustomButton
          bg={'#FF9A0C'}
          title={'Add to Cart'}
          color={'#fff'}
          onClick={() => {
            dispatch(addItemToCart(route.params.data));
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDeatail;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: width,
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1.3,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 10,
    color: 'black',
    marginLeft: 20,
    marginEnd: 20,
  },
  itemDesc: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    color: '#5A5A5A',
    alignSelf: 'center',
    marginLeft: 20,
    marginEnd: 20,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 800,
    marginTop: 10,
    color: 'black',
    alignSelf: 'flex-start',
  },
  itemPriceAmount: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    color: 'green',
    alignSelf: 'flex-start',
  },
  whisListBtn: {
    position: 'absolute',
    right: 30,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  heartIcon: {
    width: 30,
    height: 30,
  },
});
