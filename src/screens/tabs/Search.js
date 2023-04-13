/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Header from '../../common/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CommonProductList from '../../common/CommonProductList';
const Search = () => {
  const products = useSelector(state => state);
  const [search, setsearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSeaarchedList] = useState([]);

  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSeaarchedList(newData);
  };

  return (
    <View style={styles.container}>
      <Header title={'Search'} />
      <View style={styles.searchView}>
        <Image
          source={require('../../images/search.png')}
          style={styles.icon}
        />
        <TextInput
          value={search}
          placeholder="Search Item here..."
          style={styles.input}
          onChangeText={text => {
            setsearch(text);
            filterData(text);
          }}
        />
        {search !== '' && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setsearch('');
              setSeaarchedList([]);
            }}>
            <Image
              source={require('../../images/close.png')}
              style={styles.iconClose}
            />
          </TouchableOpacity>
        )}
      </View>
      <CommonProductList
        itemList={searchedList.length === 0 ? oldData : searchedList}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconClose: {
    width: 14,
    height: 14,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
  },
});
