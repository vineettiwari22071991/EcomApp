/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../common/Header';
import Home from './tabs/Home';
import Search from './tabs/Search';
import WishList from './tabs/WishList';
import Notification from './tabs/Notification';
import User from './tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <WishList />
      ) : selectedTab === 3 ? (
        <Notification />
      ) : (
        <User />
      )}

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={styles.bottomIcon}
            source={
              selectedTab === 0
                ? require('../images/home_fill.png')
                : require('../images/home.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={styles.bottomIcon}
            source={
              selectedTab === 1
                ? require('../images/search_fill.png')
                : require('../images/search.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            style={styles.bottomIcon}
            source={
              selectedTab === 2
                ? require('../images/heart_fill.png')
                : require('../images/heart.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={styles.bottomIcon}
            source={
              selectedTab === 3
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={styles.bottomIcon}
            source={
              selectedTab === 4
                ? require('../images/bell_fill.png')
                : require('../images/bell.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  bottomTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});
