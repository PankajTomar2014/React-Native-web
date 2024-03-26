import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import {
  EmptyMessage,
  Header,
  ProductCard,
  SCREEN_HEIGHT,
} from '../Components/All';
import Colors from '../Components/Colors';
import {fetchProductApi} from '../Redux/products';

export default ProductList = props => {
  const dispatch = useDispatch();
  const {products, error, status} = useSelector(state => state.products);
  const isDarkMode = useColorScheme() == 'dark';

  useEffect(() => {
    dispatch(fetchProductApi());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        height: SCREEN_HEIGHT,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Header title={'Product List ( ' + products.length + ' )'} />
      <ScrollView>
        {status == 'failed' && <Text>{error}</Text>}
        <>
          <FlatList
            data={products}
            renderItem={({item, index}) => (
              <ProductCard type={'productList'} item={item} />
            )}
            ListEmptyComponent={() => (
              <EmptyMessage
                message={status == 'loading' ? 'Loading...' : 'No data found!'}
              />
            )}
          />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
