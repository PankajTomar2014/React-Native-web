import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, useColorScheme} from 'react-native';

import Colors from '../Components/Colors';
import {useSelector} from 'react-redux';
import {
  EmptyMessage,
  Header,
  ProductCard,
  SCREEN_HEIGHT,
} from '../Components/All';

export default Cart = props => {
  const products = useSelector(state => state.cart.data);
  const isDarkMode = useColorScheme() == 'dark';
  useEffect(() => {
    console.log('useEffect-cart-----', products);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      {/* <Header isBack title={'Cart List ( ' + 15 + ' )'} /> */}
      <Header isBack title={'Cart List ( ' + products.length + ' )'} />

      <>
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <ProductCard type={'cart'} item={item} />
          )}
          ListEmptyComponent={() => <EmptyMessage message={'No data found!'} />}
        />
      </>
    </SafeAreaView>
  );
};
