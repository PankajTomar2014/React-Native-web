import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import {
  EmptyMessage,
  Header,
  ProductCard,
  SCREEN_HEIGHT,
} from '../Components/All';
import Colors from '../Components/Colors';
import {useSelector} from 'react-redux';

export default Cart = props => {
  const products = useSelector(state => state.cart.data);
  const isDarkMode = useColorScheme() == 'dark';
  useEffect(() => {
    console.log('useEffect-cart-----', products);
  }, []);

  return (
    <SafeAreaView
      style={{
        height: SCREEN_HEIGHT,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Header title={'Cart List ( ' + products.length + ' )'} />
      <ScrollView>
        <>
          <FlatList
            data={products}
            renderItem={({item, index}) => (
              <ProductCard type={'cart'} item={item} />
            )}
            ListEmptyComponent={() => (
              <EmptyMessage message={'No data found!'} />
            )}
          />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
