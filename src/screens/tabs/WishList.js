/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import CommonProductList from '../../common/CommonProductList';

const WishList = () => {
  const items = useSelector(state => state.wishlist);
  const [wishlistItems, setWishlitItems] = useState(items.data);

  return (
    <View>
      <Header title={'Wishlist Items'} />
      <View style={styles.itemList}>
        <CommonProductList itemList={wishlistItems} />
      </View>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemList: {
    marginTop: 10,
  },
});
