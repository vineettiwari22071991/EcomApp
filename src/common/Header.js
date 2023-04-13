/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const {width} = Dimensions.get('window');
import {useSelector} from 'react-redux';
const Header = ({
  title,
  leftIcon,
  rightIcon,
  OnClickLeftIcon,
  OnClickRightIcon,
}) => {
  const cartItem = useSelector(state => state.cart);
  console.log(cartItem.data);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          OnClickLeftIcon();
        }}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.btn}>
        <Image source={rightIcon} style={styles.icon} />
        <View style={styles.cartItemCount}>
          <Text style={styles.cartItemText}>{cartItem.data.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  cartItemCount: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
  },
  cartItemText: {
    fontSize: 12,
    fontWeight: 300,
    alignSelf: 'center',
  },
});

export default Header;
